/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="../../typings/main.d.ts" />
/// <reference path="../middleware/_all" />
/// <reference path="./StartOptions" />

const Hapi = require("hapi");

class WebApp {

    private static activeModules(app: IAppBuilder): Collection<any> {

        var modules = new Collection<any>();

        modules.add({ type: require('good'), options: {} });
        modules.add({ type: require('good-console'), options: {} });
        modules.add({ type: require('blipp'), options: {} });

        if (app.configuration.properties["swagger:enabled"] === true)
        {
            let options = app.configuration.properties["swagger:options"];
            
            console.log('Swagger is enabled: ' + options);    
            
            modules.add({ type: require('hapi-swaggered'), options: {
                tags: options.tags,
                info: {
                    title: options.title,
                    description: options.description,
                    version: options.version
                }
            }});
        }
        
        if (app.configuration.properties["swaggerui:enabled"] === true)
        {
            console.log('Swagger UI is enabled.');
            
            // Register inert and vision which swagger UI is dependent upon.
            modules.add({type: require('inert')});
            modules.add({type: require('vision')});
            
            let options = app.configuration.properties["swaggerui:options"];
            
            modules.add({ type: require('hapi-swaggered-ui'), options: {
                title: options.title,
                path: options.path,
                authorization: {
                    field: 'apiKey',
                    scope: 'query', // header works as well
                    valuePrefix: 'bearer ',// prefix incase
                    //defaultValue: 'token',
                    placeholder: 'Enter your apiKey here'
                },
                swaggerOptions: {
                    validatorUrl: null
                }
            }});
        }
        
        return modules;
    }

    static getMethods(obj) {
        var res = [];
        for (var m in obj) {
            console.log('LOOOOP!!');
            console.log(m);

            if (typeof obj[m] == "function") {
                res.push(m)
            }
        }
        return res;
    }

    static Start<T extends IStartup>(startup: { new (): T; }, options: StartOptions) {
        //static Start<T extends IStartup>(options: StartOptions) {

        //var t = new T();
        var start = new startup();
        console.log('START CONFIGURATION: ' + start);

        var appBuilder = new AppBuilder();
        start.Configuration(appBuilder);

        const server = new Hapi.Server();
        server.connection({ port: options.port });

        console.log('Count of controllers: ' + appBuilder.controllers.count());

        appBuilder.controllers.getItems().forEach(function(type) {

            console.log('Controller Type: ' + type);
            var controllerInstance = new type();
            console.log('Controller Instance: ' + controllerInstance);

            var routePrefix = Reflect.getMetadata("RoutePrefix", controllerInstance.constructor);
            console.log('routePrefix: ' + routePrefix);

            var methods = WebApp.getMethods(controllerInstance.constructor);

            var methodNames = Object.getOwnPropertyNames(type.prototype).filter(function(p) {
                if (p == 'constructor') {
                    return false;
                }

                return typeof type.prototype[p] === 'function';
            })

            console.log('methodNames:');
            console.log(methodNames);

            methodNames.forEach(function(name) {

                //console.log(controllerInstance[name]);
                //console.log(Object.getOwnPropertyDescriptor(type, name));
                //console.log(Object.getOwnPropertyDescriptor(type.prototype, name));
                //console.log(Object.getOwnPropertyDescriptor(controllerInstance, name));

                var methodDescriptor = Object.getOwnPropertyDescriptor(type.prototype, name);

                var metaMethod = Reflect.getMetadata('Method', methodDescriptor.value);
                var metaRoute = Reflect.getMetadata('Route', methodDescriptor.value);

                console.log('Method: ' + metaMethod);
                console.log('Route: ' + metaRoute);
                
                //var metaMethod = Reflect.getMetadata("Method", methodDescriptor.value);
                //var metaRoute = Reflect.getMetadata("Route", methodDescriptor.value);
                //console.log('Method:' + metaMethod);
                //console.log('Route:' + metaRoute);
                
                // TODO: Do a safe route building here, supporting prefix with and without trailing /.
                var safeRoute = '/' + routePrefix + '/' + metaRoute;

                console.log('Safe Route: ' + safeRoute);

                var handler = new RequestHandler(type, name);

                server.route({
                    method: metaMethod,
                    path: safeRoute,
                    config: {
                        tags: ['api'],
                        description: '[Should be read from decoration on API method]'
                    },
                    handler: function(request, reply) {
                        // IMPORTANT: We can't bind the process method directly to the handler property, that will invalidate .this within the handler.
                        handler.process(request, reply);
                    }
                });
            });
        });

        var modules = WebApp.activeModules(appBuilder);

        modules.getItems().forEach(function(module) {
            server.register({
                register: module.type,
                options: module.options
            }, (err) => {
                if (err) {
                    console.error('Failed to load plugin:', err);
                }
            });
        });
        
        if (appBuilder.configuration.properties["directory:browser"] === true) {
            
            let browserPath = appBuilder.configuration.properties["directory:path"];
            let browserRoute = appBuilder.configuration.properties["directory:route"];
            
             server.route({
                    method: 'GET',
                    path: browserRoute,
                    handler: {
                        directory: {
                            path: browserPath,
                            listing: true
                        }
                    }
                });
        }

        server.start((err) => {

            if (err) {
                throw err;
            }

            console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
        });
    }
}

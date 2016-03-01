const merge = require('merge');
const Hapi = require('hapi');
import "reflect-metadata";

//A typescript implementation of a generic Collection
class Collection<T> {

    // The underlying array data structure of the collection
    private _items = [];

    // Get the collection as an array
    public getItems() {
        return this._items;
    }

    // Get a specific item from a collection given it's index
    public getItem(index: number): T {
        return this._items[index];
    }

    // Length of the collection
    public count() { return this._items.length; }

    // Add an object to the collection
    public add(item: T) {
        this._items.push(item);
    }

    // Delete an object from the collection
    public delete(itemIndex: number) {
        this._items.splice(itemIndex, 1);
    }

    // Find the index of a given object in a collection
    public indexOfItem(obj: T, fromIndex?: number): number {
        if (fromIndex == null) {
            fromIndex = 0;
        } else if (fromIndex < 0) {
            fromIndex = Math.max(0, this._items.length + fromIndex);
        }
        for (var i = fromIndex, j = this._items.length; i < j; i++) {
            if (this._items[i] === obj)
                return i;
        }
        return -1;
    }
}

interface IDictionary2 {
    add(key: string, value: any): void;
    remove(key: string): void;
    containsKey(key: string): boolean;
    keys(): string[];
    values(): any[];
}

class Dictionary2 {

    private _keys: string[] = new Array<string>();
    private _values: any[] = new Array<any>();

    constructor(init: { key: string; value: any; }[]) {

        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }

    add(key: string, value: any) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    }

    remove(key: string) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);

        delete this[key];
    }

    keys(): string[] {
        return this._keys;
    }

    values(): any[] {
        return this._values;
    }

    containsKey(key: string) {
        if (typeof this[key] === "undefined") {
            return false;
        }

        return true;
    }

    toLookup(): IDictionary2 {
        return this;
    }
}

interface IDictionary<TKey, TValue> {
    add(key: TKey, value: TValue): void;
    remove(key: TKey): void;
    containsKey(key: TKey): boolean;
    keys(): TKey[];
    values(): TValue[];
}

class Dictionary<TKey extends string, TValue> {

    private _keys: TKey[] = new Array<TKey>();
    private _values: TValue[] = new Array<TValue>();

    /*
        constructor(init: { key: string; value: any; }[]) {
    
            for (var x = 0; x < init.length; x++) {
                this[init[x].key] = init[x].value;
                this._keys.push(init[x].key);
                this._values.push(init[x].value);
            }
        }*/

    add(key: TKey, value: TValue) {
        this[String(key)] = value;
        this._keys.push(key);
        this._values.push(value);
    }

    remove(key: TKey) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);

        delete this[String(key)];
    }

    keys(): TKey[] {
        return this._keys;
    }

    values(): TValue[] {
        return this._values;
    }

    containsKey(key: TKey) {
        if (typeof this[String(key)] === "undefined") {
            return false;
        }

        return true;
    }

    /*
        containsKey(key: TKey) {
            return this._keys.indexOf(key, 0) > -1;
        }*/

    /*
    toLookup(): IDictionary {
        return this;
    }*/
}

/*
export class HttpRouteCollection implements 
{
    
}*/

export interface IFilter {

}

export interface IHttpRoute {
    handler: ApiController;
    routeTemplate: string;
}

export class HttpResponseMessage {

}

export class HttpRequestMessage {

    constructor(hapiRequest: any) {
        this.hapiRequest = hapiRequest;
    }

    get requestUri(): any {
        return this.hapiRequest.url;
    }

    get method(): any {
        return this.hapiRequest.method.toUpperCase();
    }

    get headers(): any {
        return this.hapiRequest.headers;
    }

    get content(): any {
        return this.hapiRequest.raw.req;
    }

    get version(): string {
        return this.hapiRequest.raw.req.httpVersion;
    }
    
    //content: string;
    properties: Array<any>;
    hapiRequest: any;
}

export abstract class HttpMessageHandler {
    public abstract sendAsync(request: HttpRequestMessage): HttpResponseMessage;
}

export class StartOptions {
    public port: number;
    public settings: IDictionary2;

}

export interface IAppBuilder {
    /* Consider moving these methods into separate "extensions" to this interface? */
    //userCors(corsOptions: any);
    
    configuration: HttpConfiguration;

    useDirectoryBrowser();
    useJwtBearerAuthentication(jwtBearerAuthenticationOptions: any);
    useOAuthBearerAuthentication(oAuthBearerAuthenticationOptions: any);
    useStaticFiles(requestPath: string);
    useWelcomePage();
    useWebApi(config: HttpConfiguration);
    controllers: Collection<any>;
}

export class AppBuilder implements IAppBuilder {

    private config: HttpConfiguration

    public get configuration(): HttpConfiguration {
        return this.config;
    }
    
    /** Not implemented. */
    /*public useCors(corsOptions: any) {

    }*/
    
    /** Not implemented. */
    public useDirectoryBrowser() {

    }
    
    /** Not implemented. */
    public useJwtBearerAuthentication(jwtBearerAuthenticationOptions: any) {

    }
    
    /** Not implemented. */
    public useOAuthBearerAuthentication(oAuthBearerAuthenticationOptions: any) {

    }
    
    /** Not implemented */
    public useStaticFiles(requestPath: string) {

    }

    public useWelcomePage() { }

    public controllers: Collection<any> = new Collection<any>();

    public useWebApi(config: HttpConfiguration) {
        this.config = config;
        console.log('CONFIG!!!');
        console.log(this.config);
    }
}

export interface IStartup {
    Configuration(IAppBuilder);
}

class RequestHandler {
    type: any;
    method: string;

    constructor(type: any, method: string) {

        console.log('CONSTRUCTOR OF REQUEST HANDLER');
        console.log(type);
        console.log(method);

        this.type = type;
        this.method = method;
    }

    process(request, reply) {
        console.log('Processing Request...');
        var controller = new this.type();
        
        //console.log('Controller Instance:');
        //console.log(controller);
        
        // Encapsulate the request in WebAPI-similar request message.
        controller.request = new HttpRequestMessage(request);

        var parameters = [];

        // TODO: Register the parameter NAMES for controller methods so we can send correct params.
        for (var k in request.params) {
            console.log('Parameter: ' + k + ':' + request.params[k]);
            parameters.push(request.params[k]);
            /*if (request.params.hasOwnProperty(k)) {
               user[k] = request.params[k];
            }*/
        }

        var response = controller[this.method](parameters);
        reply(response);
    };
}

export class WebApp {

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

        server.start((err) => {

            if (err) {
                throw err;
            }

            console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
        });
    }
}



/** Represents a configuration of the API */
export class HttpConfiguration {

    private swaggerOptions: any;
    private swaggerUiOptions: any;

    public app: WebApp;
    
    /** Properties populated during configuration that is used during api startup. */
    public properties: IDictionary<string, any> = new Dictionary<string, any>();
    
    /** Collection of filters applied to all incoming requests. */
    public filters: Collection<IFilter>;
    
    /** Ordered list of message handlers which will be invoked upon requests. */
    //public messageHandlers: Array<HttpMessageHandler>;
    public messageHandlers: Collection<IHttpRoute>;

    public services: Collection<any>;
    
    /** Collection of routes discovered at runtime. */
    public routes: Collection<IHttpRoute>;

    constructor() {
        this.swaggerOptions = {
            title: 'API',
            description: '',
            version: '0.0.1'
        };

        this.swaggerUiOptions = {
            path: '/swagger'
        };
    }
    
    /** Enables swagger API definition to be downloaded */
    public enableSwagger(options: any) {
        this.properties.add("swagger:enabled", true);
        this.swaggerOptions = merge(this.swaggerOptions, options);
        this.properties.add("swagger:options", this.swaggerOptions);
        
        //this.swaggerEnabled = true;
        //console.log('Default Swagger Options: ', this.swaggerOptions);
        //console.log('Configured Swagger Options: ', this.swaggerOptions);
    };

    /** Enables swagger UI to be accessible and used for API testing and documentation. */
    public enableSwaggerUi(options: any) {
        this.properties.add("swaggerui:enabled", true);
        this.swaggerUiOptions = merge(this.swaggerUiOptions, options);
        this.properties.add("swaggerui:options", this.swaggerUiOptions);
    };

}



export enum HttpStatusCode {
    Continue = 100,
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    MovedPermanently = 301,
    Moved = 301,
    Found = 302,
    Redirect = 302,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    InternalServerError = 500,
    NotImplemented = 501,
    ServiceUnavailable = 503
};

export interface IPrincipal {
    identity: IIdentity;
    isInRole(role: string);
}

export interface IIdentity {
    authenticationType: string,
    isAuthenticated: boolean,
    name: string
}



export function RoutePrefix(prefix: string) {
    return function(target: Function) {
        Reflect.defineMetadata("RoutePrefix", prefix, target);
        //Reflect.defineMetadata("RoutePrefix", prefix, RoutePrefix, "method");
        //Reflect.defineMetadata("routeprefix", prefix, target, null);
        
        //console.log('Register RoutePrefix for service: "/' + prefix + '"');
        //console.log("Target: ", target);
    }
}

export function Route(template: string) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        console.log('ROUTE DECORATOR!');
        Reflect.defineMetadata("Route", template, descriptor.value);
        return descriptor;
    };
}

export function HttpGet() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        console.log('HTTP GET DECORATOR!');
        console.log(descriptor);

        //target.actions.add();

        Reflect.defineMetadata("Method", 'GET', descriptor.value);
        return descriptor;
    };
}

export function HttpPost() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'POST', descriptor.value);
        return descriptor;
    };
}

export function HttpPut() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'PUT', descriptor.value);
        return descriptor;
    };
}

export function HttpDelete() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'DELETE', descriptor.value);
        return descriptor;
    };
}

export interface IApiController {
    user: IPrincipal

    ok();
    notFound();
    statusCode(code: HttpStatusCode);
    internalServerError();

    actionContext: any;
    controllerContext: any;
    requestContext: any;
    request: HttpRequestMessage;
}

export class ApiController implements IApiController {
    constructor() {
        this.user = null;
    }

    user: IPrincipal
    actionContext: any;
    controllerContext: any;
    requestContext: any;
    request: HttpRequestMessage;

    ok() { };
    notFound() { };
    statusCode(code: HttpStatusCode) { };
    internalServerError() { };
}

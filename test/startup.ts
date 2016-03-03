/// <reference path="../dist/lib/hapi-webapi.d.ts" />
/// <reference path="./controllers/UsersController" />

const pgk = require('./package.json');

class Startup implements IStartup {
    Configuration(app: IAppBuilder) {

        var config = new HttpConfiguration();
        app.useWebApi(config);

        config.enableSwagger({ title: 'Directory API', description: pgk.description, version: pgk.version });
        config.enableSwaggerUi({ title: 'API Documentation v' + pgk.version, path: '/docs' });

        // This is different from ASP.NET WebAPI, controllers needs to manually be registered.
        app.controllers.add(UsersController);

        app.useWelcomePage();
        app.useDirectoryBrowser('./public/', '/files/');
        //app.useStaticFiles('static');
    }
}
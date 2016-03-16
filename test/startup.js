"use strict";
const WebApi = require("../lib/Index");
const UsersController_1 = require("./Controllers/UsersController");
const pgk = require("../package.json");
class Startup {
    Configuration(app) {
        var config = new WebApi.HttpConfiguration();
        app.useWebApi(config);
        config.enableSwagger({ title: 'Directory API', description: pgk.description, version: pgk.version });
        config.enableSwaggerUi({ title: 'API Documentation v' + pgk.version, path: '/docs' });
        app.controllers.add(UsersController_1.UsersController);
        app.useWelcomePage();
    }
}
exports.Startup = Startup;

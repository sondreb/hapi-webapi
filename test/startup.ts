/// <reference path="../lib/Index.d.ts" />
"use strict";


import {IStartup} from '../lib/Index';

import WebApi = require("../lib/Index");
import {UsersController} from "./Controllers/UsersController";

const pgk = require("../package.json");

export class Startup implements WebApi.IStartup {
    Configuration(app: WebApi.IAppBuilder) {

        var config = new WebApi.HttpConfiguration();
        app.useWebApi(config);

        config.enableSwagger({ title: 'Directory API', description: pgk.description, version: pgk.version });
        config.enableSwaggerUi({ title: 'API Documentation v' + pgk.version, path: '/docs' });

        // This is different from ASP.NET WebAPI, controllers needs to manually be registered.
        app.controllers.add(UsersController);

        app.useWelcomePage();
        //app.useDirectoryBrowser('./public/', '/files/');
        //app.useStaticFiles('static');
    }
}
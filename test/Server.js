"use strict";
const WebApi = require("../lib/Index");
const Startup_1 = require("./Startup");
var options = new WebApi.StartOptions();
options.port = 4500;
WebApi.WebApp.Start(Startup_1.Startup, options);

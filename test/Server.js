"use strict";
var WebApi = require("../lib/Index");
var Startup_1 = require("./Startup");
var options = new WebApi.StartOptions();
options.port = 4500;
WebApi.WebApp.Start(Startup_1.Startup, options);
//# sourceMappingURL=Server.js.map
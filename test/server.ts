/// <reference path="../typings/main.d.ts" />
/// <reference path="../dist/lib/hapi-webapi.d.ts" />
/// <reference path="./startup" />
"use strict";
var webapi = require("../dist/lib/hapi-webapi");

var options = new webapi.StartOptions();
options.port = 4500;

webapi.WebApp.Start<webapi.Startup>(webapi.Startup, options);
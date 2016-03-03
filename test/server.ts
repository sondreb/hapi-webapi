/// <reference path="../typings/main.d.ts" />
/// <reference path="../lib/Index.d.ts" />

"use strict";

import WebApi = require("../lib/Index");
import {Startup} from "./Startup";

var options = new WebApi.StartOptions();
options.port = 4500;

WebApi.WebApp.Start<Startup>(Startup, options);
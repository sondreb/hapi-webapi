/// <reference path="globals.d.ts" />

import {WebApp, StartOptions} from '../server';
import {Startup} from "./Startup";

var options = new StartOptions();
options.port = 4600;

WebApp.Start<Startup>(Startup, options);
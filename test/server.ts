import {StartOptions, WebApp} from 'hapi-webapi';
import {Startup} from './startup';

var options = new StartOptions();
options.port = 4500;

WebApp.Start<Startup>(Startup, options);
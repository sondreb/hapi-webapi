"use strict";

import {IAppBuilder} from "./AppBuilder";

export interface IStartup {
    Configuration(IAppBuilder);
}

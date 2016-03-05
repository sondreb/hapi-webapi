"use strict";

import {IIdentity} from "./Identity";

export interface IPrincipal {
    identity: IIdentity;
    isInRole(role: string);
}
/// <reference path="./Identity" />
"use strict";


interface IPrincipal {
    identity: IIdentity;
    isInRole(role: string);
}
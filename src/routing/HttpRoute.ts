/// <reference path="../controllers/_all" />
"use strict";

interface IHttpRoute {
    handler: IApiController;
    routeTemplate: string;
}
/// <reference path="../security/_all" />
/// <reference path="../http/_all" />
/// <reference path="../middleware/_all" />
"use strict";

interface IApiController {
    user: IPrincipal;
    actionContext: any;
    controllerContext: any;
    requestContext: any;
    request: HttpRequestMessage;
}

class ApiController implements IApiController {
    constructor() {
        this.user = null;
    }

    user: IPrincipal
    actionContext: any;
    controllerContext: any;
    requestContext: any;
    request: HttpRequestMessage;

    protected ok() { };
    
    protected notFound() { 
        return new Error();
    };
    
    protected statusCode(code: HttpStatusCode) { };
    protected internalServerError() { };
}
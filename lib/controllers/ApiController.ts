"use strict";

import {IPrincipal} from "../security/Principal";
import {HttpRequestMessage} from "../middleware/HttpRequestMessage";
import {HttpStatusCode} from "../http/HttpStatusCode";

export interface IApiController {
    user: IPrincipal;
    actionContext: any;
    controllerContext: any;
    requestContext: any;
    request: HttpRequestMessage;
}

export class ApiController implements IApiController {
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
/// <reference path="../../lib/Index.d.ts" />
"use strict";

import WebApi = require("../../lib/Index");

@WebApi.RoutePrefix("users")
export class UsersController extends WebApi.ApiController {
    @WebApi.Route("{id}")
    @WebApi.HttpGet()  // Also supports @HttpPut, @HttpPost, @HttpDelete
    getUserById(id: string) {

        return "getUserById:" + id;
    }

    @WebApi.Route("search")
    @WebApi.HttpPost() 
    searchUsers(id: string) {
        return this.notFound();
    }

    @WebApi.Route("list")
    @WebApi.HttpGet()
    list() {
        // Examples of request object values available:
        // Url object.
        console.log(this.request.requestUri);

        // HTTP version.
        console.log('HTTP Version: ' + this.request.version);

        // HTTP headers.
        console.log(this.request.headers);

        return "Hello World!";
    }
}
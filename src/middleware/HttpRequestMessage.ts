"use strict";

export class HttpRequestMessage {

    constructor(hapiRequest: any) {
        this.hapiRequest = hapiRequest;
    }

    get requestUri(): any {
        return this.hapiRequest.url;
    }

    get method(): any {
        return this.hapiRequest.method.toUpperCase();
    }

    get headers(): any {
        return this.hapiRequest.headers;
    }

    get content(): any {
        return this.hapiRequest.raw.req;
    }

    get version(): string {
        return this.hapiRequest.raw.req.httpVersion;
    }
    
    //content: string;
    properties: Array<any>;
    hapiRequest: any;
}

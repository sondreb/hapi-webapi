"use strict";
class HttpRequestMessage {
    constructor(hapiRequest) {
        this.hapiRequest = hapiRequest;
    }
    get requestUri() {
        return this.hapiRequest.url;
    }
    get method() {
        return this.hapiRequest.method.toUpperCase();
    }
    get headers() {
        return this.hapiRequest.headers;
    }
    get content() {
        return this.hapiRequest.raw.req;
    }
    get version() {
        return this.hapiRequest.raw.req.httpVersion;
    }
}
exports.HttpRequestMessage = HttpRequestMessage;
//# sourceMappingURL=HttpRequestMessage.js.map
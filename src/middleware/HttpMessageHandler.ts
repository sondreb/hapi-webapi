/// <reference path="./HttpRequestMessage" />
/// <reference path="./HttpResponseMessage" />
"use strict";

abstract class HttpMessageHandler {
    public abstract sendAsync(request: HttpRequestMessage): HttpResponseMessage;
}
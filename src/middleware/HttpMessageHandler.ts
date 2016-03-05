"use strict";

import {HttpRequestMessage} from "./HttpRequestMessage";
import {HttpResponseMessage} from "./HttpResponseMessage";

export abstract class HttpMessageHandler {
    public abstract sendAsync(request: HttpRequestMessage): HttpResponseMessage;
}
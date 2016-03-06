import { HttpRequestMessage } from "./HttpRequestMessage";
import { HttpResponseMessage } from "./HttpResponseMessage";
export declare abstract class HttpMessageHandler {
    abstract sendAsync(request: HttpRequestMessage): HttpResponseMessage;
}

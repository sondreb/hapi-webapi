import { IPrincipal } from "../security/Principal";
import { HttpRequestMessage } from "../middleware/HttpRequestMessage";
import { HttpStatusCode } from "../http/HttpStatusCode";
export interface IApiController {
    user: IPrincipal;
    actionContext: any;
    controllerContext: any;
    requestContext: any;
    request: HttpRequestMessage;
}
export declare class ApiController implements IApiController {
    constructor();
    user: IPrincipal;
    actionContext: any;
    controllerContext: any;
    requestContext: any;
    request: HttpRequestMessage;
    protected ok(): void;
    protected notFound(): Error;
    protected statusCode(code: HttpStatusCode): void;
    protected internalServerError(): void;
}

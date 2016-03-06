import { IDictionary, Collection } from "../collections/Index";
import { IFilter } from "../middleware/Filter";
import { IHttpRoute } from "../routing/HttpRoute";
import { WebApp } from "./WebApp";
export declare class HttpConfiguration {
    private swaggerOptions;
    private swaggerUiOptions;
    app: WebApp;
    properties: IDictionary<string, any>;
    filters: Collection<IFilter>;
    messageHandlers: Collection<IHttpRoute>;
    services: Collection<any>;
    routes: Collection<IHttpRoute>;
    constructor();
    enableSwagger(options: any): void;
    enableSwaggerUi(options: any): void;
}

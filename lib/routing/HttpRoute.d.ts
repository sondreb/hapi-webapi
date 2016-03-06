import { IApiController } from "../controllers/ApiController";
export interface IHttpRoute {
    handler: IApiController;
    routeTemplate: string;
}

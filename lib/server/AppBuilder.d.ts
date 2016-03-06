import { Collection } from "../collections/Collection";
import { HttpConfiguration } from "./HttpConfiguration";
export interface IAppBuilder {
    configuration: HttpConfiguration;
    useDirectoryBrowser(localPath: string, requestPath: string): any;
    useJwtBearerAuthentication(jwtBearerAuthenticationOptions: any): any;
    useOAuthBearerAuthentication(oAuthBearerAuthenticationOptions: any): any;
    useStaticFiles(requestPath: string): any;
    useWelcomePage(): any;
    useWebApi(config: HttpConfiguration): any;
    controllers: Collection<any>;
}
export declare class AppBuilder implements IAppBuilder {
    private config;
    configuration: HttpConfiguration;
    useDirectoryBrowser(localPath: string, requestPath: string): void;
    useJwtBearerAuthentication(jwtBearerAuthenticationOptions: any): void;
    useOAuthBearerAuthentication(oAuthBearerAuthenticationOptions: any): void;
    useStaticFiles(requestPath: string): void;
    useWelcomePage(): void;
    controllers: Collection<any>;
    useWebApi(config: HttpConfiguration): void;
}

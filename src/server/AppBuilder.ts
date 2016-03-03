/// <reference path="../collections/_all" />
/// <reference path="./HttpConfiguration" />

interface IAppBuilder {
    /* Consider moving these methods into separate "extensions" to this interface? */
    //userCors(corsOptions: any);
    
    configuration: HttpConfiguration;

    useDirectoryBrowser(localPath: string, requestPath: string);
    useJwtBearerAuthentication(jwtBearerAuthenticationOptions: any);
    useOAuthBearerAuthentication(oAuthBearerAuthenticationOptions: any);
    useStaticFiles(requestPath: string);
    useWelcomePage();
    useWebApi(config: HttpConfiguration);
    controllers: Collection<any>;
}

class AppBuilder implements IAppBuilder {

    private config: HttpConfiguration

    public get configuration(): HttpConfiguration {
        return this.config;
    }
    
    /** Not implemented. */
    /*public useCors(corsOptions: any) {

    }*/
    
    /** Not implemented. */
    public useDirectoryBrowser(localPath: string, requestPath: string) {
        if (this.config == undefined)
        {
            throw Error('Method must be called after useWebApi.');
        }
        
        this.config.properties.add('directory:browser', true);        
        this.config.properties.add('directory:path', localPath);
        this.config.properties.add('directory:route', requestPath);
    }
    
    /** Not implemented. */
    public useJwtBearerAuthentication(jwtBearerAuthenticationOptions: any) {

    }
    
    /** Not implemented. */
    public useOAuthBearerAuthentication(oAuthBearerAuthenticationOptions: any) {

    }
    
    /** Not implemented */
    public useStaticFiles(requestPath: string) {
        if (this.config == undefined)
        {
            throw Error('Method must be called after useWebApi.');
        }
    }

    public useWelcomePage() { 
        
    }

    public controllers: Collection<any> = new Collection<any>();

    public useWebApi(config: HttpConfiguration) {
        this.config = config;
        console.log('CONFIG!!!');
        console.log(this.config);
    }
}

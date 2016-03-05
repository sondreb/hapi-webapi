"use strict";
var Collection_1 = require("../collections/Collection");
class AppBuilder {
    constructor() {
        this.controllers = new Collection_1.Collection();
    }
    get configuration() {
        return this.config;
    }
    useDirectoryBrowser(localPath, requestPath) {
        if (this.config == undefined) {
            throw Error('Method must be called after useWebApi.');
        }
        this.config.properties.add('directory:browser', true);
        this.config.properties.add('directory:path', localPath);
        this.config.properties.add('directory:route', requestPath);
    }
    useJwtBearerAuthentication(jwtBearerAuthenticationOptions) {
    }
    useOAuthBearerAuthentication(oAuthBearerAuthenticationOptions) {
    }
    useStaticFiles(requestPath) {
        if (this.config == undefined) {
            throw Error('Method must be called after useWebApi.');
        }
    }
    useWelcomePage() {
    }
    useWebApi(config) {
        this.config = config;
        console.log('CONFIG!!!');
        console.log(this.config);
    }
}
exports.AppBuilder = AppBuilder;
//# sourceMappingURL=AppBuilder.js.map
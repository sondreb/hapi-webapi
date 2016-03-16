"use strict"

const merge = require("merge");

import {IDictionary, Dictionary} from "../collections/Dictionary";
import {Collection} from "../collections/Collection";

import {IFilter} from "../middleware/Filter";
import {IHttpRoute} from "../routing/HttpRoute";
import {WebApp} from "./WebApp";

/** Represents a configuration of the API */
export class HttpConfiguration {

    private swaggerOptions: any;
    private swaggerUiOptions: any;

    public app: WebApp;
    
    /** Properties populated during configuration that is used during api startup. */
    public properties: IDictionary<string, any> = new Dictionary<string, any>();
    
    /** Collection of filters applied to all incoming requests. */
    public filters: Collection<IFilter>;
    
    /** Ordered list of message handlers which will be invoked upon requests. */
    //public messageHandlers: Array<HttpMessageHandler>;
    public messageHandlers: Collection<IHttpRoute>;

    public services: Collection<any>;
    
    /** Collection of routes discovered at runtime. */
    public routes: Collection<IHttpRoute>;

    constructor() {
        this.swaggerOptions = {
            title: 'API',
            description: '',
            version: '0.0.1'
        };

        this.swaggerUiOptions = {
            path: '/swagger'
        };
    }
    
    /** Enables swagger API definition to be downloaded */
    public enableSwagger(options: any) {
        this.properties.add("swagger:enabled", true);
        this.swaggerOptions = merge(this.swaggerOptions, options);
        this.properties.add("swagger:options", this.swaggerOptions);
        
        //this.swaggerEnabled = true;
        //console.log('Default Swagger Options: ', this.swaggerOptions);
        //console.log('Configured Swagger Options: ', this.swaggerOptions);
    };

    /** Enables swagger UI to be accessible and used for API testing and documentation. */
    public enableSwaggerUi(options: any) {
        this.properties.add("swaggerui:enabled", true);
        this.swaggerUiOptions = merge(this.swaggerUiOptions, options);
        this.properties.add("swaggerui:options", this.swaggerUiOptions);
    };

}
"use strict";
const merge = require("merge");
const Dictionary_1 = require("../collections/Dictionary");
class HttpConfiguration {
    constructor() {
        this.properties = new Dictionary_1.Dictionary();
        this.swaggerOptions = {
            title: 'API',
            description: '',
            version: '0.0.1'
        };
        this.swaggerUiOptions = {
            path: '/swagger'
        };
    }
    enableSwagger(options) {
        this.properties.add("swagger:enabled", true);
        this.swaggerOptions = merge(this.swaggerOptions, options);
        this.properties.add("swagger:options", this.swaggerOptions);
    }
    ;
    enableSwaggerUi(options) {
        this.properties.add("swaggerui:enabled", true);
        this.swaggerUiOptions = merge(this.swaggerUiOptions, options);
        this.properties.add("swaggerui:options", this.swaggerUiOptions);
    }
    ;
}
exports.HttpConfiguration = HttpConfiguration;

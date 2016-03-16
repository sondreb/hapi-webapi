"use strict";
require("reflect-metadata");
function Route(template) {
    return (target, propertyKey, descriptor) => {
        console.log('ROUTE DECORATOR!');
        Reflect.defineMetadata("Route", template, descriptor.value);
        return descriptor;
    };
}
exports.Route = Route;

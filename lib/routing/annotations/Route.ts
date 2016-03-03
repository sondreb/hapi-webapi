/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="../../../typings/main.d.ts" />
"use strict";

require("reflect-metadata");

export function Route(template: string) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        console.log('ROUTE DECORATOR!');
        Reflect.defineMetadata("Route", template, descriptor.value);
        return descriptor;
    };
}
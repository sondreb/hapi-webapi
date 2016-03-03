/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
"use strict";

function Route(template: string) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        console.log('ROUTE DECORATOR!');
        Reflect.defineMetadata("Route", template, descriptor.value);
        return descriptor;
    };
}
/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="../../../typings/main.d.ts" />
"use strict";

require("reflect-metadata");

export function HttpPut() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'PUT', descriptor.value);
        return descriptor;
    };
}
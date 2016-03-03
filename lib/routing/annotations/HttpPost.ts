/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="../../../typings/main.d.ts" />
"use strict";

require("reflect-metadata");

export function HttpPost() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'POST', descriptor.value);
        return descriptor;
    };
}
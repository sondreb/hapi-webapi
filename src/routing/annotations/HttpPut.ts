/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
"use strict";

function HttpPut() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'PUT', descriptor.value);
        return descriptor;
    };
}
/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
"use strict";

function HttpDelete() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'DELETE', descriptor.value);
        return descriptor;
    };
}

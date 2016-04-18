"use strict";

import "reflect-metadata";

export function HttpPost() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'POST', descriptor.value);
        return descriptor;
    };
}
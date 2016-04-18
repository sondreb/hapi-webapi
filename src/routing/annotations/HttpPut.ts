"use strict";

import "reflect-metadata";

export function HttpPut() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'PUT', descriptor.value);
        return descriptor;
    };
}
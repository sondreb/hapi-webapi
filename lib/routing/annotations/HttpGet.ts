"use strict";

require("reflect-metadata");

export function HttpGet() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        console.log('HTTP GET DECORATOR!');
        console.log(descriptor);

        //target.actions.add();

        Reflect.defineMetadata("Method", 'GET', descriptor.value);
        return descriptor;
    };
}
/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
"use strict";

function HttpGet() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        console.log('HTTP GET DECORATOR!');
        console.log(descriptor);

        //target.actions.add();

        Reflect.defineMetadata("Method", 'GET', descriptor.value);
        return descriptor;
    };
}
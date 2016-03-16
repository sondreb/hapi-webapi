"use strict";
require("reflect-metadata");
function HttpPost() {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata("Method", 'POST', descriptor.value);
        return descriptor;
    };
}
exports.HttpPost = HttpPost;

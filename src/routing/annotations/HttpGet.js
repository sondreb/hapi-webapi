"use strict";
require("reflect-metadata");
function HttpGet() {
    return (target, propertyKey, descriptor) => {
        console.log('HTTP GET DECORATOR!');
        console.log(descriptor);
        Reflect.defineMetadata("Method", 'GET', descriptor.value);
        return descriptor;
    };
}
exports.HttpGet = HttpGet;
//# sourceMappingURL=HttpGet.js.map
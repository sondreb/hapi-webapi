"use strict";
require("reflect-metadata");
function HttpPut() {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata("Method", 'PUT', descriptor.value);
        return descriptor;
    };
}
exports.HttpPut = HttpPut;
//# sourceMappingURL=HttpPut.js.map
"use strict";
require("reflect-metadata");
function HttpDelete() {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata("Method", 'DELETE', descriptor.value);
        return descriptor;
    };
}
exports.HttpDelete = HttpDelete;
//# sourceMappingURL=HttpDelete.js.map
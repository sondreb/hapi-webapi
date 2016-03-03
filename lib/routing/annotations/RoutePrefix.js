"use strict";
require("reflect-metadata");
function RoutePrefix(prefix) {
    return function (target) {
        Reflect.defineMetadata("RoutePrefix", prefix, target);
    };
}
exports.RoutePrefix = RoutePrefix;
//# sourceMappingURL=RoutePrefix.js.map
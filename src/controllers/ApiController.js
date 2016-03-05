"use strict";
class ApiController {
    constructor() {
        this.user = null;
    }
    ok() { }
    ;
    notFound() {
        return new Error();
    }
    ;
    statusCode(code) { }
    ;
    internalServerError() { }
    ;
}
exports.ApiController = ApiController;
//# sourceMappingURL=ApiController.js.map
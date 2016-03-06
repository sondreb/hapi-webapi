"use strict";
const HttpRequestMessage_1 = require("./HttpRequestMessage");
class RequestHandler {
    constructor(type, method) {
        console.log('CONSTRUCTOR OF REQUEST HANDLER');
        console.log(type);
        console.log(method);
        this.type = type;
        this.method = method;
    }
    process(request, reply) {
        console.log('Processing Request...');
        var controller = new this.type();
        controller.request = new HttpRequestMessage_1.HttpRequestMessage(request);
        var parameters = [];
        for (var k in request.params) {
            console.log('Parameter: ' + k + ':' + request.params[k]);
            parameters.push(request.params[k]);
        }
        var response = controller[this.method](parameters);
        reply(response);
    }
    ;
}
exports.RequestHandler = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map
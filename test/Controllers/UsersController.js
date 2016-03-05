"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WebApi = require("../../lib/Index");
let UsersController = class extends WebApi.ApiController {
    getUserById(id) {
        return "getUserById:" + id;
    }
    searchUsers(id) {
        return this.notFound();
    }
    list() {
        console.log(this.request.requestUri);
        console.log('HTTP Version: ' + this.request.version);
        console.log(this.request.headers);
        return "Hello World!";
    }
};
__decorate([
    WebApi.Route("{id}"),
    WebApi.HttpGet(), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    WebApi.Route("search"),
    WebApi.HttpPost(), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], UsersController.prototype, "searchUsers", null);
__decorate([
    WebApi.Route("list"),
    WebApi.HttpGet(), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UsersController.prototype, "list", null);
UsersController = __decorate([
    WebApi.RoutePrefix("users"), 
    __metadata('design:paramtypes', [])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=UsersController.js.map
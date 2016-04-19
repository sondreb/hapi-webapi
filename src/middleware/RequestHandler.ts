/// <reference path="../../typings/main.d.ts" />

"use strict";

import {HttpRequestMessage} from "./HttpRequestMessage"
import {Promise} from "es6-promise";

export class RequestHandler {
    type: any;
    method: string;

    constructor(type: any, method: string) {

        console.log('CONSTRUCTOR OF REQUEST HANDLER');
        console.log(type);
        console.log(method);

        this.type = type;
        this.method = method;
    }

    process(request, reply) {
        console.log('Processing Request...');
        var controller = new this.type();
        
        //console.log('Controller Instance:');
        //console.log(controller);
        
        // Encapsulate the request in WebAPI-similar request message.
        controller.request = new HttpRequestMessage(request);

        var parameters = [];
        
        // TODO: Register the parameter NAMES for controller methods so we can send correct params.
        for (var k in request.params) {
            console.log('Parameter: ' + k + ':' + request.params[k]);
            parameters.push(request.params[k]);
            /*if (request.params.hasOwnProperty(k)) {
               user[k] = request.params[k];
            }*/
        }
        
        if(request.payload){
            parameters.push(request.payload);
        }

        var response = controller[this.method](parameters);
        if(response instanceof Promise ){
            response.then(reply).catch(function(error){
                reply({error:error});
            });
        }
        reply(response);
    };
}

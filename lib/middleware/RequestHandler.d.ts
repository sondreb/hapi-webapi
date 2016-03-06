export declare class RequestHandler {
    type: any;
    method: string;
    constructor(type: any, method: string);
    process(request: any, reply: any): void;
}

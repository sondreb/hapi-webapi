import {HttpGet, HttpPost, HttpDelete, HttpPut, RoutePrefix, Route, ApiController} from '../../hapi-webapi';

@RoutePrefix("users")
export class UsersController extends ApiController {
    @Route("{id}")
    @HttpGet()  // Also supports @HttpPut, @HttpPost, @HttpDelete
    getUserById(id: string) {

        return "getUserById:" + id;
    }

    @Route("list")
    @HttpGet()
    list() {
        // Examples of request object values available:
        // Url object.
        console.log(this.request.requestUri);

        // HTTP version.
        console.log('HTTP Version: ' + this.request.version);

        // HTTP headers.
        console.log(this.request.headers);

        return "Hello World!";
    }
}
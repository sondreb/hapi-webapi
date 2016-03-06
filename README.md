# hapi-webapi ![build status](https://projects.visualstudio.com/DefaultCollection/_apis/public/build/definitions/312b44a5-2760-43de-8938-d8319566aa52/43/badge)
Implements an abstraction for [Hapi](https://github.com/hapijs/hapi) using TypeScript, that provides a 
similar pattern to the ASP.NET WebApi framework for implementing 
Apis on [Hapi](http://hapijs.com/).

# Quickstart

To get started quickly, you can clone the 'hapi-microservice' repository (coming soon), 
which includes all files needed to get started with TypeScript and the hapi-webapi.

# Getting started

Start by creating a package.json:

```sh
npm init
```

Install hapi-webapi and save it to your package.json dependencies:

```sh
npm install hapi-webapi --save
```

Create a server.ts file with the following contents:

```js
import {StartOptions, WebApp} from 'hapi-webapi';
import {Startup} from './startup';

var options = new StartOptions();
options.port = 4500;

WebApp.Start<Startup>(Startup, options);
```

Create a startup.ts file with the following contents:

```js
import {HttpConfiguration, IAppBuilder, IStartup} from 'hapi-webapi';
import {UsersController} from './controller';

const pgk = require('./package.json');

class Startup implements IStartup {
    Configuration(app: IAppBuilder) {
        
        var config = new HttpConfiguration();
        
        config.enableSwagger({ title: 'Directory API', description: pgk.description, version: pgk.version });
        config.enableSwaggerUi({ title: 'API Documentation v' + pgk.version, path: '/docs'  });

        // This is different from ASP.NET WebAPI, controllers needs to manually be registered.
        app.controllers.add(UsersController);
        
        app.useWelcomePage();
        app.useStaticFiles('static');
        
        app.useWebApi(config);
    }
}
```

Create a controller.ts file with the following contents:

```js
import {HttpGet, HttpPost, HttpDelete, HttpPut, RoutePrefix, Route, ApiController} from '../hapi-webapi';

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

```


Launch the application by running:

```sh
npm start
```

And open [localhost:4500](http://localhost:4500) or [localhost:4500/docs](http://localhost:4500/docs) for Swagger UI in your browser.

## Contributors

[<img alt="sondreb" src="https://avatars.githubusercontent.com/u/309938?v=3&s=117" width="117">](https://github.com/sondreb) |[<img alt="kommundsen" src="https://avatars.githubusercontent.com/u/423868?v=3&s=117" width="117">](https://github.com/kommundsen) |
:---: |:---: |
[sondreb](https://github.com/sondreb) |[kommundsen](https://github.com/kommundsen) |

## Change Log
    
View the [Change Log](CHANGELOG.md) to keep up-to-date on API and project changes.

## License
    
MIT © [Sondre Bjellås](http://sondreb.com)
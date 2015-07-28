## recipebox-server2
The web server for the RecipeBox project. Built with TypeScript, Node.js, Express.js, Angular.js, and MongoDB. This is a work in progress.  

There may be a demo up at https://pc-recipebox.herokuapp.com, but there are no guarantees.

### Local Setup
- Grab the repo and run `npm install`. 
- Start a local mongodb instance with `mongod`. Install mongodb if you don't have it.
- RecipeBox is built with TypeScript, type-safe JavaScript. Install type definitions for RecipeBox's modules with `tsd install`.
- RecipeBox's front-end JavaScript is maintained with Bower. Install the Bower components with `bower install`.
- RecipeBox uses gulp for building and updating. Run the gulp build script with `gulp build`.
- Start an instance of the server with `npm start` and connect to `localhost:3000` on a webpage.

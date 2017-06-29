<img src="https://reactql.org/reactql/logo.svg" alt="ReactQL" width="278" height="77" />

# Starter kit code (Javascript version)

React+GraphQL front-end starter kit. Universal: Browser + SSR.

[Typescript version](https://github.com/reactql/kit.ts) also available.

Want to install quickly? Use the [CLI](https://github.com/reactql/cli) - it does the heavy lifting for you.

## Features

### Stack

- [ReactQL CLI](https://github.com/reactql/cli) for quickly starting a new project
- [React](https://facebook.github.io/react/) for UI
- [Apollo Client (React)](http://dev.apollodata.com/react/) for GraphQL
- [React Router 4](https://github.com/ReactTraining/react-router/tree/v4) for declarative browser + server routes
- [Redux](http://redux.js.org/) for flux/store state management

### Server-side rendering

- Built-in [Koa 2](http://koajs.com/) web server, with async/await routing
- Full route-aware [server-side rendering (SSR)](https://reactql.org/docs/ssr) of initial HTML
- Universal building - both browser + Node.js web server
- HTTP header hardening with [Helmet for Koa](https://github.com/venables/koa-helmet)
- Declarative/dynamic `<head>` section, using [react-helmet](https://github.com/nfl/react-helmet)

### Real-time

- Dev + [React-compatible hot code reloading](http://gaearon.github.io/react-hot-loader/); zero refresh, real-time updates
- [Development web server](https://reactql.org/docs/setup#development) that automatically rebuilds and restarts on code changes, for on-the-fly SSR testing with full source maps


### Code optimisation

- [Webpack 2](https://webpack.js.org/), with [tree shaking](https://webpack.js.org/guides/tree-shaking/)
- Universal building - both browser + Node.js web server
- Easily extendable [webpack-config](https://fitbit.github.io/webpack-config/) files
- [Production bundling](https://reactql.org/docs/setup#production), for generating optimised server and client code
- [Static bundling mode](https://reactql.org/docs/setup#browser) for hosting your full app on any static host -- Github pages, S3, Netlify, etc 
- Separate local + vendor bundles, for better browser caching/faster builds
- Dynamic polyfills, courtesy of [babel-preset-env](https://github.com/babel/babel-preset-env)
- Aggressive code minification with [Uglify](https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)
- [GIF/JPEG/PNG/SVG crunching](https://github.com/tcoopman/image-webpack-loader) for images
- [Static compression](https://webpack.js.org/plugins/compression-webpack-plugin/) using the [Zopfli Gzip](https://en.wikipedia.org/wiki/Zopfli) and [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html) algorithms for the serving of static assets as pre-compressed `.gz` and `.br` files

### Styles

- [PostCSS v6](http://postcss.org/) with [next-gen CSS](http://cssnext.io/) and inline [@imports](https://github.com/postcss/postcss-import)
- [SASS](http://sass-lang.com) and [LESS](http://lesscss.org/) support (also parsed through PostCSS)

### Developer support

- [ESLint](http://eslint.org/)ing based on a tweaked [Airbnb style guide](https://github.com/airbnb/javascript)
- Tons of code commentary to fill you in on what's happening under the hood
- Extensive, up-to-date [online documentation](https://reactql.org/docs/)
- [Examples repository](https://github.com/reactql/examples), showing you how to add a GraphQL server, run without GraphQL, take advantage of Redux, etc.

## Flow - static type checker ([flow.org](https://flow.org))
Flow is Facebook's project to prevent runtime errors right while developing.  
Flow replaces React PropTypes with own types. This allows to catch errors while compiling rather then in browser.  
There are some useful [docs](https://flow.org/en/docs/) that you should be aware of.  
**Using flow**  
Flow lib lies in `flow-typed` directory by default. Use [flow-typed](https://github.com/flowtype/flow-typed) to easily add and update modules added by community or add your own.  
All global variables should be declared in `flow-typed/globals.js`.  
For configuration settings goto `.flowconfig` in project root.  
There are no `.flowconfig.js` analog so all user-defined paths in `config/paths.js` should be added by hand.  
Flow doesn't understand file extensions like `.jpg` and `.gql` so it is needed to setup them - see example in `.flowconfig`.  
If any errors occured which you can't handle you can use magic comments and types to skip them and resolve later:
- Comments `// $FlowFixMe` and `// $FlowIssue` - flow will ignore next line ( to redefine see `.flowconfig` )
- Types `$FlowFixMe` and `$FlowTODO` - flow will ignore these types ( to redefine see `.flowconfig` )

[Flow doesn't understand decorators](https://flow.org/en/docs/config/options/#toc-esproposal-decorators-ignore-warn) yet due to early stage so better not to use them.  
Commands `npm start` will start flow service automatically in background watch mode ( only in `development` env ).

## Usage

See the **[CLI tool](https://github.com/reactql/cli)** for easily deploying this starter kit on Mac, Windows or Linux.

### Complete documentation @ **https://reactql.org**

# New to GraphQL?

Watch my free [45 minute YouTube video](https://www.youtube.com/watch?v=DNPVqK_woRQ), for a live coding walk-through of putting together a GraphQL server with a database. Learn how to write queries, mutations and handle nested/related data.

If you want to build your own GraphQL server, check out the [GraphQL Server repo](https://github.com/reactql/examples/tree/master/graphql-server) in [examples](https://github.com/reactql/examples).

# <%= name %> [![Build Status](https://secure.travis-ci.org/<%= github_user_name %>/<%= name %>.png?branch=master)](http://travis-ci.org/<%= github_user_name %>/<%= name %>)

<%= description %>

## Getting Started
Install the module with: `npm install <%= name %>`

```javascript
var <%= name %> = require('<%= name %>');
<%= name %>.awesome(); // "awesome"
```

### Webpack & Babel

Extra babel plugins for ES2017?

```
    "babel-plugin-add-module-exports": "^0.2.1",
    "babel-plugin-class-properties": "^6.16.1",
    "babel-plugin-decorators-legacy": "^6.13.0",
    "babel-plugin-syntax-async-functions": "^6.13.0",
    "babel-plugin-transform-regenerator": "^6.16.1",
    "babel-plugin-transform-runtime": "^6.16.1",
```

## Documentation

- [babel-preset-es2017](https://www.npmjs.com/package/babel-preset-es2017)
- [useful-babel-presets](http://www.2ality.com/2016/09/three-useful-babel-presets.html)
- [testing-with-mocha-and-webpack](http://randycoulman.com/blog/2016/03/22/testing-with-mocha-and-webpack/)
- [mocha-webpack](https://www.npmjs.com/package/mocha-webpack)
- [nyc](https://github.com/istanbuljs/nyc)

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp.js](http://gulpjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) <%= year %> <%= author_name %>
Licensed under the <%= license %> license.

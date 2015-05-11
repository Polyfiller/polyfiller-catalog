# polyfiller-catalog

[![npm version](https://badge.fury.io/js/polyfiller-catalog.svg)](http://badge.fury.io/js/polyfiller-catalog)
[![Build Status](https://travis-ci.org/Polyfiller/polyfiller-catalog.png)](https://travis-ci.org/Polyfiller/polyfiller-catalog)
[![Dependency Status](https://david-dm.org/Polyfiller/polyfiller-catalog.svg)](https://david-dm.org/Polyfiller/polyfiller-catalog)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> A database for polyfill combinators


*For more details see the [Polyfiller](https://github.com/Polyfiller/polyfiller) documentation*

## Getting Started

This package requires Node `~0.10.0`

If you haven't used [npm](https://www.npmjs.com/) before, be sure to check out the [Getting Started](https://nodejs.org/community/) guide, as it explains how to install [npm](https://docs.npmjs.com/getting-started/installing-node) and use a [package.json](https://docs.npmjs.com/files/package.json) file. 
Once you're familiar with that process, you may install this package with this command:

```shell
npm install polyfiller-catalog --save-dev
```

Once the package has been installed, it may be used inside your files with this line of JavaScript:

```js
var catalog = require('polyfiller-catalog');
```


### Usage Example

```js
catalog.SOURCES; // ['./files/']
catalog.MODULES; // ['./node_modules', './bower_components']
```


### Tests

```
grunt test
```

### File structure

Required file structure for each new package:

```
catalog
	Promise
		index.json
		index.js
```

**index.json**

```json
{
	"name": "Promise"
}
```

There are dependencies?

```
"dependencies": ["window.setImmediate"]
```

**index.js**

```js
module.exports = [
	{
		type: 'npm',
		name: 'es6-promises'
	}
];
```

*type*:

Type: `string [npm | bower | file]` <br />
Default: `None`

*name*:

Type: `string` <br />
Default: `None`


**package.json**

Use `dependencies` and `bundleDependencies` for new features located in `npm` 

```json
{
	"dependencies": {
		"es6-promises": "^1.0.10"
	},

	"bundleDependencies": [
		"es6-promises"
	]
}
```

**bower.json**

Use `dependencies` for new features located in `bower` 

```json
{
	"dependencies": {
		"es6-promises": "1.0.10"
	}
}
```

The files are located locally?

```
catalog
	Promise
		files
			index.js — your polyfill

		index.json
		index.js
```

```js
// index.js

var path = require('path');

module.exports = [
	{
		type: 'file',
		name: path.join(__dirname, './files/index.js')
	}
];
```


### Contributing

1. Fork the one
2. Create a topic branch
3. Read about file structure above
4. Make your commits
5. Write the tests (for new functionality) 
6. Run `grunt test`
7. Submit Pull Request once Tests are Passing


### License

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)


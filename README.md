# grunt-stubbify

  [![NPM Version][npm-image]][npm-url]
  [![Build Status][travis-image]][travis-url]

> Grunt version of [stubbify](https://github.com/isibner/stubbify)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out its [Getting Started](http://gruntjs.com/getting-started) guide. It explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) and how to install, [configure](http://gruntjs.com/configuring-tasks), and use Grunt plugins.

## Installation

```shell
npm install grunt-stubbify --save-dev
```

Once the plugin has been installed, enable it in your Gruntfile with:
```js
grunt.loadNpmTasks('grunt-stubbify');
```

## The "stubbify" task

### Overview
In your project's Gruntfile, add a section named `stubbify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  stubbify: {
    options: {
      beginStub: /^.*\/\/[\s]*STUB/i,
      endStub: /^.*\/\/[\s]*ENDSTUB/i,
      verbose: true
    },
    src: ['src/test.js'],
    dest: 'stubs/'
  }
});
```

### Options

#### options.beginStub
Type: `RegExp`
Default value: `/^.*\/\/[\s]*STUB/i`

Regular expression for the beginning of stubbed-out portions. The default matches '// STUB'.

#### options.endStub
Type: `RegExp`
Default value: `/^.*\/\/[\s]*ENDSTUB/i`

Regular expression for the end of the stubbed-out portion. The default  matches '// ENDSTUB'.

#### options.verbose
Type: `boolean`
Default value: `true`

Indicates whether a success log should be printed for each stubbified file.

### Usage Examples

#### Default Options
```js
grunt.initConfig({
  stubbify: {
    src: ['src/test.js'],
    dest: 'stubs/'
  }
});
```

Here, we use the default options to stub JavaScript files. If `src/test.js` contains:
```js
var add = function (a, b) {
  // add the two input integers together
  // STUB
  return a + b;
  // ENDSTUB
}

```
then the generated `stubs/src/test.js` will contain:
```js
var add = function (a, b) {
  // add the two input integers together
}

```

#### Custom Options
```js
grunt.initConfig({
  stubbify: {
    options: {
      beginStub: /<\!--[\s]*STUB[\s]*-->/i,
      endStub: /<\!--[\s]*ENDSTUB[\s]*-->/i
    },
    src: ['src/test.html'],
    dest: 'stubs/'
  }
});
```
In this example, we use the `beginStub` and `endStub` options to stub out an HTML file. If `src/test.html` contains:
```html
<div>
  <!-- STUB -->
  <p>hello world</p>
  <!-- ENDSTUB -->
</div>

```
then the generated `stubs/src/test.html` will contain:
```html
<div>
</div>

```

#### Grunt Options
```js
grunt.initConfig({
  stubbify: {
    html: {
      options: {
        beginStub: /<\!--[\s]*STUB[\s]*-->/i,
        endStub: /<\!--[\s]*ENDSTUB[\s]*-->/i
      },
      files: {
        'stubs/': ['src/test.html']
      }
    },
    js: {
      files: {
        'stubs/': ['src/test.js']
      }
    }
  }
});
```
In this example, we specify multiple targets `js` and `html` for the `stubbify` task, and we use the `files` object in lieu of the `src` and `dest` keys used above.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `grunt`.

## Release History
### 0.1.0 - Initial Release

[npm-image]: https://img.shields.io/npm/v/grunt-stubbify.svg?style=flat
[npm-url]: https://www.npmjs.com/package/grunt-stubbify
[travis-image]: https://img.shields.io/travis/isibner/grunt-stubbify.svg?style=flat
[travis-url]: https://travis-ci.org/isibner/grunt-stubbify

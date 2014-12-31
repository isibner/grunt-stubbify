# grunt-stubbify
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> Grunt version of [stubbify](https://github.com/isibner/stubbify)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stubbify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stubbify');
```

## The "stubbify" task

### Overview
In your project's Gruntfile, add a section named `stubbify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  stubbify: {
    your_target: {
      options: {
        beginStub: /^.*\/\/[\s]*STUB/i,
        endStub: /^.*\/\/[\s]*ENDSTUB/i, 
        verbose: true
      },
    },
  },
});
```

### Options

#### options.beginStub
Type: `RegEx`
Default value: `/^.*\/\/[\s]*STUB/i`

Regular expression for the beginning of stubbed-out portions. The default matches '// STUB'.

#### options.punctuation
Type: `RegEx`
Default value: `/^.*\/\/[\s]*ENDSTUB/i`

Regular expression for the end of the stubbed-out portion. The default  matches '// ENDSTUB'.

#### options.verbose
Type: `boolean`
Default value: `true`

Indicates whether each stubbed file should print a success message.

### Usage Examples

#### Default Options
```js
grunt.initConfig({
  stubbify: {
    options: {},
    files: {
      'stubs/': ['src/test.js'],
    },
  },
});
```

In this example, the default options are used to stub JavaScript files. If the `src/test.js` file has the content 
```js
var add = function (a, b) {
  // add the two input integers together
  // STUB
  return a +b;
  // ENDSTUB
}
// STUB
This should not show up in the END
// ENDSTUB

```
then the generated `stubs/src/test.js` would be
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
    files: {
      'stubs/': ['src/test.html'],
    },
  },
});
```
In this example, the `beginStub` and `endStub` options are used to stub out an HTML file. If `src/test.html` has the content
```html
<div>
  <!-- STUB -->
  <div>
    hello world
  </div>
  <!--ENDSTUB-->
</div>

```
then the generated `stubs/src/test.html` would be
```html
<div>
</div>

```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### 0.1.0 - Initial Release

[npm-image]: https://img.shields.io/npm/v/grunt-stubbify.svg?style=flat
[npm-url]: https://www.npmjs.com/package/grunt-stubbify
[travis-image]: https://img.shields.io/travis/isibner/grunt-stubbify.svg?style=flat
[travis-url]: https://travis-ci.org/isibner/grunt-stubbify

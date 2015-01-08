/*
 * grunt-stubbify
 * https://github.com/isibner/grunt-stubbify
 *
 * Copyright (c) 2014 Ian Sibner
 * Licensed under the MIT license.
 */

var hl = require('highland');
var path = require('path');
var stubbifier = require('stubbify');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('stubbify', 'Grunt version of stubbify (https://github.com/isibner/stubbify)', function () {
    var options = this.options({
      verbose: true
    });

    var done = this.async();

    this.files.forEach(function (f) {
      var stubbify = stubbifier(f.dest, options.beginStub, options.endStub);
      hl(f.src)
        .doto(function (filepath) {
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
          }
        })
        .filter(grunt.file.isFile)
        .filter(grunt.file.exists)
        .flatMap(hl.wrapCallback(stubbify))
        .toArray(function (arr) {
          if (options.verbose) {
            arr.forEach(function (filepath) {
              grunt.log.writeln(filepath + ' -> ' + path.join(f.dest, filepath));
            })
          }
          grunt.log.ok('Stubbified ' + arr.length + ' files.');
          done();
        });
    });
  });

};

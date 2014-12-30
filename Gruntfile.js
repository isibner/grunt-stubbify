/*
 * grunt-stubbify
 * https://github.com/isibner/grunt-stubbify
 *
 * Copyright (c) 2014 Ian Sibner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    clean: {
      tests: ['tmp']
    },

    eslint: {
      options: {
        config: '.eslintrc',
        rulesdir: ['.eslint_rules']
      },
      target: ['Gruntfile.js', 'tasks/stubbify.js', 'test/*.js']
    },

    mochaTest: {
      test: {
        src: ['test/*.js']
      }
    },

    // Configuration to be run (and then tested).
    stubbify: {
      default_options: {
        dest: 'tmp',
        src: ['test/fixtures/example.js']
      },
      custom_options: {
        options: {
          verbose: false,
          beginStub: /<\!--[\s]*STUB[\s]*-->/i,
          endStub: /<\!--[\s]*ENDSTUB[\s]*-->/i
        },
        dest: 'tmp',
        src: ['test/fixtures/example.html']
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['clean', 'stubbify', 'mochaTest']);

  grunt.registerTask('default', ['eslint', 'test']);
};

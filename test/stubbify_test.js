/*eslint-env mocha */

var assert = require('chai').assert;
var grunt = require('grunt');


describe('grunt-stubbify', function () {
  it('should stubbify with default options', function () {
    var actual = grunt.file.read('tmp/test/fixtures/example.js');
    var expected = grunt.file.read('test/expected/example.js');
    assert.deepEqual(actual, expected);
  });

  it('should stubbify with RegEx options', function () {
    var actual = grunt.file.read('tmp/test/fixtures/example.html');
    var expected = grunt.file.read('test/expected/example.html');
    assert.deepEqual(actual, expected);
  });
});

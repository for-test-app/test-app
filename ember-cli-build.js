/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

app.import('vendor/bootstrap.min.css');
app.import('vendor/bootstrap.min.js');

  return app.toTree();
};

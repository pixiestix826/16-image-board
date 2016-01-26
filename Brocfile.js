var Merge = require('broccoli-merge-trees');
var Sass = require('broccoli-sass');
var Funnel = require('broccoli-funnel');
var Babel = require('broccoli-babel-transpiler');
var Concat = require('broccoli-concat');

var stylePaths = [
  'sass',
  'bower_components/normalize-css',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets',
  'bower_components/font-awesome/scss',
];

var styles = new Sass(stylePaths, 'app.scss', 'app.css');

var jquery = new Funnel('bower_components/jquery/dist', {
  files: ['jquery.js'],
});

var scripts = Babel('src', {
  browserPolyfill: true,
  stage: 0,
  moduleIds: true,
  modules: 'amd',
});

scripts = Concat(scripts, {
  inputFiles: [
    '**/*.js',
  ],
  outputFile: '/app.js',
});

module.exports = new Merge(['public', styles, 'bower_components/font-awesome/fonts', scripts, jquery], {overwrite: true});

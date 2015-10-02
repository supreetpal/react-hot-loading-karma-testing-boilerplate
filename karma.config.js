var webpack = require('karma-webpack');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*_spec.js'
    ],
    plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-safari-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['Safari'],
    preprocessors: {
      'tests/**/*_spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [{
        type: 'html',
        subdir: 'report-html'
      }, {
        type: 'lcov',
        subdir: 'report-lcov'
      }, {
        type: 'cobertura',
        subdir: '.',
        file: 'cobertura.txt'
      }]
    },
    webpack: {
      module: {
        loaders: [{
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        }],
        postLoaders: [{
          test: /\.(js)$/,
          exclude: /(node_modules|tests)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};

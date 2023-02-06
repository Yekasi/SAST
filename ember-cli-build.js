/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-babel': {
      'compact': false,
      'includePolyfill': true
    },

    'sassVariables': 'app/styles/_constants.scss',

    'minifyCSS': {
      'enabled': true,
    },

    'ember-cli-tooltipster': {
      'importTooltipsterBorderless': true
    },

    'newVersion': {
      'enabled': true,
      'useAppVersion': true,
      'fileName': 'version.txt'
    }

    // When this feature is set to true we can see folder and file structure on the AWS server.
    // 'sourcemaps': {
    //   'enabled': true
    // }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // 3rd party bower components
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/moment-timezone/builds/moment-timezone-with-data.min.js');

  // We need to include the required localisations for the ember-cli-bootstrap-datetimepicker here.
  app.import('bower_components/moment/locale/nl.js');

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/signalr/jquery.signalR.js');

  // 3rd party vendor packages
  app.import('vendor/signalr/signalrclient.js');
  app.import('vendor/nestable/jquery.nestable.js');
  app.import('vendor/scrollable/jquery.scrollbar.js');
  app.import('vendor/jquerypunch/jquerypunch.js');
  app.import('vendor/handlebars/handlebars-v4.0.12.js');
  app.import('vendor/less/less.min.js');
  app.import('vendor/draggable/draggable.js');

  // Code Mirror requires these
  app.import('vendor/codemirror/codemirror.js');
  app.import('vendor/codemirror/javascript.js');
  app.import('vendor/codemirror/css.js');
  app.import('vendor/codemirror/activeline.js');
  app.import('vendor/codemirror/matchbrackets.js');
  app.import('vendor/codemirror/overlay.js');
  app.import('vendor/codemirror/htmlmixed.js');
  app.import('vendor/codemirror/xml.js');
  app.import('vendor/codemirror/show-hint.js');
  app.import('vendor/split/split.js');
  app.import('vendor/intercom/intercom.js');
  app.import('vendor/filterizr/jquery.filterizr.min.js');
  app.import('vendor/daterangepicker/daterangepicker.js');
  app.import('vendor/signature/signature_pad.js');

  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
      destDir: 'assets'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
      destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
      destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
      destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
      destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
      destDir: 'fonts'
  });

  return app.toTree();
};

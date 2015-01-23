
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          keepalive: true,
          livereload: true,
          port: 9000,
          hostname: '*',
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        files: [{
          expand: true,
          src: [
          	'jquery.addPrefixedClass.js'
          ]
        }]
      },
      changed: {
        src: ''
      }
    },

    watch: {
      js: {
        files: [
		  'src/**/*.js',
		  'spec/**/*.js',
		  'demo/**/*.js',
          // Exclude the following
          '!foo/**/*',
        ],
        tasks: ['jshint:changed'],
        options: {
          spawn: false
        }
      },
    }

  });

  // define the js task
  grunt.registerTask('dev', ['watch:js']);

  // For the quick version of jshinting
  grunt.event.on('watch', function(action, filepath) {
    grunt.config('jshint.changed.src', filepath);
  });

};

/*
 * grunt-tishadow
 * https://github.com/astronaughts/grunt-tishadow/
 *
 * Copyright (c) 2013 Author, contributors
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict';
  
  grunt.initConfig({
    tishadow: {
      classic: {
        command: 'run',
        options: {
          projectDir: './examples/classic_project/',
          jshint: true
        }
      },
      alloy: {
        command: 'run',
        options: {
          projectDir: './examples/alloy_project/',
          platform  : 'android'
        }
      },
      options: {
        // locale: 'en',
        // host: 'localhost',
        // port: 1234,
        // room: 'myroom',
        // jshint: false,
        // tail: true,
        // longPolling: true,
      }
    },
    jshint: {
      all: [
        'tasks/**/*.js'
      ]
    },
    watch: {
      scripts: {
        files: ['tasks/**/*.js'],
        tasks: ['jshint'],
        options: {
           nospawn: true
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('classic', ['tishadow:classic']);
  grunt.registerTask('alloy', ['tishadow:alloy']);
};

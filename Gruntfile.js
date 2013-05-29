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
};
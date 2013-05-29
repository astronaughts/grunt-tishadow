module.exports = function(grunt) {
    'use strict';

    var tishadow = require('./lib/tishadow').init(grunt);

    grunt.registerMultiTask('tishadow', 'Run commands of TiShadow.', function() {
        var command, worker, done;

        done = this.async();
        command = tishadow.commands(this);
        worker = grunt.util.spawn(command, function(error, result, code) {
            if (error) {
                grunt.log.error('code: ' + code + ' error:' + error);
            }
            done();
        });

        worker.stdout.setEncoding('utf8');
        worker.stdout.on('data', function(data) {
            grunt.log.write(data);
        });

        worker.stderr.setEncoding('utf8');
        worker.stderr.on('data', function(data) {
            grunt.log.error(data);
        });
    });
};
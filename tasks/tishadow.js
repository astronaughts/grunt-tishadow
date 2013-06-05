module.exports = function(grunt) {
    'use strict';

    var async       = require('async'),
        tishadow    = require('./lib/tishadow').init(grunt),
        alloy       = require('./lib/alloy').init(grunt);

    grunt.registerMultiTask('tishadow', 'Run commands of TiShadow.', function() {
        var task    = this,
            options = task.options(),
            done    = task.async(),
            alloy_command, tishadow_command, alloy_worker, preclear_worker, tishadow_worker;

        async.series([
            // alloy command
            function(next) {
                if (true !== options.withAlloy) {
                    return next();
                }

                alloy_command = alloy.commands(task);
                alloy_worker = grunt.util.spawn(alloy_command, function(error, result, code) {
                    if (error) {
                        grunt.log.error(error);
                        return done();
                    }
                    next();
                });

                alloy_worker.stdout.setEncoding('utf8');
                alloy_worker.stdout.on('data', function(data) {
                    grunt.log.write(data);
                });
            },
            // preclear command
            function(next) {
                if (true !== options.preclear) {
                    return next();
                }

                preclear_worker = grunt.util.spawn({ cmd: 'tishadow', args: ['clear'] }, function(error, result, code) {
                    if (error) {
                        grunt.log.error(error);
                        return done();
                    }
                    next();
                });

                preclear_worker.stdout.setEncoding('utf8');
                preclear_worker.stdout.on('data', function(data) {
                    grunt.log.write(data);
                });
            }
        ],
        function(err, results) {
            tishadow_command = tishadow.commands(task);
            if (! tishadow_command) {
                grunt.log.error('tishadow command is invalid.');
                return done();
            }

            tishadow_worker = grunt.util.spawn(tishadow_command, function(error, result, code) {
                if (error) {
                    grunt.log.error(error);
                }
                done();
            });

            tishadow_worker.stdout.setEncoding('utf8');
            tishadow_worker.stdout.on('data', function(data) {
                grunt.log.write(data);
            });
        });
    });
};
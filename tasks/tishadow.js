module.exports = function(grunt) {
	'use strict';
	
	grunt.registerMultiTask('tishadow', 'Run commands of TiShadow.', function() {
		
		var tishadow	= require('./lib/tishadow').init(grunt),
			command		= tishadow.commands(this),
			done		= this.async();
		
		var worker = grunt.util.spawn(command, function(error, result, code) {
			if (error) {
				grunt.log.error('code: ' + code + ' error:' + error);
				done();
			}
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
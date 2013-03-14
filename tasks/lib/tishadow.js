exports.init = function(grunt) {
	'use strict';
	
	var tishadow = exports = {};
	
	tishadow.commands = function(task) {
		
		var command	= task.target,
			data	= task.data,
			options	= task.options,
			args = [];
		
		// tishadow commands
		switch (command){
			case 'server': // tishadow server
				args.push('server');
				break;
			case 'run': // tishadow run
				args.push('run');
				break;
			case 'spec': // tishadow spec
				args.push('spec');
				break;
			case 'repl': // tishadow repl
				args.push('repl');
				break;
			case 'appify': // tishadow appify
				args.push('appify');
				break;
			case 'clear': // tishadow clear
				args.push('clear');
				break;
			case 'log': // tishadow log
				args.push('log');
				break;
		}
		
		//
		// Task-level options
		//
		
		// -l, --locale <locale> Set the locale in in the TiShadow app
		if (undefined !== options.locale && command !== 'server') {
			args.push('-l', options.locale);
		}
		// -p, --port <port> server port
		if (undefined !== options.port) {
			args.push('-p', options.port);
		}
		// -o, --host <host> server host name / ip address
		if (undefined !== options.host) {
			args.push('-o', options.host);
		}
		// -r, --room <room> server room
		if (undefined !== options.room) {
			args.push('-r', options.room);
		}
		
		// -d, --destination <path> target path for generated project
		if (undefined !== data.dest) {
			args.push('-d', data.dest);
		}
		// -u, --update Only send recently changed files
		if (true === data.update) {
			args.push('-u');
		}
		// -j, --jshint analyse code with JSHint
		if (true === data.jshint) {
			args.push('-j');
		}
		// -x, --junit-xml output report as JUnit XML
		if (true === data.junit_xml) {
			args.push('-x');
		}
		// -l, --long-polling force long polling
		if (true === data.long_polling) {
			args.push('-l');
		}
		// -t, --tail-logs tail server logs on deploy
		if (true === data.tail_logs) {
			args.push('-t');
		}
		
		return { cmd: 'tishadow', args: args };
	};
	
	return tishadow;
};
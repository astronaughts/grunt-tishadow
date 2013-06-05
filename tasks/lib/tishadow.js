exports.init = function(grunt) {
    'use strict';

    var tishadow    = exports,
        util        = grunt.util;

    tishadow.commands = function(task) {

        var commands    = ['server', 'run', 'spec', 'repl', 'appify', 'clear', 'log', 'bundle'],
            options     = task.options(),
            args        = [],
            target      = null;

        commands.forEach(function(command) {
            if (task.data.command === command) {
                target = task.data.command;
            }
        });

        // tishadow commands
        switch (task.data.command){
            case 'server':
                // tishadow server
                args.push('server');
                // -p, --port <port> server port
                if (undefined !== options.port) {
                    args.push('-p', options.port);
                }
                // -l, --long-polling force long polling
                if (true === options.longPolling) {
                    args.push('-l');
                }
                break;

            case 'run':
                // tishadow run
                args.push('run');
                // -u, --update Only send recently changed files
                if (true === options.update) {
                    args.push('-u');
                }
                // -a, --patch patch updated files without causing app restart
                if (true === options.patch) {
                    args.push('-a');
                }
                // -l, --locale <locale> Set the locale in in the TiShadow app
                if (undefined !== options.locale) {
                    args.push('-l', options.locale);
                }
                // -j, --jshint analyse code with JSHint
                if (true === options.jshint && options.withAlloy !== true) {
                    args.push('-j');
                }
                // -t, --tail-logs tail server logs on deploy
                if (true === options.tail) {
                    args.push('-t');
                }
                // -o, --host <host> server host name / ip address
                if (undefined !== options.host) {
                    args.push('-o', options.host);
                }
                // -p, --port <port> server port
                if (undefined !== options.port) {
                    args.push('-p', options.port);
                }
                // -r, --room <room> server room
                if (undefined !== options.room) {
                    args.push('-r', options.room);
                }
                break;

            case 'spec':
                // tishadow spec
                args.push('spec');
                // -u, --update Only send recently changed files
                if (true === options.update) {
                    args.push('-u');
                }
                // -l, --locale <locale> Set the locale in in the TiShadow app
                if (undefined !== options.locale) {
                    args.push('-l', options.locale);
                }
                // -o, --host <host> server host name / ip address
                if (undefined !== options.host) {
                    args.push('-o', options.host);
                }
                // -p, --port <port> server port
                if (undefined !== options.port) {
                    args.push('-p', options.port);
                }
                // -r, --room <room> server room
                if (undefined !== options.room) {
                    args.push('-r', options.room);
                }
                // -j, --jshint analyse code with JSHint
                if (true === options.jshint && options.withAlloy !== true) {
                    args.push('-j');
                }
                // -x, --junit-xml output report as JUnit XML
                if (true === options.junit) {
                    args.push('-x');
                }
                break;

            case 'repl':
                // tishadow repl
                args.push('repl');
                // -o, --host <host> server host name / ip address
                if (undefined !== options.host) {
                    args.push('-o', options.host);
                }
                // -p, --port <port> server port
                if (undefined !== options.port) {
                    args.push('-p', options.port);
                }
                // -r, --room <room> server room
                if (undefined !== options.room) {
                    args.push('-r', options.room);
                }
                break;

            case 'appify':
                // tishadow appify
                args.push('appify');
                // -d, --destination <path> target path for generated project
                if (undefined !== options.dest) {
                    args.push('-d', options.dest);
                }
                // -o, --host <host> server host name / ip address
                if (undefined !== options.host) {
                    args.push('-o', options.host);
                }
                // -p, --port <port> server port
                if (undefined !== options.port) {
                    args.push('-p', options.port);
                }
                // -r, --room <room> server room
                if (undefined !== options.room) {
                    args.push('-r', options.room);
                }
                break;

            case 'clear':
                // tishadow clear
                args.push('clear');
                break;

            case 'log':
                // tishadow log
                args.push('log');
                break;

            case 'bundle':
                // tishadow bundle
                args.push('bundle');
                break;

            default:
                return;
        }

        return { cmd: 'tishadow', args: args, opts: { cwd: options.projectDir } };
    };

    return tishadow;
};
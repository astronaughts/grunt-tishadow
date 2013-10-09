exports.init = function(grunt) {
    'use strict';

    var tishadow    = exports,
        util        = grunt.util;

    tishadow.commands = function(task) {

        var options = task.options(),
            args    = [],
            target  = null;

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
                // -i, --internal-ip <internal-ip> internal ip to bind to
                if (undefined !== options.internalIP) {
                    args.push('-i', options.internalIP);
                }
                // -z, --manage-versions manage and automatically update bundles
                if (true === options.manageVersions) {
                    args.push('-z');
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
                // -c, --ticaster connect to ticaster
                if (true === options.ticaster) {
                    args.push('-c');
                }
                // -P, --platform <platform> target platform
                if (undefined !== options.platform) {
                    args.push('-P', options.platform);
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
                // -c, --ticaster connect to ticaster
                if (true === options.ticaster) {
                    args.push('-c');
                }
                // -P, --platform <platform> target platform
                if (undefined !== options.platform) {
                    args.push('-P', options.platform);
                }
                break;

            case 'screenshot':
                // tishadow screenshot
                args.push('screenshot');
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
                // --screencast <[n]ms> instead of saving the screenshots you can stream them to the browser
                if (undefined !== options.screencast) {
                    args.push('--screencast', options.screencast);
                }
                // -P, --platform <platform> target platform
                if (undefined !== options.platform) {
                    args.push('-P', options.platform);
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
                // -c, --ticaster connect to ticaster
                if (true === options.ticaster) {
                    args.push('-c');
                }
                break;

            case 'clear':
                // tishadow clear
                args.push('clear');
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
                // -c, --ticaster connect to ticaster
                if (true === options.ticaster) {
                    args.push('-c');
                }
                // -P, --platform <platform> target platform
                if (undefined !== options.platform) {
                    args.push('-P', options.platform);
                }
                break;

            case 'close':
                // tishadow close
                args.push('close');
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
                // -c, --ticaster connect to ticaster
                if (true === options.ticaster) {
                    args.push('-c');
                }
                // -P, --platform <platform> target platform
                if (undefined !== options.platform) {
                    args.push('-P', options.platform);
                }
                break;

            case 'log':
                // tishadow log
                args.push('log');
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
                // -c, --ticaster connect to ticaster
                if (true === options.ticaster) {
                    args.push('-c');
                }
                break;

            case 'bundle':
                // tishadow bundle
                args.push('bundle');
                // -j, --jshint analyse code with JSHint
                if (true === options.jshint && options.withAlloy !== true) {
                    args.push('-j');
                }
                break;

            default:
                return;
        }

        return { cmd: 'tishadow', args: args, opts: { cwd: options.projectDir } };
    };

    return tishadow;
};
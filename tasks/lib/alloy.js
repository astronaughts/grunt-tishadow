exports.init = function(grunt) {
    'use strict';

    var alloy   = exports,
        util    = grunt.util;

    alloy.commands = function(task) {

        var options = task.options(),
            args    = ['compile'];

        if (true !== options.withAlloy) {
            return;
        }

        if (undefined !== options.alloy) {
            // -b, --noBanner Disable the banner
            if (true === options.alloy.noBanner) {
                args.push('-b');
            }
            // -A, --apply Applies command changes [extract-i18n]
            if (true === options.alloy.apply) {
                args.push('-A');
            }
            // -f, --force Force the command to execute
            if (true === options.alloy.force) {
                args.push('-f');
            }
            // -l, --logLevel <logLevel> Log level (default: 3 [DEBUG])
            if (undefined !== options.alloy.logLevel) {
                args.push('-l', options.alloy.logLevel);
            }
            // -n, --no-colors Turn off colors
            if (true === options.alloy.noColors) {
                args.push('-n');
            }
            // -o, --outputPath <outputPath> Output path for generated code
            if (undefined !== options.alloy.outputPath) {
                args.push('-o', options.alloy.outputPath);
            }
            // -p, --project-dir <project-dir> Titanium project directory
            if (undefined !== options.alloy.projectDir) {
                args.push('-p', options.alloy.projectDir);
            }
            // -c platform=<[android,ios,mobileweb]> Target mobile platform [android,ios,mobileweb]
            if (undefined !== options.alloy.platform) {
                args.push('-c', 'platform=' + options.alloy.platform.join(','));
            }
            // -s, --spec <spec> test spec to use with "alloy test"
            if (undefined !== options.alloy.spec) {
                args.push('-s', options.alloy.spec);
            }
            // -w, --all require flag for generate styles
            if (true === options.alloy.column) {
                args.push('-w');
            }
            // -x, --column <column> Column for source map query
            if (undefined !== options.alloy.column) {
                args.push('-x', options.alloy.column);
            }
            // -y, --line <line> Line for source map query
            if (undefined !== options.alloy.line) {
                args.push('-y', options.alloy.line);
            }
            // -z, --source <source> Source original file for source map query
            if (undefined !== options.alloy.source) {
                args.push('-z', options.alloy.source);
            }
        }

        return { cmd: 'alloy', args: args, opts: { cwd: options.projectDir } };
    };

    return alloy;
};

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
            // -l, --logLevel <logLevel> Log level (default: 3 [DEBUG])
            if (undefined !== options.alloy.logLevel) {
                args.push('-l', options.alloy.logLevel);
            }
            // -o, --outputPath <outputPath> Output path for generated code
            if (undefined !== options.alloy.outputPath) {
                args.push('-o', options.alloy.outputPath);
            }
            // -p, --project-dir <project-dir> Titanium project directory
            if (undefined !== options.alloy.projectDir) {
                args.push('-p', options.alloy.projectDir);
            }
            // -q, --platform <platform> Target mobile platform [android,ios,mobileweb]
            if (undefined !== options.alloy.platform) {
                args.push('-c', 'platform=' + options.alloy.platform.join(','));
            }
        }

        return { cmd: 'alloy', args: args, opts: { cwd: options.projectDir } };
    };

    return alloy;
};

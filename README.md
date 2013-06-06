# grunt-tishadow

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-tishadow --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tishadow');
```

## The "tishadow" task

### Overview
In your project's Gruntfile, add a section named `tishadow` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tishadow: {
    options: {
      // Task-specific options go here.
    },
    run: {
      // Target-specific commands go here.
    },
  },
})
```

### Options

#### update
Type: `Boolean`
Default value: `null`

Only send recently changed files.

#### patch
Type: `Boolean`
Default value: `null`

patch updated files without causing app restart.

#### locale
Type: `String`
Default value: `null`

set the locale in in the TiShadow app.

#### host
Type: `String`
Default value: `127.0.0.1`

server host name / ip address.

#### port
Type: `Number`
Default value: `3000`

server port.

#### room
Type: `String`
Default value: `null`

server room.

#### room
Type: `String`
Default value: `null`

server room.

#### junit
Type: `Boolean`
Default value: `null`

output report as JUnit XML.

#### jshint
Type: `Boolean`
Default value: `null`

analyse code with JSHint.

#### tail
Type: `Boolean`
Default value: `null`

tail server logs on deploy.

#### longPolling
Type: `Boolean`
Default value: `null`

force long polling.

#### preclear
Type: `Boolean`
Default value: `null`

to be cleared before run the command..

#### withAlloy
Type: `Boolean`
Default value: `null`

run the alloy compile before tishadow command.

#### alloy
Type: `Object`

specify the options of alloy compile.

##### Example Alloy Options

silent compile.

```js
options: {
  withAlloy: true,
  alloy: {
    noBanner: true,
    logLevel: 1,
    platform: ['ios']
  }
}
```

### Usage Examples

#### Examples Options

```js
grunt.initConfig({
  tishadow: {
    test: {
      command: 'spec',
      options: {
        junit: true
      }
    },
    run: {
      command: 'run',
      options: {
        junit: true,
        patch: true,
        preclear: true
      }
    }
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  tishadow: {
    test: {
      command: 'spec',
      options: {
        junit: true
      }
    },
    run: {
      command: 'run',
      options: {
        update: true,
        patch: true,
        preclear: true
      }
    },
    // common options.
    options: {
      locale: 'en',
      host: 'localhost',
      port: 1234,
      room: 'myroom',
      jshint: false,
      tail: true,
      longPolling: true,
      withAlloy: true,
      alloy: {
        noBanner: true,
        logLevel: 1,
        platform: ['ios']
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### v1.0.0

* significant changes to the config.
* Alloy supports.

### v0.1.1

* add `bundle` command and `--patch` option.

### v0.1.0

* first commit.

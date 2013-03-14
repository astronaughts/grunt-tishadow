# grunt-tishadow

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
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
    command: {
      // Target-specific commands go here.
    },
  },
})
```

### Options

#### options.locale
Type: `String`
Default value: `null`

set the locale in in the TiShadow app.

#### options.host
Type: `String`
Default value: `127.0.0.1`

server host name / ip address.

#### options.port
Type: `Number`
Default value: `3000`

server port.

#### options.room
Type: `String`
Default value: `null`

server room.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  tishadow: {
    options: {},
    server: {},
    run: {},
    spec: {},
    appify: {},
    repl: {},
    clear: {},
  },
})
```

#### Custom Options

```js
grunt.initConfig({
  tishadow: {
    options: {
      locale: 'ja',
      host: '192.168.0.111',
      port: 1234,
      room: 'myroom',
    },
    server: {
      long_polling: true,
    },
    run: {
      update: true,
      jshint: true,
      tail_logs: true,
    },
    spec: {
      update: true,
      jshint: true,
      junit_xml: true,
    },
    appify: {
      destination: '../tmp',
    },
    repl: {},
    clear: {},
  },
})
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

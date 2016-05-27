fray.emitter
============

Event emitter

[![Build Status](https://travis-ci.org/frayjs/emitter.svg?branch=master)](https://travis-ci.org/frayjs/emitter)
[![Test Coverage](https://codeclimate.com/github/frayjs/emitter/badges/coverage.svg)](https://codeclimate.com/github/frayjs/emitter/coverage)

Usage
-----

Events are deferred ensuring an asynchronous execution

```js
var emitter = require('fray.emitter');

var channel = emitter();

channel.emit('foo', 'hello!');

channel.on('foo', function (msg) {
  console.log(msg); // 'hello!'
});
```

Install
-------

    npm install fray.emitter

Contributing
------------

PRs are welcome!

### Unit tests

    git clone https://github.com/frayjs/emitter
    cd events
    npm install
    npm test

License
-------

MIT

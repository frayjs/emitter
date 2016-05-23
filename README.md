fray.emitter
============

Event emitter

Usage
-----

Events are deferred ensuring an asynchronous execution

```js
var emitter = require('fray.emitter');

var events = emitter();
var log = console.log.bind(console);

channel.emit('foo');
channel.on('foo', log);
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

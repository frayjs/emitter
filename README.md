fray.emitter
============

Event emitter

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

emitter
=======

Event emitter

Usage
-----

Events are deferred ensuring an asynchronous execution

```js
var log = console.log.bind(console),
    channel = emitter();

channel.emit('foo');
channel.on('foo', log);
```

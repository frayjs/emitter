emitter
=======

Event emitter

Usage
-----

Events are deferred ensuring an asynchronous execution

```js
var channel = emitter();

channel.emit('foo');

channel.on('foo', function () {
  console.log('foo has been emitted!');
});
```

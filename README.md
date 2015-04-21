emitter
=======

Event emitter

Usage
-----

```js
var channel = emitter();

channel.on('foo', function () {
  console.log('foo has been emitted!');
});

channel.emit('foo');
```

Debounced listeners
-------------------

Listeners are debounced assuring an asynchronous execution

In the previous example, the listener is declared before `'foo'` is emitted but
since the listener is called in another tick it is not a problem to emit before
the listener declaration

```js
var channel = emitter();

channel.emit('foo');

channel.on('foo', function () {
  console.log('foo has been emitted!');
});
```

Multiple calls to `emit` in the same tick will cause its listeners to be called
just once

```js
var channel = emitter();

channel.on('x', function (x) {
  console.log('x is ' + x);
});

channel.emit('x', 3);
channel.emit('x', 7);
channel.emit('x', 4); // the only emission of 'x' received by its listeners
```

The message listeners are debounced from each other for each particular
message, but with diferent messages each listener is called with the last
message payload

```js
var channel = emitter();

channel.on('x', function (x) {
  console.log('x is ' + x);
});

channel.on('y', function (y) {
  console.log('y is ' + y);
});

channel.emit('x', 3); // (logs nothing)
channel.emit('x', 4); // logs 'x is 4'
channel.emit('y', 6); // logs 'y is 6'
```

Roadmap
-------

*   `once()`
*   `off()`

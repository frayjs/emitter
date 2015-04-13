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

Roadmap
-------

*   `once()`
*   `off()`

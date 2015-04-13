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

*   create logic of methods out of the closure
    (partial apply from the closure)
*   chainable api
*   `once()`
*   `off()`

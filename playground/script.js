define.root(function (require) {
  'use strict';

  var emitter = require('mu.api.emitter');

  var channel = emitter();
  channel.emit('foo', 1, 2, 3);
  channel.on('foo', console.log.bind(console));
});

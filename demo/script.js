define.root(function (require) {
  'use strict';

  var emitter = require('mu.api.emitter');

  var log = console.log.bind(console),
      channel = emitter();
  
  channel.emit('foo', 1, 2, 3);
  channel.on('foo', log);
});

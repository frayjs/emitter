define('mu.api.emitter', function (require) {
  'use strict';

  var isDefined = require('mu.is.defined'),
      apply     = require('mu.fn.apply'),
      partial   = require('mu.fn.partial'),
      each      = require('mu.list.each');

  var on = function (listeners, event, listener) {
    if (!isDefined(listeners[event])) { listeners[event] = []; }
    listeners[event].push(listener);
  };

  var emit = function (/* listeners, event, msg... */) {
    var args = [].slice.call(arguments),
        listeners = args.shift(),
        event = args.shift(),
        msg = args;

    each(listeners[event], function (listener) {
      apply(listener, msg);
    });
  };

  var emitter = function () {
    var listeners = {};

    return {
      on: partial(on, listeners),
      emit: partial(emit, listeners)
    };
  };

  return emitter;
});

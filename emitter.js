define('mu.api.emitter', function (require) {
  'use strict';

  var isDefined = require('mu.is.defined'),
      apply     = require('mu.fn.apply'),
      debounce  = require('mu.fn.debounce'),
      each      = require('mu.list.each'),
      chain     = require('mu.api.chain');

  var on = function (listeners, event, listener) {
    if (!isDefined(listeners[event])) { listeners[event] = []; }
    listeners[event].push(debounce(listener));
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

    return chain({
      on: on,
      emit: emit
    }, listeners);
  };

  return emitter;
});

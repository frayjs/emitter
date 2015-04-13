/**
 * straightforward implementation
 *
 * to improve:
 *
 * *   create methods out of emitter
 * *   chainable api
 * *   once()
 * *   off()
 */
define('mu.api.emitter', function (require) {
  'use strict';

  var isDefined = require('mu.is.defined'),
      apply     = require('mu.fn.apply'),
      each      = require('mu.list.each');

  var emitter = function () {
    var listeners = {};

    var on = function (event, listener) {
      if (!isDefined(listeners[event])) { listeners[event] = []; }
      listeners[event].push(listener);
    };

    var emit = function (/* event, msg... */) {
      var args = [].slice.call(arguments),
          event = args.shift(),
          msg = args;

      each(listeners[event], function (listener) {
        apply(listener, msg);
      });
    };

    return {
      on: on,
      emit: emit
    };
  };

  return emitter;
});

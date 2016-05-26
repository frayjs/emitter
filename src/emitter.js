'use strict';

var addListener = function (listeners, event, listener) {
  if (typeof listeners[event] === 'undefined') { listeners[event] = []; }
  listeners[event].push(listener);
};

var notify = function (msg, listener) {
  listener.apply(null, msg);
};

var digest = function (listeners, event, msg) {
  if (Array.isArray(listeners[event])) {
    listeners[event].forEach(notify.bind(null, msg));
  }
};

var emit = function (listeners, event /* , msg... */) {
  var msg = [].slice.call(arguments, 2);

  setTimeout(function () {
    digest(listeners, event, msg);
    digest(listeners, 'event', [event].concat(msg));
  }, 0);
};

var emitter = function () {
  var listeners = {};

  return {
    on: addListener.bind(null, listeners),
    emit: emit.bind(null, listeners)
  };
};

module.exports = emitter;

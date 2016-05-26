'use strict';

var expect = require('expect.js');
var emitter = require('../src/emitter');

describe('emitter', function () {
  it('should be a function', function () {
    expect(emitter).to.be.a('function');
  });

  describe('emitter()', function () {
    var channel = null;

    beforeEach(function () {
      channel = emitter();
    });

    it('should be an object', function () {
      expect(channel).to.be.an('object');
    });

    it('should expose an `on` method', function () {
      expect(channel.on).to.be.a('function');
    });

    it('should expose an `emit` meethod', function () {
      expect(channel.emit).to.be.an('function');
    });

    describe('on', function () {
      it('should register a listener for an specific event', function (done) {
        channel.on('test', done);
        channel.emit('test');
      });
    });

    describe('emit', function () {
      it('should call registered listeners for an specific event', function (done) {
        channel.on('test', done);
        channel.emit('test');
      });

      it('should call listeners asynchronously', function (done) {
        channel.emit('test');
        channel.on('test', done);
      });

      it('should emit an "event" event for each emitted event', function (done) {
        channel.on('event', function (eventName) {
          expect(eventName).to.be('test');
          done();
        });

        channel.emit('test');
      });

      it('should call listeners with provided arguments', function (done) {
        channel.on('test', function (foo, bar, qux) {
          expect(foo).to.be(123);
          expect(bar).to.be('abc');
          expect(qux).to.be.a('function');

          done();
        });

        channel.emit('test', 123, 'abc', function () {});
      });

      it('should call "event" event listeners with the event name followed by provided arguments', function (done) {
        channel.on('event', function (eventName, foo, bar, qux) {
          expect(eventName).to.be('test');
          expect(foo).to.be(123);
          expect(bar).to.be('abc');
          expect(qux).to.be.a('function');

          done();
        });

        channel.emit('test', 123, 'abc', function () {});
      });
    });
  });
});

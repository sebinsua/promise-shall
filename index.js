'use strict';

module.exports = function shall(p, opts) {
  opts = opts || { through: true };
  var isPromise = typeof p.then !== 'undefined';
  var isCallable = typeof p === 'function';
  return function (/* ... */) {
    if (isCallable) {
      return p.apply(p, opts.through ? arguments : []);
    } else if (isPromise) {
      return p;
    } else {
      return p;
    }
  };
}

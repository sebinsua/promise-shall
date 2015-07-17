# promise-shall
> `.then(shall(promise))`

`shall` receives data passed to it by a `promise.then` which it then either uses to call a function passed into it, or ignores if the variable passed in is not callable.

```javascript

getCar().then(shall(putKeyInIgnition)).
         then(shall(turnKey)).
         then(shall(drive));

// VROOM!

```

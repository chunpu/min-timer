min-timer
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-timer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-timer
[downloads-image]: http://img.shields.io/npm/dm/min-timer.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-timer
[david-image]: http://img.shields.io/david/chunpu/min-timer.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-timer


simple timer for javascript without pain in setInterval

Installation
---

```sh
npm i min-timer
```

inspired by as3 timer

```js
var Timer = require('min-timer')

var timer = new Timer(1000, 5)
timer.start()
timer.on('timer', function() {
	console.log('timer', timer.currentCount)
})
```

Api
---

### Constructor

`new Timer(interval, [repeatCount = Infinity])`

### Property

- `interval` interval set in constructor
- `repeatCount` total count set in constructor
- `currentCount` current count
- `running` is timer running

### Method

- `start()` start timer
- `stop()` stop timer
- `reset()` stop and set currentCount = 0

### Event

- `timer` when one interval pass
- `timerComplete` timer complete

### Static Method

sugar for timer, always auto start, and return the timer instance

- `Timer.interval(fn, interval, [repeatCount = Infinity])`
- `Timer.timeout(fn, delay)`

```js
var timer = Timer.interval(function() {
	console.log('timer interval', timer.currentCount)
}, 500, 5)
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-timer.svg?style=flat-square
[license-url]: #

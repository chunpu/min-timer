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

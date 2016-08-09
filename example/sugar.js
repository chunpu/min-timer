var Timer = require('../')

var timer1 = Timer.interval(function() {
	console.log('timer interval', timer1.currentCount)
}, 500, 5)

var timer2 = Timer.timeout(function() {
	console.log('timer timeout')
}, 1000)

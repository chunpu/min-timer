var Timer = require('../')

var timer = new Timer(100)

timer.on('timer', function() {
	console.log('timer', timer.currentCount)
	if (3 == timer.currentCount) {
		// timer.reset()
		// timer.start()
	}
})

timer.on('timerComplete', function() {
	console.log('timerComplete')
})

timer.start()

var Event = require('min-event')
var _ = require('min-util')

module.exports = exports = Timer

function Timer(interval, repeatCount) {
	var me = this
	Event.call(me)
	if (null == repeatCount) {
		repeatCount = Infinity // default
	}
	me.repeatCount = repeatCount
	me.interval = interval
	me.reset()
}

_.inherits(Timer, Event)

Timer.interval = function(fn, interval, repeatCount) {
	var timer = new Timer(interval, repeatCount)
	timer.on('timer', fn)
	timer.start()
	return timer
}

Timer.timeout = function(fn, interval) {
	return Timer.interval(fn, interval, 1)
}

var proto = Timer.prototype

proto.start = function() {
	var me = this
	if (!me.running) {
		me.timer = setInterval(function() {
			me.currentCount++
			me.emit('timer')
			if (me.currentCount == me.repeatCount) {
				me.emit('timerComplete')
				me.stop()
			}
		}, me.interval)
	}
	me.running = true
}

proto.reset = function() {
	var me = this
	me.stop()
	me.currentCount = 0
}

proto.stop = function() {
	var me = this
	if (me.running) {
		clearInterval(me.timer)
		me.timer = null
	}
	me.running = false
}

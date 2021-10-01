'use strict'

const cont = document.querySelector('.runTimer')
const line = document.querySelector('.runTimerFilling')
const timerUp = document.querySelector('.timerUp')
const timerDown = document.querySelector('.timerDown')
let up = 0;

function run () {
	up++
	if (up < 10) {
		timerUp.textContent = `Run 00:0${up}/01:00`
		timerDown.textContent = `00:${60-up}`
	} else if (up === 60) {
		up = 0
		timerUp.textContent = `Run 00:0${up}/01:00`
		timerDown.textContent = `01:00`
	} else if (up > 50) {
		timerUp.textContent = `Run 00:${up}/01:00`
		timerDown.textContent = `00:0${60-up}`
	} else {
		timerUp.textContent = `Run 00:${up}/01:00`
		timerDown.textContent = `00:${60-up}`
	}
	
}

setInterval(run, 1000)
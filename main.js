const squares = document.querySelectorAll('.square')
const countDown = document.querySelector('.countDown')
const score = document.querySelector('.score')

let currentTime = 60
let result = 0
let clicked
let time = null


function randomSquares() {
	squares.forEach(square => {
		square.classList.remove('mole')
	})
	let randomSquares = squares[Math.floor(Math.random() * 9)]
	randomSquares.classList.add('mole')	
	clicked = randomSquares.id
}



squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		if(square.id == clicked) {
			result++
			score.textContent = result
			clicked = null
		}
	})
})

function move() {
	time = setInterval(randomSquares, 500)
}

move()

function countDownfun() {
	currentTime--
	countDown.textContent = currentTime
	if(currentTime == 0) {
		clearInterval(countDownTimer)
		swal.fire(
			`
			Game Over
			Your Score is ${result}
			`
			)
			clearInterval(time)
	}
}
let countDownTimer = setInterval(countDownfun,1000)
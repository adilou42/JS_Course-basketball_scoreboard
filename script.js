let pointHomeEl = document.getElementById("point-home")
let pointGuestEl = document.getElementById("point-guest")
let count_home = 0
let count_guest = 0

let winningEl = document.getElementById("winning")

function currently_winning() {
	if (count_guest > count_home) {
		if (count_guest - count_home > 10) 
			alert("Les Guest qui prennent le large a bord de leur Tesla full option")
		winningEl.textContent = "Currently winning: GUEST"
	} else if (count_home > count_guest) {
		if (count_home - count_guest > 10)
			alert("Les Home sont en train de les gifler")
		winningEl.textContent = "Currently winning: HOME"
	} else {
		winningEl.textContent = "Currently winning: DRAW"
	}
}


function add1pointhome() {
	count_home++
	pointHomeEl.textContent = count_home
	currently_winning()
}

function add2pointshome() {
	count_home += 2
	pointHomeEl.textContent = count_home
	currently_winning()
}

function add3pointshome() {
	count_home += 3
	pointHomeEl.textContent = count_home
	currently_winning()
}

function add1pointguest() {
	count_guest++
	pointGuestEl.textContent = count_guest
	currently_winning()
}

function add2pointsguest() {
	count_guest += 2
	pointGuestEl.textContent = count_guest
	currently_winning()
}

function add3pointsguest() {
	count_guest += 3
	pointGuestEl.textContent = count_guest
	currently_winning()
}

function restart() {
	count_home = 0
	count_guest = 0
	pointGuestEl.textContent = "0"
	pointHomeEl.textContent = "0"
	currently_winning()
}
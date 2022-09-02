let homeScoreNill = 0
let homePlus1 = document.getElementById("home-plus-1")
let homePlus2 = document.getElementById("home-plus-2")
let homePlus3 = document.getElementById("home-plus-3")
let homeScore = document.getElementById("home-score")

function increaseHome1() {
    homeScoreNill += 1
    homeScore.innerText = homeScoreNill
}
function increaseHome2() {
    homeScoreNill += 2
    homeScore.innerText = homeScoreNill
}
function increaseHome3() {
    homeScoreNill += 3
    homeScore.innerText = homeScoreNill
}
let guestScoreNill = 0
let guestPlus1 = document.getElementById("guest-plus-1")
let guestPlus2 = document.getElementById("guest-plus-2")
let guestPlus3 = document.getElementById("guest-plus-3")
let guestScore = document.getElementById("guest-score")
function increaseGuest1() {
    guestScoreNill += 1
    guestScore.innerText = guestScoreNill
}
function increaseGuest2() {
    guestScoreNill += 2
    guestScore.innerText = guestScoreNill
}
function increaseGuest3() {
    guestScoreNill += 3
    guestScore.innerText = guestScoreNill
}
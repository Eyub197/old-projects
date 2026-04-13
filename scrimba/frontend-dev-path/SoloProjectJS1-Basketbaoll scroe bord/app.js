const one = document.querySelector(".plusOne")
const two = document.querySelector(".plusTwo")
const three = document.querySelector(".plusThree")
const oneG = document.querySelector(".plusOneG")
const twoG = document.querySelector(".plusTwoG")
const threeG = document.querySelector(".plusThreeG")
const homeScore = document.querySelector(".score-H")
const guestScore = document.querySelector(".score-G")
const newGame = document.querySelector(".btn-n")
const homeHeader = document.querySelector(".home-h")
const guestHeader = document.querySelector(".guest-h")
const body = document.querySelector("body")
const displayTimer = document.querySelector(".timer")

let homePoints = 0
let guestPoints = 0

score = document.createElement('p')
body.appendChild(score)
score.style.margin = "20px"
score.style.fontFamily = "sans-serif"
score.style.fontSize = "2rem"
score.style.color = "#9AABD8"

let checkDisplay = () =>  {
            if (homePoints > guestPoints) {
                score.textContent = "Home Team is winning!";
            } else if (homePoints < guestPoints) {
                score.textContent = "Guest Team is winning!";
            } else {
                score.textContent = "It's a tie!";
            } 
      
}

one.addEventListener('click', () => {homePoints++ , homeScore.textContent = homePoints, checkDisplay()})
two.addEventListener('click', () => {homePoints+= 2, homeScore.textContent = homePoints, checkDisplay()})
three.addEventListener('click', () => {homePoints+= 3, homeScore.textContent = homePoints, checkDisplay()})
oneG.addEventListener('click', () => {guestPoints++, guestScore.textContent = guestPoints, checkDisplay()})
twoG.addEventListener('click', () => {guestPoints+= 2, guestScore.textContent = guestPoints, checkDisplay()})
threeG.addEventListener('click', () => {guestPoints+= 3, guestScore.textContent = guestPoints, checkDisplay()})
newGame.addEventListener('click', () => {
    homePoints = 0
    guestPoints = 0
    guestScore.textContent = 0
    homeScore.textContent = 0
})


function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayTimer.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            
        }
    }, 1000);
}


displayTimer.addEventListener('click', function () {
    let fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
});
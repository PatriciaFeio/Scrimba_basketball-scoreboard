const newGameBtn = document.getElementById("newGame-btn")
const scoreHome = document.getElementById("score-home")
const scoreGuest = document.getElementById("score-guest")
const incrementHome = document.getElementById("increment-home")
const incrementGuest = document.getElementById("increment-guest")
const incrementHomeBtn = incrementHome.children
const incrementGuestBtn = incrementGuest.children
let sumHome = 0
let sumGuest = 0


function setNewGame() {
    newGameBtn.addEventListener('click', () => {
        sumHome = 0
        sumGuest = 0
        scoreHome.innerHTML = sumHome
        scoreGuest.innerHTML = sumGuest
    })
}

setNewGame()


function getIncrementHome() {
    for(const btn of incrementHomeBtn) {
        btn.addEventListener('click', function() {
            const btnValue = +btn.value
            sumHome += btnValue
            scoreHome.innerHTML = sumHome
        })
    }
}

getIncrementHome()


function getIncrementGuest() {
    for(const btn of incrementGuestBtn) {
        btn.addEventListener('click', function() {
            const btnValue = +btn.value
            sumGuest += btnValue
            scoreGuest.innerHTML = sumGuest
        })
    }
}

getIncrementGuest()






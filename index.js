// javascript
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0
homeStoreEl.textContent = 0

let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0
guestStoreEl.textContent = 0

// home
function homeAddOne() {
    homeScore += 1 
    homeStoreEl.textContent = homeScore 
    highlightLeader()
}

function homeAddTwo() {
    homeScore += 2 
    homeStoreEl.textContent = homeScore 
    highlightLeader()
}

function homeAddThree() {
    homeScore += 3 
    homeStoreEl.textContent = homeScore 
    highlightLeader()
}

// guest
function guestAddOne() {
    guestScore += 1 
    guestStoreEl.textContent = guestScore 
    highlightLeader()
}

function guestAddTwo() {
    guestScore += 2 
    guestStoreEl.textContent = guestScore 
    highlightLeader()
}

function guestAddThree() {
    guestScore += 3 
    guestStoreEl.textContent = guestScore 
    highlightLeader()
}

// new part
function newGame() {
    homeScore = 0
    homeStoreEl.textContent = homeScore
    guestScore = 0
    guestStoreEl.textContent = guestScore 
}

// highlight leader

function highlightLeader() {
    if(homeScore > guestScore){
        homeStoreEl.classList.add("leader")
        guestStoreEl.classList.remove("leader")
    } else if (homeScore < guestScore) {
        homeStoreEl.classList.remove("leader")
        guestStoreEl.classList.add("leader")
    } else {
        homeStoreEl.classList.remove("leader")
        guestStoreEl.classList.remove("leader")
    }
}


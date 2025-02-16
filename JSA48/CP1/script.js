const back = "na.png";
const cards = [1,2,3,4,5,6,1,2,3,4,5,6];
cards.sort(() => Math.random() > 0.5 ? 1 : -1);

function toPNG(name){
    return name + ".png";
}

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;

function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.src = card.dataset.front;

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.front === secondCard.dataset.front) {
        disableCards();
        updateScore();
        updateLog("Match found!");
    } else {
        unflipCards();
        updateLog("Try again!");
    }
}

function disableCards() {
    firstCard.removeEventListener('click', handleCardClick);
    secondCard.removeEventListener('click', handleCardClick);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.src = back;
        secondCard.src = back;
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function handleCardClick() {
    flipCard(this);
}

function updateScore() {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
}

function updateLog(message) {
    document.getElementById('log').textContent = message;
}

cards.forEach(i => {
    const parent = document.querySelector('#playground');
    const newCard = document.createElement("img");
    newCard.src = back;
    newCard.dataset.front = toPNG(i);
    newCard.addEventListener('click', handleCardClick);
    parent.appendChild(newCard);
});
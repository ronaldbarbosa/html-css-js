const FRONT = 'card-front';
const BACK = 'card-back';
const CARD = 'card';
const ICON = 'icon';
const FLIP = 'flip';


startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards) {
    let board = document.getElementById('board');
    board.innerHTML = '';

    game.cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        board.appendChild(cardElement);
    });
}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if (face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = `./assets/images/${card.icon}.png`;
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);
}

function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add(FLIP);
        if (game.secondCard) {
            updateMoves();
            if (game.checkMatch()) {
                game.clearCards();
                if (game.checkGameOver()) {
                    let gameOverLayer = document.getElementById('game-over');
                    gameOverLayer.style.display = 'flex';
                }
            } else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);

                    firstCardView.classList.remove(FLIP);
                    secondCardView.classList.remove(FLIP);
                    game.unflipCards();
                }, 1000);
            };
        }
    }
}

function restart() {
    game.currentScore = game.moves;
    if(!game.bestScore) game.bestScore = game.currentScore;
    else {
        if (game.currentScore < game.bestScore) game.bestScore = game.currentScore;
    }
    game.clearCards();
    game.moves = 0;
    updateMoves();
    startGame();
    updateBestScore();
    let gameOverLayer = document.getElementById('game-over');
    gameOverLayer.style.display = 'none';
}

function updateMoves() {
    moves = document.getElementById('number-moves');
    moves.innerHTML = `Moves: ${game.moves}`;
}

function updateBestScore() {
    bestScore = document.getElementById('best-score');
    bestScore.innerHTML = `Best score: ${game.bestScore} moves`;
}
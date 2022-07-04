document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

let resetBoard = document.getElementById("reset");
resetBoard.addEventListener('click', resetGame);

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            let tmp = Number(playerTime);
            tmp++;
            alert("Winner: Player " + tmp);
        }, 10);
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function resetSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = ``;
    })
}
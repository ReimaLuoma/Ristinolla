import CellObject from './Class_cellObject.js';

addEventListener('DOMContentLoaded', (event) => {
    generateGame();
});

let boardSize = 9;
let distance = 2;
let num = 1;
let board;
let gameturns = boardSize**2, turn = 2;

function createBoard(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createBoard.apply(this, args);
    }

    return arr;
}

function boardToDivs(board){
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[row].length; col++){
            let newElement = document.createElement("button");
            let parentElement = document.getElementById("grid-container");
            newElement.id = num; board[row][col] = num; num++; 
            newElement.className = "grid-item"; 
            newElement.innerHTML = "&#8193"; 
            newElement.value = 0; 
            newElement.addEventListener("click", () => {setMark(newElement.id, newElement.value)});
            parentElement.appendChild(newElement);
        }
    }
}

function generateGame(){
    board = createBoard(boardSize,boardSize);
    boardToDivs(board);
}

function setMark(id, value){
    let thisId = document.getElementById(id);
    switch(true){
        case ( turn === 1 && value === "0"):
            thisId.innerHTML = "X";
            thisId.value = 1;
            checkForVictory(thisId.id, thisId.value);
            turn = 2;
            gameturns--;
            break;

        case ( turn === 2 && value === "0"):
            thisId.innerHTML = "O";
            thisId.value = 2;
            checkForVictory(thisId.id, thisId.value);
            turn = 1;
            gameturns--;
            break;

        default:
            break;
    }

    if(gameturns == 0){
        alert("Game Over!");
    }
}

function checkForVictory(x, pair){
    //find current location data
    let index = checkTableLocation(x);
    let c_row = index[0];
    let c_col = index[1];
    let cell = new CellObject(c_row, c_col, pair, x, distance, board);
    cell.findMatchingValues();
}

function checkTableLocation(pos){
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[row].length; col++){
            if(pos == board[row][col]){
                console.log("Found it!", board[row][col]);
                return [row,col];
            }
        }
    }
}
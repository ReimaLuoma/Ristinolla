let boardSize = 9;

function createBoard(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createBoard.apply(this, args);
    }

    return arr;
}

let num = 1;

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

let board;

function generateGame(){
    board = createBoard(boardSize,boardSize);
    boardToDivs(board);
    console.table(board);
}

let pelivuorot = boardSize**2, vuoro = 2;

function setMark(id, value){

    switch(true){
        case ( vuoro === 1 && value === "0"):
            thisId = document.getElementById(id);
            thisId.innerHTML = "X";
            thisId.value = 1;
            checkForVictory(thisId.id);
            vuoro = 2;
            pelivuorot--;
            break;

        case ( vuoro === 2 && value === "0"):
            thisId = document.getElementById(id);
            thisId.innerHTML = "O";
            thisId.value = 2;
            checkForVictory(thisId.id);
            vuoro = 1;
            pelivuorot--;
            break;

        default:
            break;
    }

    if(pelivuorot == 0){
        alert("Game Over!");
    }
}

let victoryPoints = 1;

function checkForVictory(x){
    let index = checkTableLocation(x);
    console.log(index);
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





/**/
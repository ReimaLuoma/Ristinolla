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
            checkForVictory(thisId.id, thisId.value);
            vuoro = 2;
            pelivuorot--;
            break;

        case ( vuoro === 2 && value === "0"):
            thisId = document.getElementById(id);
            thisId.innerHTML = "O";
            thisId.value = 2;
            checkForVictory(thisId.id, thisId.value);
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

function checkForVictory(x, pair){
    //find current index
    let index = checkTableLocation(x);
    console.log(index);
    let c_row = index[0];
    let c_col = index[1];
    console.log(c_row, c_col);

    //define surroundings of current index
    let distance = 1;

    let topLeft = board[c_row-distance][c_col-distance];
    let top = board[c_row-distance][c_col];
    let topRight = board[c_row-distance][c_col+distance];
    let left = board[c_row][c_col-distance];
    let right = board[c_row][c_col+distance];
    let bottomLeft = board[c_row+distance][c_col-distance];
    let bottom = board[c_row+distance][c_col];
    let bottomRight = board[c_row+distance][c_col+distance];

    console.log(topLeft);
    console.log(top);
    console.log(topRight);

    console.log(left);
    console.log(right);

    console.log(bottomLeft);
    console.log(bottom);
    console.log(bottomRight);

}

function checkDirForValue(dir, value){
    while(board[c_row][c_col] == pair){
        if(dir == pair){
            c_row = dir[0];
            c_col = dir[1];
            checkDirForValue(dir, value);
        }
    }
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
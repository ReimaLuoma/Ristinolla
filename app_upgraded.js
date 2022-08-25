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

    

    try {
        let topLeft = document.getElementById(board[c_row-distance][c_col-distance]).value;
        let top = document.getElementById(board[c_row-distance][c_col]).value;
        let topRight = document.getElementById(board[c_row-distance][c_col+distance]).value;
        let left = document.getElementById(board[c_row][c_col-distance]).value;
        let right = document.getElementById(board[c_row][c_col+distance]).value;
        let bottomLeft = document.getElementById(board[c_row+distance][c_col-distance]).value;
        let bottom = document.getElementById(board[c_row+distance][c_col]).value;
        let bottomRight = document.getElementById(board[c_row+distance][c_col+distance]).value;
        
        console.log(topLeft, top, topRight);
        console.log(left, "X", right);
        console.log(bottomLeft, bottom, bottomRight);
    } catch {
        //top
        if(c_row - distance < 0){
            console.log("test top");
            //right
            if(c_col + distance > 8){
                console.log("test right");
            }
            //left
            if(c_col - distance < 0){
                console.log("test left");
            }
        }

        //bottom
        if(c_row + distance > 8){
            console.log("test bottom");
            //right
            if(c_col + distance > 8){
                console.log("test right");
            }
            //left
            if(c_col - distance < 0){
                console.log("test left");
            }
        }

        //left
        if(c_col - distance < 0){
            console.log("test left");
        }

        //right
        if(c_col + distance > 8){
            console.log("test right");
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
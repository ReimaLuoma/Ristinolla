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

    //REFACTOR

    //muodosta objekti: row, col, value, id, ympäristötarkistus-metodi
    //tarkista ympäröivät voittoehto - 1 säteellä
    
    //find current location data
    let index = checkTableLocation(x);
    console.log(index);
    let c_row = index[0];
    let c_col = index[1];
    console.log(c_row, c_col);

    //----CONTINUE HERE----

    /*
    //define surroundings of current index
    let distance = 1;
    let checkItems =[];

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

        checkItems.push(topLeft,top, topRight,right,bottomRight,bottom,bottomLeft,left);
    } catch {
        //top
        if(c_row - distance < 0){
            console.log("test top");
            //right
            if(c_col + distance > 8){
                console.log("test right");
                let left = document.getElementById(board[c_row][c_col-distance]).value;
                let bottomLeft = document.getElementById(board[c_row+distance][c_col-distance]).value;
                let bottom = document.getElementById(board[c_row+distance][c_col]).value;

                console.log(left, "X");
                console.log(bottomLeft, bottom);
            }
            //left
            else if(c_col - distance < 0){
                console.log("test left");
                let right = document.getElementById(board[c_row][c_col+distance]).value;
                let bottomRight = document.getElementById(board[c_row+distance][c_col+distance]).value;
                let bottom = document.getElementById(board[c_row+distance][c_col]).value;

                console.log("X", right);
                console.log(bottom, bottomRight);
            }
            else{
                let left = document.getElementById(board[c_row][c_col-distance]).value;
                let right = document.getElementById(board[c_row][c_col+distance]).value;
                let bottomLeft = document.getElementById(board[c_row+distance][c_col-distance]).value;
                let bottom = document.getElementById(board[c_row+distance][c_col]).value;
                let bottomRight = document.getElementById(board[c_row+distance][c_col+distance]).value;

                console.log(left, "X", right);
                console.log(bottomLeft, bottom, bottomRight);
            }
        }

        //bottom
        else if(c_row + distance > 8){
            console.log("test bottom");
            //right
            if(c_col + distance > 8){
                console.log("test right");
                let topLeft = document.getElementById(board[c_row-distance][c_col-distance]).value;
                let top = document.getElementById(board[c_row-distance][c_col]).value;
                let left = document.getElementById(board[c_row][c_col-distance]).value;

                console.log(topLeft, top);
                console.log(left, "X");
            }
            //left
            else if(c_col - distance < 0){
                console.log("test left");
                let top = document.getElementById(board[c_row-distance][c_col]).value;
                let topRight = document.getElementById(board[c_row-distance][c_col+distance]).value;
                let right = document.getElementById(board[c_row][c_col+distance]).value;

                console.log(top, topRight);
                console.log("X", right);
            }
            else{
                let topLeft = document.getElementById(board[c_row-distance][c_col-distance]).value;
                let top = document.getElementById(board[c_row-distance][c_col]).value;
                let topRight = document.getElementById(board[c_row-distance][c_col+distance]).value;
                let left = document.getElementById(board[c_row][c_col-distance]).value;
                let right = document.getElementById(board[c_row][c_col+distance]).value;

                console.log(topLeft, top, topRight);
                console.log(left, "X", right);
            }
        }

        //left
        else if(c_col - distance < 0){
            console.log("test left");
            let top = document.getElementById(board[c_row-distance][c_col]).value;
            let topRight = document.getElementById(board[c_row-distance][c_col+distance]).value;
            let right = document.getElementById(board[c_row][c_col+distance]).value;
            let bottom = document.getElementById(board[c_row+distance][c_col]).value;
            let bottomRight = document.getElementById(board[c_row+distance][c_col+distance]).value;

            console.log(top, topRight);
            console.log("X", right);
            console.log(bottom, bottomRight);
        }

        //right
        else if(c_col + distance > 8){
            console.log("test right");
            let topLeft = document.getElementById(board[c_row-distance][c_col-distance]).value;
            let top = document.getElementById(board[c_row-distance][c_col]).value;
            let left = document.getElementById(board[c_row][c_col-distance]).value;
            let bottomLeft = document.getElementById(board[c_row+distance][c_col-distance]).value;
            let bottom = document.getElementById(board[c_row+distance][c_col]).value;

            console.log(topLeft, top);
            console.log(left, "X");
            console.log(bottomLeft, bottom);
        }
    }
    console.log(checkItems);
    let victoryPoints = 1;

    for(let item = 0; item <checkItems.length; item++){
        if(checkItems[item] == pair){
            victoryPoints++;
            
        }
    }
    */
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
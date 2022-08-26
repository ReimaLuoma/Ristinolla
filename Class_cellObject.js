export default class CellObject{
    constructor(row, col, value, id, distance, board) {
        this.row = row;
        this.col = col;
        this.value = value;
        this.id = id;
        this.distance = distance;
        this.board = board;
    }

    findMatchingValues(){
        this.checkVerticalLineForMatches();
        this.checkHorizontalLineForMatches();
        this.checkFirstDiagonalLineForMatches();
        this.checkSecondDiagonalLineForMatches();
    }

    checkVerticalLineForMatches(){
        let victoryPoints = 0;
        //TOP
        for(let step = 1; step < this.distance; step++){
            if(this.row - step >= 0 && document.getElementById(this.board[this.row - step][this.col]).value == this.value){
                victoryPoints++;
            }
        }
        //BOTTOM
        for(let step = 1; step < this.distance; step++){
            if(this.row + step <= 8 && document.getElementById(this.board[this.row + step][this.col]).value == this.value){
                victoryPoints++;
            }
        }
        console.log(victoryPoints);
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkHorizontalLineForMatches(){
        let victoryPoints = 0;
        //LEFT
        for(let step = 1; step < this.distance; step++){
            if(this.col - step >= 0 && document.getElementById(this.board[this.row][this.col - step]).value == this.value){
                victoryPoints++;
            }
        }
        //RIGHT
        for(let step = 1; step < this.distance; step++){
            if(this.col + step <= 8 && document.getElementById(this.board[this.row][this.col + step]).value == this.value){
                victoryPoints++;
            }
        }
        console.log(victoryPoints);
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkFirstDiagonalLineForMatches(){
        let victoryPoints = 0;
        //TOP-RIGHT
        for(let step = 1; step < this.distance; step++){
            if(this.row - step >= 0 && this.col + step <= 8 && document.getElementById(this.board[this.row - step][this.col + step]).value == this.value){
                victoryPoints++;
            }
        }
        //BOTTOM-LEFT
        for(let step = 1; step < this.distance; step++){
            if(this.row + step <= 8 && this.col - step >= 0 && document.getElementById(this.board[this.row + step][this.col - step]).value == this.value){
                victoryPoints++;
            }
        }
        console.log(victoryPoints);
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkSecondDiagonalLineForMatches(){
        let victoryPoints = 0;
        //BOTTOM-RIGHT
        for(let step = 1; step < this.distance; step++){
            if(this.row + step <= 8 && this.col + step <= 8 && document.getElementById(this.board[this.row + step][this.col + step]).value == this.value){
                victoryPoints++;
            }
        }
        //TOP-LEFT
        for(let step = 1; step < this.distance; step++){
            if(this.row - step >= 0 && this.col - step >= 0 && document.getElementById(this.board[this.row - step][this.col - step]).value == this.value){
                victoryPoints++;
            }
        }
        console.log(victoryPoints);
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkVictoryPoints(x){
        if(x >= 2){
            alert("Victory!");
        }
    }
}
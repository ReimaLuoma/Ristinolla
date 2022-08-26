export default class CellObject{
    constructor(row, col, value, id, distance) {
        this.row = row;
        this.col = col;
        this.value = value;
        this.id = id;
        this.distance = distance;
    }

    findMatchingValues(){
        this.checkVerticalLineForMatches();
        this.checkHorizontalLineForMatches();
        this.checkFirstDiagonalLineForMatches();
        this.checkSecondDiagonalLineForMatches();
    }

    checkVerticalLineForMatches(){
        let victoryPoints;
        //TOP
        for(step = 0; step < this.distance; step++){
            if(board[this.row - step][this.col] >= 0 && document.getElementById(board[this.row - step][this.col]).value == this.value){
                victoryPoints++;
            }
        }
        //BOTTOM
        for(step = 0; step < this.distance; step++){
            if(board[this.row + step][this.col] <= 8 && document.getElementById(board[this.row + step][this.col]).value == this.value){
                victoryPoints++;
            }
        }
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkHorizontalLineForMatches(){
        let victoryPoints;
        //LEFT
        for(step = 0; step < this.distance; step++){
            if(board[c_row][c_col - step] >= 0 && document.getElementById(board[c_row][c_col - step]).value == this.value){
                victoryPoints++;
            }
        }
        //RIGHT
        for(step = 0; step < this.distance; step++){
            if(board[c_row][c_col + step] <= 8 && document.getElementById(board[c_row][c_col + step]).value == this.value){
                victoryPoints++;
            }
        }
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkFirstDiagonalLineForMatches(){
        let victoryPoints;
        //TOP-RIGHT
        for(step = 0; step < this.distance; step++){
            if(board[c_row - step][c_col + step] >= 0 && document.getElementById(board[c_row - step][c_col + step]).value == this.value){
                victoryPoints++;
            }
        }
        //BOTTOM-LEFT
        for(step = 0; step < this.distance; step++){
            if(board[c_row + step][c_col - step] <= 8 && document.getElementById(board[c_row + step][c_col - step]).value == this.value){
                victoryPoints++;
            }
        }
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkSecondDiagonalLineForMatches(){
        let victoryPoints;
        //BOTTOM-RIGHT
        for(step = 0; step < this.distance; step++){
            if(board[c_row + step][c_col + step] >= 0 && document.getElementById(board[c_row + step][c_col + step]).value == this.value){
                victoryPoints++;
            }
        }
        //TOP-LEFT
        for(step = 0; step < this.distance; step++){
            if(board[c_row - step][c_col - step] <= 8 && document.getElementById(board[c_row - step][c_col - step]).value == this.value){
                victoryPoints++;
            }
        }
        this.checkVictoryPoints(victoryPoints);
        victoryPoints = 0;
    }

    checkVictoryPoints(x){
        if(x >= 3){
            alert("Victory!");
        }
    }
}
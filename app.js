/*
Luodaan globaalit muuttujat
    - pelivuorot (kaikki mahdolliset vuorot ennen "Game Over" -näkymää)
    - vuoro (kumman vuoro)
    - pelaajan merkkilista

pelaaja klikkaa elementtiä
    - asetetaan merkki
    - muutetaan kentän value ettei kenttää voi uudelleen valita
    - syötetään pelaajan listalle valitun ruudun id (1-9)
    - tarkistetaan voittoehdot pelaajanlistalta
    - vaihdetaan vuoro
    - vähennetään pelivuoroja yhdellä

pelivuoro vaihtuu
*/

let pelivuorot = 9, vuoro = 2;
let occupiedListPlayer1 = [], occupiedListPlayer2 = [];

function asetaMerkki(id, value){

    switch(true){
        case ( vuoro === 1 && value === "0"):
            document.getElementById(id).innerHTML = "X";
            document.getElementById(id).value = 1;
            occupiedListPlayer1.push(id);
            checkVictory.apply(this, occupiedListPlayer1);
            vuoro = 2;
            pelivuorot--;
            break;

        case ( vuoro === 2 && value === "0"):
            document.getElementById(id).innerHTML = "O";
            document.getElementById(id).value = 2;
            occupiedListPlayer2.push(id);
            checkVictory.apply(this, occupiedListPlayer2);
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

function checkVictory(...condition){
    console.log("vic: ", condition);

    if (condition.includes("1")){
        if (condition.includes("2")){
            if (condition.includes("3")){
                alert("Victory!");
            }
        }
        if (condition.includes("4")){
            if (condition.includes("7")){
                alert("Victory!");
            }
        }
        if (condition.includes("5")){
            if (condition.includes("9")){
                alert("Victory!");
            }
        }
    }
    else if (condition.includes("2")){
        if (condition.includes("5")){
            if (condition.includes("8")){
                alert("Victory!");
            }
        }
    }

    else if (condition.includes("3")){
        if (condition.includes("5")){
            if (condition.includes("7")){
                alert("Victory!");
            }
        }

        if (condition.includes("6")){
            if (condition.includes("9")){
                alert("Victory!");
            }
        }
    }

    else if (condition.includes("4")){
        if (condition.includes("5")){
            if (condition.includes("6")){
                alert("Victory!");
            }
        }
    }

    else if (condition.includes("7")){
        if (condition.includes("8")){
            if (condition.includes("9")){
                alert("Victory!");
            }
        }
    }
}
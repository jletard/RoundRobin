/*RoundRobin.js
Creates a pairing table for using the Crenshaw-Berger tables
Version 0.01 -Creating basic needs for the project. No real i/o yet, just basic logic passed through the console.

John LeTard
*/


//Class Decleartions
class Tournament {
    constructor(numberSections, timeControl) { }
}


class section {
    constructor(numberPlayers, sectionName){
        this.sectionName = sectionName;
        this.numberPlayers = numberPlayers;
        this.playerList = [];
    }

    addPlayer (player) {
        if (player instanceof Player) {
            this.playerList.push(player);
        } else {
            throw new Error(`You can only add players to a section.  This is not a player: ${player}`);
        }
    }

    listSection() {
        var sectionString =  `${this.name} has ${this.numberPlayers}:
        ${this.playerList}`;

        return sectionString
    }

    
}


class Player {
    //all this information can be found using a call to https://www.uschess.org/msa/thin3.php?userID need to learn how to pull that, this is a future John problem
    
    
    constructor(playerName, uscfID, blitzRating, quickRating, regularRating, expirationDate) {
        this.playerName = playerName;
        this.uscfID = uscfID;
        this.blitzRating = blitzRating;
        this.quickRating = quickRating;
        this.regularRating = regularRating;
        this.expirationDate = expirationDate;
        this.PairingNumber = 0;
    }

    assignPairing(pairing) {
        this.PairingNumber = number;
    }


    /*need to check to make sure membership is valid, this is a future John problem
    expired() {
    
    }
    */
}

class TimeControl {
    constructor(base, delay, increment) {
        this.base = base;
        this.delay = delay;
        this.increment = increment;
    }

    displayTimeControl(base, delay, increment) {
        timeControlStr = "g/" + base;
        if (base > 0) { timeControlStr = timeControlStr + ";d" + delay; }
        if (increment > 0) { timeControlStr = timeControlStr + ";+" + increment; }
        return timeControlStr;
    }

    ratingType(base, delay, increment) {
        total = base + delay + increment;
        switch (total) {
            case (total < 5):
                ratingSystem = "Invalid";
                break;
            case (total >= 5 && total <= 10):
                ratingSystem = "Blitz";
                break;
            case (total > 10 && total < 30):
                ratingSystem = "Quick";
                break;
            case (total >= 30 && total <= 65):
                ratingSystem = "Dual";
                break;
            default:
                ratingSystem = "Regular"
        }
        return ratingSystem;
    }
}



//Function Declarations
function pairingShuffle(numberPlayers) {
    var pairings=[];
    for (let i=0; i<numberPlayers; i++){
        pairings.push(i+1);
    }
    let shuffled = pairings.map(value => ({ value, sort: Math.random()})).sort((a,b) => a.sort-b.sort).map(({value}) =>value)
    return shuffled;
}



//Practice Inputs
let John = new Player("John LeTard", 14885541, 1117, 1024, 1020, "2022-06-30");
let Nash = new Player("Nash LeTard", 15631273, 600, 772, 595, "2022-06-30");
let Kevin = new Player("Kevin Zemko", 13306363, 1106, 1022, 898, "2099-12-31");
let Christian = new Player("Christian Von Huene", 12764258, 1691, 1688, 1848, "2023-10-31");
let Don = new Player("Donald Mulcahy", 12421522, 1716, 1786, 1761, "2022-12-31");
let Arjun = new Player("Arjun Bhakta", 13132385, 1239, 1488, 1178, "2022-10-31");
let Andrew = new Player("Andrew Thatcher", 12938230, 1183, 1246, 1473, "2022-06-30");
let Zollie = new Player("Zoltan Szekely", 16955270, 100, 1104, 1082, "2023-02-28");
let Ronin = new Player("Ronin Stocker", 30249695, 585, 912, 909, "2022-08-31");
let Daniel = new Player("Daniel Serna", 30169514, 1090, 920, 952, "2022-03-01");
let Jeff = new Player("Jeff Foreman", 16283781, 360, 605, 608, "2023-02-28");
let Lewis = new Player("Lewis Fowler", 13616410, 598, 821, 695, "2024-01-31");
let Joe = new Player("Joe Cutchall", 17235057, 503, 685, 674, "2022-05-31");
let Bea = new Player("Beatrisz Szekely", 30330614, 100, 249, 100, "2022-11-30");
let Chris = new Player("Christopher Ong", 30451371, 1400, 1402, 1400, "2023-02-28");
let Brian = new Player("Brian Lloyd", 30337195, 100, 1420, 1457, "2022-11-30");
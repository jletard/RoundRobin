/*RoundRobin.js
Creates a pairing table for using the Crenshaw-Berger tables
Version 0.01 -Creating basic needs for the project. No real i/o yet, just basic logic passed through the console.

John LeTard
*/


//Class Decleartions
class Tournament {
    constructor(numberSections, timeControl) { 
        this.numberSections = numberSections;
        this.timeControl = timeControl;
    }
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

    displayTimeControl() {
        let timeControlStr = "g/" + this.base;
        if (this.delay > 0) { timeControlStr = timeControlStr + ";d" + this.delay; }
        if (this.increment > 0) { timeControlStr = timeControlStr + ";+" + this.increment; }
        return timeControlStr;
    }

    ratingType() {
        let total = this.base + this.delay + this.increment;
        let ratingSystem;
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
                ratingSystem = "Regular";
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


//Round Robin Tables to be translated first pairing number plays white
/*3-4 Players
Rd 1    1-4     2-3
Rd 2    3-1     4-2
Rd 3    1-2     3-4
*/

/*5-6 Players
Rd 1    3-6     5-4     1-2
Rd 2    2-6     4-1     3-5
Rd 3    6-5     1-3     4-2
Rd 4    6-4     5-1     2-3
Rd 5    1-6     2-5     3-4
*/

/*7-8 Players
Rd 1    4-8     5-3     6-2     7-1
Rd 2    8-7     1-6     2-5     3-4
Rd 3    3-8     4-2     5-1     6-7
Rd 4    8-6     7-5     1-4     2-3
Rd 5    2-8     3-1     4-7     5-6
Rd 6    8-5     6-4     7-3     1-2
Rd 7    1-8     2-7     3-6     4-5
*/

/*9-10 Players
Rd1     5-10    6-4     7-3     8-2     9-1
Rd2     10-9    1-8     2-7     3-6     4-5
Rd3     4-10    5-3     6-2     7-1     8-9
Rd4     10-8    9-7     1-6     2-5     3-4
Rd5     3-10    4-2     5-1     6-9     7-8
Rd6     10-7    8-6     9-5     1-4     2-3
Rd7     2-10    3-1     4-9     5-8     6-7
Rd8     10-6    7-5     8-4     9-3     1-2
Rd9     1-10    2-9     3-8     4-7     5-6
*/

/*11-12 Players
Rd1     6-12    7-5     8-4     9-3     10-2    11-1        
Rd2     12-11   1-10    2-9     3-8     4-7     5-6
Rd3     5-12    6-4     7-3     8-2     9-1     10-11
Rd4     12-10   11-9    1-8     2-7     3-6     4-5
Rd5     4-12    5-3     6-2     7-1     8-11    9-10
Rd6     12-9    10-8    11-7    1-6     2-5     3-4
Rd7     3-12    4-2     5-1     6-11    7-10    8-9
Rd8     12-8    9-7     10-6    11-5    1-4     2-3
Rd9     2-12    3-1     4-11    5-10    6-9     7-8
Rd10    12-7    8-6     9-5     10-4    11-3    1-2
Rd11    1-12    2-11    3-10    4-9     5-8     6-7
*/

/*13-14 Players
Rd1     1-14    2-13    3-12    4-11    5-10    6-9     7-8
Rd2     14-8    9-7     10-6    11-5    12-4    13-3    1-2
Rd3     2-14    3-1     4-13    5-12    6-11    7-10    8-9
Rd4     14-9    10-8    11-7    12-6    13-5    1-4     2-3
Rd5     3-14    4-2     5-1     6-13    7-12    8-11    9-10
Rd6     14-10   11-9    12-8    13-7    1-6     2-5     3-4
Rd7     4-14    5-3     6-2     7-1     8-13    9-12    10-11
Rd8     14-11   12-10   13-9    1-8     2-7     3-6     4-5
Rd9     5-14    6-4     7-3     8-2     9-1     10-13   11-12   
Rd10    14-12   13-11   1-10    2-9     3-8     4-7     5-6
Rd11    6-14    7-5     8-4     9-3     10-2    11-1    12-13
Rd12    14-13   1-12    2-11    3-10    4-9     5-8     6-7
Rd13    7-14    8-6     9-5     10-4    11-3    12-2    13-1
*/


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

//testing code
console.log(pairingShuffle(12));

const todaysTime = new TimeControl(3, 0, 2);
console.log(todaysTime.displayTimeControl());
console.log(todaysTime.ratingType());

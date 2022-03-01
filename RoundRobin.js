/*RoundRobin.js
Creates a pairing table for using the Crenshaw-Berger tables
Version 0.01 -Creating basic needs for the project.

John LeTard
*/

class Player {
    //all this information can be found using a call to https://www.uschess.org/msa/thin3.php?userID need to learn how to pull that, this is a future John problem
    constructor (firstName, lastName, uscfID, blitzRating, quickRating, regularRating, expirationDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.uscfID = uscfID;
        this.blitzRating = blitzRating;
        this.quickRating = quickRating;
        this.regularRating = regularRating;
        this.expirationDate = expirationDate;
        this.PairingNumber = 0;
    }


    /*need to check to make sure membership is valid, this is a future John problem
    expired() {
    
    }
    */

    //Which Rating will be used in this tournament, default rating is Regular, 
}

class TimeControl {
    constructor (base, delay, increment) {
        this.base = base;
        this.delay = delay;
        this.increment = increment;
    }

    displayTimeControl(base, delay, increment) {
        timeControlStr = "g/" +base;
        if (base >0)  {timeControlStr= timeControlStr + ";d" + delay;}
        if (increment > 0) {timeControlStr= timeControlStr + ";+" + increment;}
        return timeControlStr;
    }

    ratingType (base, delay, increment) {
        total = base + delay + increment;
        switch (total) {
            case (total < 5):
                ratingSystem = "Invalid";
                break;
            case (total >= 5 && total <=10):
                ratingSystem= "Blitz";
                break;
            case (total >10 && total <30):
                ratingSystem = "Quick";
                break;
            case (total >=30 && total <=65):
                ratingSystem = "Dual";
                break;
            default:
                ratingSystem = "Regular"
        }
        return ratingSystem;
    }
}

class Tournament {
    constructor (numberPlayers, timeControl)
}





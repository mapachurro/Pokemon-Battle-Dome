$(document).ready(function () {

    // Variables to be used:
    var monsters = [];
    var defender = "";
    var attacker = "";
    var monsterid;
    //counter for attack rounds and attack power calculation:
    var roundCount = 0;
    var defeated = 0;
    var losses = 0;
    var wins = 0;
    var result;
    
    // Monster constructor -- includes a fair amount of gameplay logic embedded in the attack and counterattack functions
    function PocketMonster(name, healthPoints, attackPower, counterAttack, baseAttack, avatarimg, fighterimg, HPImg) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttack = counterAttack;
        this.baseAttack = baseAttack;
        this.ava = avatarimg;
        this.fi = fighterimg;
        this.HPImg = HPImg;
        
        // Attack function
        this.attack = function () {
            roundCount++;
            console.log("round no: " + roundCount);
            // Make sure the defender has more HP than what the attacker can dish out. Otherwise, you've beaten that defender.
            if (defender.healthPoints > this.attackPower) {
                this.attackPower = (this.baseAttack * roundCount)
                result = defender.healthPoints - this.attackPower;
                defender.healthPoints = result;
                console.log("attacker power: " + this.attackPower);
                statReset();
            }
            else {
                alert("You've defeated " + defender.name + "!");
                attacker.healthPoints = (attacker.healthPoints + 20)
                defeated++;
                // insert logic here: check number of defeated; if three, game is over, increase wins, if not, offer to play again
                if (defeated === 3) {
                    alert("You've won! Congratulations! Would you like to play again?")
                    wins++;
                    playAgain();
                }
                else {
                    alert("Time to select the next defender!");
                    statReset();
                    this.defeated();
                    chooseDefender();
                }
            }
        };
        // Counterattack function (if this character is defender)
        this.counterAtt = function () {
            // Same deal with the attacker's HP.
            if (attacker.healthPoints > this.counterAttack) {
                result = attacker.healthPoints - this.counterAttack;
                attacker.healthPoints = result;
                statReset();
            }
            else {
                alert(defender.name + " defeated you!! Would you like to play again?");
                losses++;
                playAgain();
            }
        };
        // This function should make the corresponding pokemon's image disappear in the fighting area, and reappear in the bench area
        this.inactive = function () {
            $(this.ava).css("visibility", "visible" );
            $(this.fi).css( "visibility", "hidden");
            $(this.HP).css("visibility", "hidden");
        };

        // This function makes the corresponding pokemon the attacker.
        this.attacker = function(){
        $(this.ava).css("visibility", "hidden");
        console.log(this.ava + " present avatar img")
        $(this.fi).css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });  
        }

        // This function should make the corresponding pokemon's image disappear in the bench area, and reappear in the fightin area
        this.defender = function(){
            $(this.ava).css("visibility", "hidden");
            console.log(this.ava + " present avatar img")
            $(this.fi).css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
            statReset();
        }

        // This function should make the corresponding pokemon's image disappear.
        this.defeated = function () {
            $(defender.fi).css("visibility", "hidden");
            $(this.HP).css("visibility", "hidden");
            defender = "";
        };
    //End of constructor 
    }

    // Monsters:
    monsters.Bulba = new PocketMonster("Bulbasaur", 184, 0, 27, 12, "#bulba_ava", "#bulba_fi", "#bulbaHP");
    monsters.Char = new PocketMonster("Charmander", 193, 0, 31, 10, "#char_ava", "#char_fi", "#charHP");
    monsters.Dratini = new PocketMonster("Dratini", 199, 0, 25, 13, "#dratini_ava", "#dratini_fi", "#dratiniHP");
    monsters.Vapo = new PocketMonster("Vaporeon", 191, 0, 30, 11, "#vapo_ava", "#vapo_fi", "#vapoHP");

    // Updates the scoreboard.
    function statReset() {
        //This keeps the pokemon's stats up to date on the page. Allegedly.
        $("#attackerHP").text("Your HP: " + attacker.healthPoints);
        $("#defenderHP").text("WINS: " + wins);
        $("#wincounter").text("LOSSES: " + losses);
        $("#losscounter").text("HP: " + defender.healthPoints);
    }

    // When the game starts, the player will choose a character by clicking on the fighter's picture. 
    function chooseFighter(monsterid) {
        switch (monsterid) {
            case "bulba":
                attacker = monsters.Bulba;
                break;
            case "char":
                attacker = monsters.Char;
                break;
            case "dratini":
                attacker = monsters.Dratini;
                break;
            case "vapo":
                attacker = monsters.Vapo;
                break;
            default:
            break; 
            // end switch
        }
        console.log("attacker will be " + attacker.name);
        attacker.attacker();
        // End chooseFighter
    }

    // Next, the player needs to choose the first defender.
    function chooseDefender(monsterid) {
        switch (monsterid) {
            case "bulba":
                defender = monsters.Bulba;
                break;
            case "char":
                defender = monsters.Char;
                break;
            case "dratini":
                defender = monsters.Dratini;
                break;
            case "vapo":
                defender = monsters.Vapo;
                break;
            default:
            // end switch
        };
        console.log("defender will be " + defender.name)
        defender.defender();
        // Make the attack button visible
        $("#attackButton").css("visibility", "visible");
        $("#playButton").css("visibility", "hidden");
    }

    //The following are listener events for each one of the pictures identifying the pokemon. 
    // They handle the logic for whether it will be a defender or attacker. 
    // They also handle the logic for making images appear and disappear; these functions are specified in the constructor.
    // There is a more elegant way to do this, but bootstrap, custom .css and jquery *do not like to play well together*
    $("#bulba_ava").click(function () {
        monsterid = "bulba";
        if ((attacker === "") && (defender === "")) {
            chooseFighter(monsterid);
        }
        else if ((attacker !== "") && (defender === "")) {
            chooseDefender(monsterid);
        }
        else{
            alert("time to play the game!")
        };
    })
    $("#char_ava").click(function () {
        monsterid = "char";
        if ((attacker === "") && (defender === "")) {
            chooseFighter(monsterid);
        }
        else if ((attacker !== "") && (defender === "")) {
            chooseDefender(monsterid);
        }
        else{
            alert("time to play the game!")
        };
    })
    $("#dratini_ava").click(function () {
        monsterid = "dratini";
        if ((attacker === "") && (defender === "")) {
            chooseFighter(monsterid);
        }
        else if ((attacker !== "") && (defender === "")) {
            chooseDefender(monsterid);
        }
        else{
            alert("time to play the game!")
        };
    })
    $("#vapo_ava").click(function () {
        monsterid = "vapo";
        if ((attacker === "") && (defender === "")) {
            chooseFighter(monsterid);
        }
        else if ((attacker !== "") && (defender === "")) {
            chooseDefender(monsterid);
        }
        else{
            alert("time to play the game!")
        };
    })

    // Whenever the player clicks attack, their character damages the defender.
    // This is accomplished through an onclick() function plus an attack() function:
    function Attack() {
        if ((attacker !== "") && (defender !== "")) {
            attacker.attack();
            defender.counterAtt();
        }
        else {
            console.log("you need someone to attack! Choose a defender!")
            chooseDefender();
        }
    };

    // Set up a listener event for the attack button.
    $("#attackButton").click(function (){
        Attack();
        console.log("defender HP: " + defender.healthPoints + " attacker HP: " + attacker.healthPoints);
    })

    // Function name says it all.
    function playAgain(){
        defender = "";
        attacker = "";
        // Bring all the images back up top.
        monsters.Bulba.inactive();
        monsters.Char.inactive();
        monsters.Dratini.inactive();
        monsters.Vapo.inactive();
        // Clean out the HP counters and update the wins/losses.
        $("#attackerHP").text("ATTACKER HP: " + "0");
        $("#defenderHP").text("DEFENDER HP: " + "0");
        $("#losscounter").text("LOSSES: " + losses);
        $("#wincounter").text("WINS: " + wins);
        // Reset monster healthpoints
        monsters.Bulba.healthPoints = 184;
        monsters.Char.healthPoints = 193;
        monsters.Dratini.healthPoints = 199;
        monsters.Vaporeon.healthPoints = 191;
    };
})

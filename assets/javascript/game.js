$(document).ready(function () {

    //Variables to be used:
    var Bulba = {
        name: "Bulbasaur",
        healthPoints: 145,
        attack_Power: "",
        counter_attack: 27,
        base_attack: 12,
    };
    console.log(Bulba.healthPoints);

    var Char = {
        name: "Charmander",
        healthPoints: 136,
        attack_power: "",
        counter_attack: 31,
        base_attack: 10,
    };

    var Dratini = {
        name: "Dratini",
        healthPoints: 159,
        attack_power: "",
        counter_attack: 25,
        base_attack: 13,
    };

    var Vapo = {
        name: "Vaporeon",
        healthPoints: 151,
        attack_power: "",
        counter_attack: 30,
        base_attack: 11,
    };

    var defender = "";
    var attacker = "";
    var attackBtn = $("attackButton");
    //counter for attack rounds and attack power calculation:
    var count = 0;
    var defeated = 0;




    //Functions to be used:

    //Attack function. Ideally this can be used in both directions.
    function attack(HP, attack) {
        resultHP = (HP - attack)
    }

    function restartgame() {
        //As the name implies, this is to restart the game once game has been won (currently under development)
        $(".fighter_pic").css("visibility: hidden;")
    };


    //This function is to initiate gameplay.
    function playGame() {
        $("#playbutton").click(function () {
            $(".avatar_pic").css("visibility: visible;");
        });

        //When the user clicks on the first image, that'll be the user's avatar ("attacker").
        //When the user clicks on the second image, that'll be the first defender ("defender").
        //If the character has been selected, hide it in the avatar area.
        //If the character has been selected, make it visible in the fighting area with the appropriate colored border. For some reason,
        //this isn't working correctly. They'll show up in the fighting area, with the colored border, but without their HP counters.
        $("#bulba_ava").click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = Bulba;
                $("#bulba_ava").css({ "visibility": "hidden" });
                $("#bulba_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
                $("#bulbaHP").css({
                    "visibility": "visible",
                    "position": "absolute",
                    "bottom": "20px",
                    "width": "250px",
                    "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }
            else if ((defender === "") && (attacker !== Bulba)) {
                defender = Bulba;
                $("#bulba_ava").css({ "visibility": "hidden" });
                $("#bulba_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
                $("#bulbaHP").css({
                    "visibility": "visible",
                    "position": "absolute",
                    "bottom": "20px",
                    "width": "250px",
                    "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }
        });
        console.log(attacker);
        console.log(defender);
        $("#char_ava").click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = Char;
                $("#char_ava").css({ "visibility": "hidden" });
                $("#char_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
                $("#charHP").css({
                    "visibility": "visible",
                    "position": "absolute",
                    "bottom": "20px",
                    "width": "250px",
                    "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }
            else if ((defender === "") && (attacker !== Char)) {
                defender = Char;
                $("#char_ava").css({ "visibility": "hidden" });
                $("#char_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
                $("#charHP").css({
                    "visibility": "visible",
                    "position": "absolute",
                    "bottom": "20px",
                    "width": "250px",
                    "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }
        });

        console.log(attacker);
        console.log(defender);
        $("#dratini_ava").click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = Dratini;
                $("#dratini_ava").css({ "visibility": "hidden" });
                $("#dratini_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
                $("#dratiniHP").css({"visibility": "visible", "position": "absolute", "bottom": "20px", "width": "250px", "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }
        
            else if ((defender === "") && (attacker !== Dratini)) {
                defender = Dratini;
                $("#dratini_ava").css({ "visibility": "hidden" });
                $("#dratini_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
                $("#dratiniHP").css({
                    "visibility": "visible",
                    "position": "absolute",
                    "bottom": "20px",
                    "width": "250px",
                    "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }
        });
        console.log(attacker);
        console.log(defender);
        $("#vapo_ava").click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = Vapo;
                $("#vapo_ava").css({ "visibility": "hidden" });
                $("#vapo_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
                $("#vapoHP").css({
                    "visibility": "visible",
                    "position": "absolute",
                    "bottom": "20px",
                    "width": "250px",
                    "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }
            else if ((defender === "") && (attacker !== Vapo)) {
                defender = Vapo;
                $("#vapo_ava").css({ "visibility": "hidden" });
                $("#vapo_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
                $("#vapoHP").css({
                    "visibility": "visible",
                    "position": "absolute",
                    "bottom": "20px",
                    "width": "250px",
                    "padding": "5px",
                    "margin-bottom": "0",
                    "font-weight": "300",
                    "line-height": "30px",
                    "color": "#ffffff",
                    "text-align": "center",
                    "background": "#4aaaa5",
                    "border-bottom": "0"
                });
            }



        });
        //Up till now the attack button has been hidden. Make it visible.
        $("#attackButton").css({ "visibility": "visible" });
        //Show them stats
        console.log(attacker);
        console.log(defender);


    };

    function attackLoop() {
        //Attack button behavior:
        $("#attackButton").on("click", function() {
            //start counting attack rounds for attack power calculation
            count++;
            
            //Also, define some variables within the attack function that we need:
            var attackerBase = (attacker.base_attack);
            var defenseHP = (defender.healthPoints);
            var attackHP = (attacker.healthPoints);
            var defenseAttack = (defender.counter_attack); 
            var attackOver = false;
            var defenseOver = false;

            //then on each successive click, the attacker's base attack is multiplied by that number (of clicks).
            var attackerPower = (attackerBase * count);
            
            //Make sure we have both an attacker and a defender
            if ((attacker !== "") && (defender !== "")) {
                
                console.log(attacker.name);
                console.log(defender.name);
                //Give the attacker first attack. The behavior is that we attack with base_attack
                while (defenseHP > 0 && attackHP > 0 && (attackOver === false)){
                    attack(defenseHP, attackerPower);
                    defenseHP = resultHP;
                    attackOver = true;
                    console.log("End of attack round: " + defenseHP);
                };
                statReset();
                
                //then the defender counterattacks. 
                //NOTE Currently we have an infinite loop here.
                while (defenseHP > 0 && attackHP > 0 && (defenseOver === false)){
                    attack(attackHP, defenseAttack);
                    attackHP = resultHP;
                    defenseOver = true;
                    console.log("End of defense round: " + resultHP);
                };
                statReset();
                
                //When the defender's HP is depleted, make it disappear and clear out the "defender" category   
                if (attackHP < 0) {
                    alert("Oh no! Your pokemon fainted! Try again :-( ");
                    //Run reset loop, or just refresh the page
                    defender = "";
                    attacker = "";
                    statReset();
                    restartgame();
                    playGame();
                    }
                    
                    if (defenseHP < 0) {
                        //If the "defeated enemies" counter is 3, then alert the player they've won and offer them a reset button
                        if (defeated > 2) {
                            alert("Congratulations! You've won! Ready to play again?");
                            //Run reset loop, or just refresh the page
                            defender = "";
                            attacker = "";
                            statReset();
                            restartgame();
                            playGame();
                        }
                        else {
                         //Provide an alert that you've defeated your enemy, and it's time to click on another.
                            alert("Congratulations! You defeated " + defender + "!! Choose another opponent to keep battling!");
                            defender = "";
                        //Add a number to the "defeated enemies" counter
                            defeated++;
                        }
                    }

            }
        })
    }

    function statReset() {
        //This keeps the pokemon's stats up to date on the page. Allegedly.
        //This part doesn't work. I'm not sure how to make it update in real time to the correct <div>.
        $("#bulbaHP").text("HP: " + Bulba.healthPoints);
        $("#charHP").text("HP: " + Char.healthPoints);
        $("#dratiniHP").text("HP: " + Dratini.healthPoints);
        $("#vapoHP").text("HP: " + Vapo.healthPoints);
        console.log(Vapo.healthPoints);


    }




    //Essential gameplay:
    statReset();
    restartgame();
    playGame();
    attackLoop();   







})
// DONE When the game starts, the player will choose a character by clicking on the fighter's picture. 
// OK COOL SOUNDS GOOD The player will fight as that character for the rest of the game.
// AIGHT GOT THAT The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.
// F'SHO YALL The player chooses an opponent by clicking on an enemy's picture.
// GOT THAT Once the player selects an opponent, that enemy is moved to a defender area.

// SMASH THAT EFFIN BUTTON The player will now be able to click the attack button.


// Whenever the player clicks attack, their character damages the defender. 
//The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. 
// The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.





// The player will keep hitting the attack button in an effort to defeat their opponent.



// When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.



// The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.



// Option 2 Game design notes


// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

// Each time the player attacks, their character's Attack Power increases by its base Attack Power. 


// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).



// The enemy character only has Counter Attack Power. 


// Unlike the player's Attack Points, Counter Attack Power never changes.


// The Health Points, Attack Power and Counter Attack Power of each character must differ.

// No characters in the game can heal or recover Health Points. 


// A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.


// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.



// Reminder: Submission on BCS


// Please submit both the deployed Github.io link to your homework AND the link to the Github Repository
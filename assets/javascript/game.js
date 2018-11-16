$(document).ready(function () {

    //Variables to be used:
    var Bulba = {
        healthPoints: 145,
        attackPower: "",
        counterAttack: 27,
        baseAttack: 23,
    };
    console.log(Bulba.healthPoints);

    var Char = {
        healthPoints: 136,
        attack_power: "",
        counter_attack: 31,
        base_attack: 26,
    };

    var Dratini = {
        healthPoints: 159,
        attack_power: "",
        counter_attack: 25,
        base_attack: 29,
    };

    var Vapo = {
        healthPoints: 151,
        attack_power: "",
        counter_attack: 30,
        base_attack: 25,
    };

    var defender;
    var attacker;
    var attackBtn = $("attackButton");




    //Functions to be used:


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
        //If the character has been selected, make it visible in the fighting area with the appropriate colored border.
        $('#bulba_ava').click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = bulba;
                $("#bulba_ava").css({ "visibility": "hidden" });
                $("#bulba_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
            }
            else if ((defender === "") && (attacker !== bulba)){
                defender = bulba;
                $("#bulba_ava").css({ "visibility": "hidden" });
                $("#bulba_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
            }
        });
        console.log(attacker);
        console.log(defender);
        $("#char_ava").click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = char;
                $("#char_ava").css({ "visibility": "hidden" });
                $("#char_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
            }
            else if ((defender === "") && (attacker !== char)){
                defender = char;
                $("#char_ava").css({ "visibility": "hidden" });
                $("#char_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
            }
        });
        console.log(attacker);
        console.log(defender);
        $("#dratini_ava").click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = dratini;
                $("#dratini_ava").css({ "visibility": "hidden" });
                $("#dratini_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
            }
            else if ((defender === "") && (attacker !== dratini)) {
                defender = dratini;
                $("#dratini_ava").css({ "visibility": "hidden" });
                $("#dratini_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
            }
        });
        console.log(attacker);
        console.log(defender);
        $("#vapo_ava").click(function () {
            if ((attacker === "") && (defender === "")) {
                attacker = vapo;
                $("#vapo_ava").css({ "visibility": "hidden" });
                $("#vapo_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "green" });
            }
            else if ((defender === "") && (attacker !== vapo)) {
                defender = vapo;
                attacker = vapo;
                $("#vapo_ava").css({ "visibility": "hidden" });
                $("#vapo_fi").css({ "visibility": "visible", "border-style": "solid", "border-width": "3px", "border-color": "red" });
            }

            //Up till now the attack button has been hidden. Make it visible.
            $("#attackButton").css({ "visibility": "visible" });
            //Show them stats

            
        });
        console.log(attacker);
        console.log(defender);


    };

    function attackLoop() {
        //Attack button behavior:
        $("#attackButton").on("click"(function () {
            if ((attacker !== "") && (defender !== "")) {

            }
        })
    )}

    function statReset() {
        //This keeps the 
        $("#bulbaHP").text("HP: " + Bulba.healthPoints);
        $("#charHP").text("HP: " + Char.healthPoints);
        $("#dratiniHP").text("HP: " + dratini.healthPoints);
        $("#vapoHP").text("HP: " + vapo.healthPoints);


    }
    



    //Essential gameplay:

    restartgame();
    playGame();
    statReset();

 




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
function Call_Loop() {
    var Digit = ""; // sets a variable to be filled out by the while loop
    var X = 1; // sets a variable for the while loop to use
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Avengers = ["Captain America", "Thor", "Iron Man", "The Wasp", "Black Panther", "The Vision", "The Scarlet Witch", "Captain Marvel"]; // been using the JLA a lot, so figured I'd switch it up a bit, lol
var Roster = ""; // sets a variable to be populated
var Z;
function for_Loop() {
    for (Z = 0; Z < Avengers.length; Z++) {
        Roster += Avengers[Z] + "<br>";
    }
    document.getElementById("List_of_Superheroes").innerHTML = Roster;
}

function array_Function() {
    let C = document.getElementById("index").value // was struggling conceptually with just copying the example, so I decided to add some user input
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    Cat_Picture[4] = "hunting"; // my cats will tell you they do this most often
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[C] + "."; // allows for the sentence to be switched up with different numbers
    
}

const Superman = {name:"Superman", type:"Superhero", identity:"Clark Kent", color:"blue", power:"flight"}; // if there was ever a "Constant" of superheroes, it would be Superman

function constant_function() {
    Superman.power = "Super Strength"; // interesting that the properties of a constant could be changed
    Superman.nemesis = "Lex Luthor";
    document.getElementById("Constant").innerHTML = Superman.name + " is a " + Superman.type + " whose secret identity is " + Superman.identity + " and has the power of " + Superman.power + " which he uses to fight " + Superman.nemesis;
}

let Green_Lantern = {
    name: "Green Lantern",
    identity: "Kyle Rayner",
    color1: "Green",
    color2: "Black",
    color3: "White",
    power: "Power Ring",
    sector: "2814",
    description: function() { // really liked seeing a function defined within an object -- very much helped me get my head around what "methods" are
        return this.name + " is a superhero with the secret identity of " + this.identity + " who protects sector " + this.sector + " with his " + this.power; // really feel like I'm gonna get a lot of use out of "this.something"
    }
};
document.getElementById("Green_Lantern_Object").innerHTML = Green_Lantern.description();



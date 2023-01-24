function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function VoteFunc() {
    var Age, CanVote;
    Age = document.getElementById("Age").value;
    CanVote = (Age < 18) ? "You are too young to vote!":"Go ahead and vote!";
    document.getElementById("Vote").innerHTML = CanVote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function SuperHero(Name, Identity, Powers, Costume) {
    this.Hero_Name = Name;
    this.Hero_Identity = Identity;
    this.Hero_Powers = Powers;
    this.Hero_Costume = Costume;
}

var Superman = new SuperHero("Superman", "Clark Kent", "Flight, Super Strength, Super Speed, Super Vision", "Red, Blue, Yellow, Caped");

function TestFunc() {
    document.getElementById("New_and_This").innerHTML =
    Superman.Hero_Name + " goes by " + Superman.Hero_Identity + " when not in costume. His powers include "
    + Superman.Hero_Powers + " and he wears a " + Superman.Hero_Costume + " costume.";
}

function NestedFunc() {
    document.getElementById("Nested_Function").innerHTML = Func();
    function Func() {
        var X = "I don't know what I'm doing... ";
        function Nest() {X += "But I hope this works!";}
        Nest();
        return X;
    }
}
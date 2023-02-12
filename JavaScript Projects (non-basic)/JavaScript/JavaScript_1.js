function Hero_Function() {
    var Hero_Output;
    var Heroes = document.getElementById("Fav_Superhero").value;
    var String = " is pretty cool.";
    switch(Heroes) {
        case "Superman":
            Hero_Output = "Superman" + String;
        break;
        case "Batman":
            Hero_Output = "Everybody likes Batman.";
        break;
        case "Wonder Woman":
            Hero_Output =  "Wonder Woman" + String;
        break;
        case "The Flash":
            Hero_Output = "The Flash" + String;
        break;
        case "Green Lantern":
            Hero_Output = "Green Lantern" + String + " Not Guy Gardner, though.";Man
        break;
        case "Swamp Thing":
            Hero_Output = "Swamp Thing" + String + " Love how Alan Moore saw vegeatable Frankenstein and truned him into a plant elemental with an existential crisis.";
        break;
        case "Animal Man":
            Hero_Output = "Animal Man" + String + " The Morrison stuff is the best, though.";
        break;
        case "Booster Gold":
            Hero_Output = "Nobody likes Booster Gold.";
        break;
        case "Mister Miracle":
            Hero_Output = "Mister Miracle" + String + " Big Barda is cooler, though.";
        break;
        case "Aztek":
            Hero_Output = "Be honest, you don't even know who that is, do you?";
        break;
        case "Spider-Man":
            Hero_Output = "Yes, Spidey is my favorite, I've just been doing a lot of JLA themed stuff throughout the bootcamp and wanted to stay on theme.";
        break;
        default:
            Hero_Output = "Please enter one of the choices exactly as written on the above list. No, we're not doing Marvel stuff, please stop asking."
    }
    var A = document.getElementsByClassName("Output");
    A[0].innerHTML = Hero_Output;
}

var c = document.getElementById("Draw_Stuff");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(1, "green");
grd.addColorStop(0.75, "purple");

var grd2 = ctx.createLinearGradient(0, 0, 170, 0);
grd2.addColorStop(1, "blue");
grd2.addColorStop(0, "white");

ctx.beginPath();
ctx.arc(250, 125, 120, 0, 5 * Math.PI);
ctx.stroke();
ctx.fillStyle = grd;
ctx.fill();

ctx.beginPath();
ctx.arc(250, 125, 110, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 100, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 90, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 80, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 70, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 60, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 50, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 40, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 30, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 20, 0, 5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 10, 0, 5 * Math.PI);
ctx.stroke();
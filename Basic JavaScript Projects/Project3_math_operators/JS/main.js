function addFunc4() {
    var four = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + four;
}

function subFunc5() {
    var five = 8 - 3;
    document.getElementById("Also_Math").innerHTML = "8 - 3 = " + five;
}

function multFunc6() {
    var six = 2 * 3;
    document.getElementById("Still_Math").innerHTML = "2 * 3 = " + six;
}

function divFunc7() {
    var seven = 21 / 3;
    document.getElementById("Always_Math").innerHTML = "21 / 3 = " + seven;
}

function mathFuncX() {
    var math = (2 + 2 - 3) * 3 / 3;
    document.getElementById("All_The_Math").innerHTML = "2 + 2 - 3 * 3 / 3 = " + math;
}

function remainFunc() {
    var remain = 25 % 6;
    document.getElementById("Math_Again").innerHTML = "The remainder is " + remain;
}

function negFunc() {
    var neg = 1;
    document.getElementById("Mathy_Math").innerHTML = "2 - 3 = " + -neg;
}

function incFunc() {
    var inc = 1;
    inc++;
    window.alert(inc);
}

function decFunc() {
    var dec = 1;
    dec--;
    window.alert(dec--);
}

function rando() {
    window.alert(Math.random() * 100);
}

function rando2() {
    window.alert(Math.round(Math.random() * 100));
}
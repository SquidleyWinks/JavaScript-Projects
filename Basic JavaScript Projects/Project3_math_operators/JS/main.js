function addFunc4() { // Uses addition operator
    var four = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + four;
}

function subFunc5() { // Uses subtraction operator
    var five = 8 - 3;
    document.getElementById("Also_Math").innerHTML = "8 - 3 = " + five;
}

function multFunc6() { // Uses multiplication operator
    var six = 2 * 3;
    document.getElementById("Still_Math").innerHTML = "2 * 3 = " + six;
}

function divFunc7() { // Uses division operator
    var seven = 21 / 3;
    document.getElementById("Always_Math").innerHTML = "21 / 3 = " + seven;
}

function mathFuncX() { // Uses all 4 arithmatic operators to a rather underwhelming result
    var math = (2 + 2 - 3) * 3 / 3;
    document.getElementById("All_The_Math").innerHTML = "2 + 2 - 3 * 3 / 3 = " + math;
}

function remainFunc() { // Uses the modulus operator, which returns the remainder
    var remain = 25 % 6;
    document.getElementById("Math_Again").innerHTML = "The remainder is " + remain;
}

function negFunc() { // Uses the negativ operator
    var neg = 1;
    document.getElementById("Mathy_Math").innerHTML = "2 - 3 = " + -neg;
}

function incFunc() { // Uses incriment, which, for some reason, didn't want to work until I made an alert window with button setup
    var inc = 1;
    inc++;
    window.alert(inc);
}

function decFunc() { // Uses decriment, which also needed the window/button setup
    var dec = 1;
    dec--;
    window.alert(dec--);
}

function rando() { // Didn't even try the getElement method -- went straight to window
    window.alert(Math.random() * 100);
}

function rando2() { // Pretty sure this completes the Math Object requirement -- was very fun to accomplish this on the first try :-)
    window.alert(Math.round(Math.random() * 100));
}
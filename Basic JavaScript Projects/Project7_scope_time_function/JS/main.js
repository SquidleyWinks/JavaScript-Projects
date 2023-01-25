var Y = 100; // Global Variable

function Add_numbers_1() {
    var X = 10; // Local Variable
    console.log(20 + X + "<br>"); // Using console.log to debug
}

function Add_numbers_2() {
    console.log(10 + X); // Using console.log to debug (error left in)
}

Add_numbers_1();
Add_numbers_2();

function TimeFunc() { 
    if (new Date().getHours() > 12) {
        document.getElementById("Greeting").innerHTML = "Good Afternoon!"
    }
    if (new Date().getHours() > 17) {
        document.getElementById("Greeting").innerHTML = "Good Evening!"
    }
}

function funkyFunc() { // I tried to make this function with a If Answer = "Yes" in place of the age value, but it didn't work properly. Either always displayed the "Yes" branch or didn't work at all.
    Answer = document.getElementById("Ice_Cream").value;
    if (Answer >= 18) {
        IC = "You can vote!";
    }
    else {
        IC = "You are too young to vote!";
    }
    document.getElementById("Result").innerHTML = IC;
}

function Time_function() {
    var Time = new Date().getHours(); // Checks the time
    var Reply;
    if (Time < 12 == Time > 0) { // if statment for morning
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { // if statment for afternoon
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."; // if statement for evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
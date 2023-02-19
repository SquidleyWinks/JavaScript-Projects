function getReceipt() { // function that kicks off once the place order button is pressed
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; // sets initial toal to 0
    var sizeTotal = 0; // sets initial size value to 0
    var sizeArray = document.getElementsByClassName("size"); // creates array of pizza sizes
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) { // looks for the size that is checked
            var selectedSize = sizeArray[i].value; // gets value of selected size
            text1 = text1 + selectedSize + "<br>"; // adds selected size to receipt items
        }
    }
    if (selectedSize === "Small Pizza") { // conditional that looks for selected size to assign price
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Child Pizza") {
        sizeTotal = 18;
    } else if (selectedSize === "Family Pizza") {
        sizeTotal = 23;
    }
    runningTotal = sizeTotal; // sets running total to size price
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);    // kicks off topping calc function
};

function getTopping(runningTotal,text1) { // recieves variables from previous function
    var toppingTotal = 0; // sets initial topping total to 0
    var selectedTopping = []; // creates empty array for toppings selected
    var toppingArray = document.getElementsByClassName("toppings"); // gets the toppings from the HTML
    for (var j = 0; j < toppingArray.length; j++) { // cycles through all the toppings
        if (toppingArray[j].checked) { // looks for topping options that are checked
            selectedTopping.push(toppingArray[j].value); // sends the topping value to the array
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>"; // adds topping name to the list of items on reciept
        }
    }
    var toppingCount = selectedTopping.length; // sets topping count to how many toppings were selected
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // gives a free topping
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); // updates running total
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping (not toes) = "+"$"+toppingTotal+".00"); // we will not accept orders of just toes pizza
    console.log("topping text1: "+text1);
    console.log("Purchasing Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};


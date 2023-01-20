document.write(typeof 7); // Displays data type of 7

document.write(" 100" + 20); // combines num and string

document.write(isNaN(" Five")); // not a number 

document.write(isNaN(" 100")); // not a number

function infinity() {
    document.getElementById("High").innerHTML = 2E500; // function returning Infinity
}

function negInfinity() {
    document.getElementById("Low").innerHTML = -2E500; // function returning -Infinity
}

document.write(10 < 20); // True

document.write(10 > 20); // Flase

console.log(2 * 3); // Hidden in log

console.log(1 > 2); // Hidden in log

document.write(1 == 1); // True

document.write(1 == 2); // False

document.write(1 === 1); // True

document.write(1 === "two"); // False

document.write(1 === "1"); // False

document.write(1 === 2); // False

document.write(1 < 2 && 10 > 4); // True

document.write(1 > 2 && 10 > 4); // False

document.write(1 < 2 || 10 < 4); // True
 
document.write(1 > 2 || 2 > 3); // False

document.write(!(1 > 2)); // True

document.write(!(1 < 2)); // Flase
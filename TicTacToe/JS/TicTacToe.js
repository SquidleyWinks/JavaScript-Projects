let activePlayer = "X"; // sets player turn
let selectedSquares = []; // sets array for selected squares

function placeXOrO(squareNumber) { // main image placing function
    if (!selectedSquares.some(element => element.includes(squareNumber))) { // checks for occupied square
        let select = document.getElementById(squareNumber);
        if (activePlayer === "X") {
            select.style.backgroundImage = 'url("./Images/Leo.png")'; // sets Leo for player
        } else {
            select.style.backgroundImage = 'url("./Images/Squeaks.png")'; // sets Squeaks for random
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }
        audio("./Media/place.mp3"); // winning sound -- I know the assignment was to use new sounds, but I didn't want to give my data to an unknown service
        if (activePlayer === "O") {
            disableClick(); // function to disable taking another turn before opponent
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    function computersTurn() { // function determining computer's turn
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9)); // selects a random square number
            if (placeXOrO(pickASquare)) { 
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { // I had to move this above the func that checks the win conditions for things to work right
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext('2d');
    let x1 = coordX1, // simplifies coordinate variables for reuse
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    function animateLineDrawing() { // function to draw the line over winning squares
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, .8)";
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    function clear() { // clears line once drawn
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio("./Media/winGame.mp3");
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function checkWinConditions() {  // function to check for 3 of same image in a row
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        audio("./Media/tie.mp3");
        setTimeout(function () { resetGame(); }, 500);
    }
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

function disableClick() { // function preventing clicks on opponent's turn
    body.style.pointerEvents = "none";
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);
}

function audio(audioURL) { // function for playing audio noises
    let audio = new Audio(audioURL);
    audio.play();
}

function resetGame() { // function to reset game board
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = ""; // resets images
    }
    selectedSquares = []; // resets selected squares array
}
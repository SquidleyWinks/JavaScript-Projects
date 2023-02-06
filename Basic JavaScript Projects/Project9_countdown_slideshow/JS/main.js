function countdown() {
    var seconds = document.getElementById("seconds").value; // Gets the variable value from the input

    function tick() {
        seconds = seconds - 1; // Counts down
        TimeRanges.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        timer.innerHTML = seconds + "...";
        if (seconds == -1) {
            alert("Time's up!"); // Alert when time is up
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1; // begins slideshow at first picture
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n); // increases/decreases slides
}

function currentSlide(n) {
    showSlides(slideIndex = n); // sets displayed slide to n
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // gets slides from HTML
    let dots = document.getElementsByClassName("dot"); // gets dots from HTML
    if (n > slides.length) {slideIndex = 1} // if we go past 3, loops back to 1
    if (n < 1) {slideIndex = slides.length} // if we go past 1, loops back to 3
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // uses classes to indicate which image is currently shown
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
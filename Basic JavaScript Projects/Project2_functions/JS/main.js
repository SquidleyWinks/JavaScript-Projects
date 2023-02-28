function My_First_Function() {
    var str = "Congratulations!"; // Assigns the variable
    var ing = " You passed the test!";
    str += ing; // Concatenates
    document.getElementById("Test").innerHTML = str; // Displays the string
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});
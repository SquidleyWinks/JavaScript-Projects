function validateForm() {
    let x = document.getElementById("fname").value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } 
    let y = document.getElementById("lname").value;
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
}
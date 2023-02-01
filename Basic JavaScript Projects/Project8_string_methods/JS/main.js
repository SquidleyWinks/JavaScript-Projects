var sen = "This is ";
var tence = "a sentence";
document.write(sen.concat(tence.toUpperCase())); // Only the finest in concatenation
document.write(" " + sen.search("a"));

var Pi = 3.1415926536; // Fun with Pi! (but not Pi factorial)
document.write(" " + Pi.toPrecision(3));
document.write(" " + Pi.toFixed(5));

var text = "This is text.";
var test = text.valueOf(); // Not sure what makes this method useful, but I'm sure I'll find out eventually
document.write(" " + test);

function slice_Method() {
    var Sentence = "Nobody is going to see this." // Except you, right now
    var Section = Sentence.slice(0,6); // Tried (1,6) first, but it cut off the 'N' so hence the 0
    document.getElementById("Slice").innerHTML = Section;
}

function StringFunc() {
    var X =123;
    document.getElementById("String_a_Ling").innerHTML = X.toString();
}
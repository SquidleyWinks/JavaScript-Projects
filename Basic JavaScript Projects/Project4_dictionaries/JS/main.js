function Secret_Identities() { //Created a function
    var JLA = { // Created a dictionary
        Superman: "Clark Kent", // Several KVPs
        Batman: "Bruce Wayne",
        WonderWoman: "Diana Prince",
        GreenLanern: "Kyle Rayner",
        TheFlash: "Wally West",
    }
    delete JLA.Batman; // Batman wouldn't want his secret identity readily available like this
    document.getElementById("Dictionary").innerHTML = JLA.Batman; // Proof of deleted entry
}
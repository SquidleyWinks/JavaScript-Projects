function displayDeath(character) {
    var characterDeath = character.getAttribute("data-hero-death");
    var hero = character.getAttribute("id");
    var output;
    switch(hero) {
        case "Superman":
            output = hero + " was killed by " + characterDeath + " in a brutal fight throughout Metropolis.";
        break;
        case "Batman":
            output = hero + " was struk by the Omega Beams of " + characterDeath + ", which appeared to kill him, but actually transported him back in time to the dawn of humanity.";
        break;
        case "The Flash":
            output = hero + " sacrificed himself to stop the device of the " + characterDeath + " from destroying the final Earth in Crisis on Infinite Earths.";
        break;
        case "Swamp Thing":
            output = characterDeath + " died when his project, the Bio-Restorative Formula was sabotaged. " + hero + " was created by the formula mixing Holland's memories with the vegitation of the swamp, resulting in a being that had never been human, yet believed that it was.";
        break;
        case "Animal Man":
            output = hero + " died in outer space while fighting the forces of " + characterDeath + ". Don't worry, he came back next issue.";
        break
    }
    alert(output);
}
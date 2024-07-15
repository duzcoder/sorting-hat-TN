function welcomeBool() {
    var ch = "Welcome to Hogwarts!";
    var i = 0;
    var rch = "";

    function typeCharacter() {
        if (i < ch.length) {
            rch += ch.charAt(i);
            document.getElementById("h1text").textContent = rch; // Use textContent to set text
            i++;
            setTimeout(typeCharacter, 100); // Adjust the timeout as needed for typing speed
        } else {
            // Reset and start over
            i = 0;
            rch = "";
            setTimeout(typeCharacter, 1000); // Wait for a second before starting over
        }
    }

    typeCharacter(); // Start the typing effect
}

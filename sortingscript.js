function house() {
    const answers = document.querySelectorAll("input[type=radio]:checked");
    const houseScores = { Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 };

    answers.forEach(answer => {
        switch (answer.value) {
            case "A":
                houseScores.Gryffindor++;
                break;
            case "B":
                houseScores.Hufflepuff++;
                break;
            case "C":
                houseScores.Ravenclaw++;
                break;
            case "D":
                houseScores.Slytherin++;
                break;
        }
    });

    const sortedHouses = Object.keys(houseScores).sort((a, b) => houseScores[b] - houseScores[a]);
    const selectedHouse = sortedHouses[0];
    displayResult(selectedHouse);
}

function displayResult(house) {
    const houseImages = {
        Gryffindor: "images/Gryffindor.png",
        Hufflepuff: "images/Hufflepuff.png",
        Ravenclaw: "images/Ravenclaw.png",
        Slytherin: "images/Slytherin.png"
    };
    
    const houseSounds = {
        Gryffindor: "sounds/gryffindor.m4a",
        Hufflepuff: "sounds/hufflpuff.m4a",
        Ravenclaw: "sounds/ravenclaw.m4a",
        Slytherin: "sounds/slytherin.m4a"
    };

    document.getElementById("resultText").innerHTML = `You belong to <strong>${house}</strong> house!`;
    document.getElementById("houseImage").src = houseImages[house];
    document.getElementById("houseImage").alt = `${house} Image`;
    document.getElementById("audio").src = houseSounds[house];

    const modal = document.getElementById("resultModal");
    modal.style.display = "block";}
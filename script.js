const url = new URL("https://dragonball-api.com/api/characters");

// Target important elements for display purposes
const imgBox = document.querySelector(".imgBox");
const characterInfo = document.querySelector(".characterInfo");

// Search for the character Piccolo and return the results
const searchCharacter = () => {
    url.search = new URLSearchParams({
        name: "piccolo"
    });
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // Display the character to the screen
            displayCharacter(data[0]);
            console.log(data[0]);
        })
}

// Displays the character to the screen
const displayCharacter = characterData => {
    // Display the image
    const img = document.createElement("img");
    img.src = characterData.image;
    imgBox.appendChild(img);

    // Display the name
    const name = document.createElement("h3");
    name.textContent = characterData.name;
    characterInfo.appendChild(name);

    // Display the base ki
    const baseKi = document.createElement("p");
    baseKi.textContent = `Base Ki: ${characterData.ki}`;
    characterInfo.appendChild(baseKi);

    // Display the max ki
    const maxKi = document.createElement("p");
    maxKi.textContent = `Max Ki: ${characterData.maxKi}`;
    characterInfo.appendChild(maxKi);

}

searchCharacter();
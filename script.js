const url = new URL("https://dragonball-api.com/api/characters");

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
            console.log(data);
        })
}

searchCharacter();
document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.querySelector(".random-image");
    const namePoke = document.querySelector("#namePoke");
    
    const randomId = Math.floor(Math.random() * 1025) + 1;
    
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            imageElement.src = data.sprites.front_default;
            imageElement.alt = data.name;
            namePoke.innerHTML = data.name;
        })
        .catch(error => console.error("Error al obtener los datos:", error));
});

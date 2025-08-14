document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.querySelector(".random-image");
    const namePoke = document.querySelector("#namePoke");
    const typesElement = document.querySelector("#types");
    const shinyToggle = document.querySelector("#shinyToggle");
    const loadingElement = document.querySelector(".loading");
    let isShiny = false;
    let currentPokemon = null;

    const fetchPokemon = () => {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

        loadingElement.classList.add("active");
        imageElement.style.display = "none";

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                currentPokemon = data;
                imageElement.src = isShiny ? data.sprites.front_shiny : data.sprites.front_default;
                imageElement.alt = data.name;
                namePoke.textContent = data.name;
                typesElement.textContent = `Tipo: ${data.types.map(type => type.type.name).join(", ")}`;
                loadingElement.classList.remove("active");
                imageElement.style.display = "block";
            })
            .catch(error => {
                console.error("Error al obtener los datos:", error);
                loadingElement.textContent = "Error al cargar Pokémon";
            });
    };

    shinyToggle.addEventListener("click", () => {
        if (currentPokemon) {
            isShiny = !isShiny;
            imageElement.src = isShiny ? currentPokemon.sprites.front_shiny : currentPokemon.sprites.front_default;
            shinyToggle.textContent = isShiny ? "Cambiar a Normal" : "Cambiar a Shiny";
        }
    });

    fetchPokemon();
});
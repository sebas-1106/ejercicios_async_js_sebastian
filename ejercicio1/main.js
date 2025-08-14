fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(data => {
        const characterList = document.querySelector("#character-list");

        data.forEach(character => {
            let opt = document.createElement("option");
            opt.value = character.imageUrl;
            opt.textContent = character.fullName;
            characterList.appendChild(opt);
        });

        updateCharacterImage(characterList.value);
    })
    .catch(error => console.error("Error al cargar los personajes:", error));

function updateCharacterImage(imageUrl) {
    const imgElement = document.querySelector(".character-image");
    imgElement.src = imageUrl;
}

document.querySelector("#character-list").addEventListener("change", function () {
    updateCharacterImage(this.value);
});

function updateCharacterImage(imageUrl) {
    const imgElement = document.querySelector(".character-image");

    imgElement.classList.remove("animate-image");

    void imgElement.offsetWidth;

    imgElement.src = imageUrl;

    imgElement.classList.add("animate-image");
}

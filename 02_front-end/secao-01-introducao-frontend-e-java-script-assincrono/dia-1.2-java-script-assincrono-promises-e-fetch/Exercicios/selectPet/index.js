// Pegar botão random-dog
const getDogButton = document.querySelector("#random-dog");

// Pegar botão random-cat
const getCatButton = document.querySelector("#random-cat");

// Pegar botão surprise
const surpriseMeButton = document.querySelector("#surprise-me");

// Pegar elemento da imagem que exibirá a imagem dos pets
const petImage = document.querySelector("#random-pet-image");

// Evento de click no botão
getDogButton.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            const petURL = data.message;
            petImage.src = petURL;
        })
});

// Evento de click
getCatButton.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then(([data]) => {
            const petURL = data.url;
            petImage.src = petURL;
        })
});

// Evento de click
surpriseMeButton.addEventListener("click", () => {
    Promise.any([
        fetch("https://api.thecatapi.com/v1/images/search"),
        fetch("https://dog.ceo/api/breeds/image/random"),
    ])
    .then((response) => response.json())
    .then((data) => {
        const petURL = data.message || data[0].url;
        petImage.src = petURL;
    });
});
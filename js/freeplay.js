// Lista de canciones con sus imágenes y enlaces a las páginas HTML correspondientes
const songs = [
    {
        title: "Canción 1 - Substantial Digitalized",
        image: "images/mod-image1.png",
        link: "mod1.html" // Link a la página del mod 1
    },
    {
        title: "Canción 2 - Another Track",
        image: "images/mod-image2.png",
        link: "mod2.html" // Link a la página del mod 2
    },
    {
        title: "Canción 3 - Final Challenge",
        image: "images/mod-image3.png",
        link: "mod3.html" // Link a la página del mod 3
    }
];

let currentSongIndex = 0;

const songDisplay = document.getElementById("songDisplay");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateSong() {
    // Actualizar el título y la imagen de la canción
    songDisplay.querySelector(".mod-title").textContent = songs[currentSongIndex].title;
    songDisplay.querySelector(".mod-image").src = songs[currentSongIndex].image;
}

prevButton.addEventListener("click", () => {
    // Cambiar a la canción anterior
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    updateSong();
});

nextButton.addEventListener("click", () => {
    // Cambiar a la siguiente canción
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    updateSong();
});

// Redirigir al HTML correspondiente cuando se haga clic en el cuadro de la canción
songDisplay.addEventListener("click", () => {
    window.location.href = songs[currentSongIndex].link;
});

// Llamada inicial para mostrar la primera canción
updateSong();

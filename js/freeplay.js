// Lista de canciones con sus imágenes y enlaces a las páginas HTML correspondientes
const songs = [
    {
        title: "Song 1 - Safety Lullaby",
        image: "gifs/SafetyLullaby.gif",
        link: "mod1.html" // Link a la página del mod 1
    },
    {
        title: "Song 2 - Left Unchecked",
        image: "gifs/LeftUnchecked.gif",
        link: "mod2.html" // Link a la página del mod 2
    },
    {
        title: "song 3 - Lost Cause",
        image: "gifs/LostCause.gif",
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

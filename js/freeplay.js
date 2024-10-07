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
        title: "Song 3 - Lost Cause",
        image: "gifs/LostCause.gif",
        link: "mod3.html" // Link a la página del mod 3
    }
];

let currentSongIndex = 0;

const songDisplay = document.getElementById("songDisplay");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateSong() {
    const newSongBox = document.createElement('div');
    newSongBox.classList.add('song-box');
    
    newSongBox.innerHTML = `
        <img src="${songs[currentSongIndex].image}" alt="Imagen del Mod" class="mod-image">
        <p class="mod-title">${songs[currentSongIndex].title}</p>
    `;

    newSongBox.style.position = 'absolute'; // Para que se deslice dentro del contenedor
    newSongBox.style.left = '100%'; // Inicia a la derecha de la vista

    songDisplay.parentElement.appendChild(newSongBox); // Añadir nuevo box

    // Deslizar hacia la izquierda
    setTimeout(() => {
        newSongBox.style.transition = 'left 0.5s ease-in-out';
        newSongBox.style.left = '0'; // Desliza hacia la posición original
        songDisplay.style.left = '-100%'; // Desliza el antiguo a la izquierda
    }, 10);

    // Espera que termine la animación y actualiza el display
    setTimeout(() => {
        songDisplay.parentElement.removeChild(songDisplay); // Remover el antiguo box
        newSongBox.id = 'songDisplay'; // Actualiza el ID del nuevo box
    }, 500); // Coincide con la duración de la animación
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

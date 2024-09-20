document.addEventListener('DOMContentLoaded', () => {
    const extraMusic = document.getElementById('extraMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeUpBtn = document.getElementById('volumeUpBtn');
    const volumeDownBtn = document.getElementById('volumeDownBtn');

    const mediaContent = document.getElementById('media');
    const mediaList = [
        { type: 'image', src: 'images/extra1.png' },
        { type: 'video', src: 'media/extra1.mp4' },
        { type: 'image', src: 'images/extra2.png' },
        { type: 'video', src: 'videos/extra2.mp4' }
    ];
    let currentIndex = 0;

    function loadMedia(index) {
        mediaContent.innerHTML = ''; // Limpiar contenido actual

        const media = mediaList[index];

        if (media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.src;
            img.alt = `Extra ${index + 1}`;
            mediaContent.appendChild(img);
        } else if (media.type === 'video') {
            const video = document.createElement('video');
            video.src = media.src;
            video.controls = true;
            video.autoplay = true; // Auto reproducir el video cuando se carga
            mediaContent.appendChild(video);
        }
    }

    function updateMedia() {
        loadMedia(currentIndex);
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length;
        updateMedia();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % mediaList.length;
        updateMedia();
    });

    // Función para alternar entre reproducir y pausar la música
    playPauseBtn.addEventListener('click', () => {
        if (extraMusic.paused) {
            extraMusic.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            extraMusic.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Función para aumentar el volumen
    volumeUpBtn.addEventListener('click', () => {
        if (extraMusic.volume < 1) {
            extraMusic.volume = Math.min(extraMusic.volume + 0.1, 1);
        }
    });

    // Función para disminuir el volumen
    volumeDownBtn.addEventListener('click', () => {
        if (extraMusic.volume > 0) {
            extraMusic.volume = Math.max(extraMusic.volume - 0.1, 0);
        }
    });

    // Cargar el primer medio
    updateMedia();
});

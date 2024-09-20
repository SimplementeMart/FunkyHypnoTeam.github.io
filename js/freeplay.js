document.addEventListener('DOMContentLoaded', () => {
    const songItems = document.querySelectorAll('.song-item');
    const songInfos = document.querySelectorAll('.song-info');
    const freeplayMusic = document.getElementById('freeplayMusic');

    let currentIndex = 0;

    function updateSelection() {
        songInfos.forEach((info, index) => {
            info.classList.add('hidden');
            songItems[index].classList.remove('selected');
            songItems[index].classList.add('deselected');
        });

        songInfos[currentIndex].classList.remove('hidden');
        songItems[currentIndex].classList.add('selected');
        songItems[currentIndex].classList.remove('deselected');
    }

    function loadSong(index) {
        currentIndex = index;
        updateSelection();
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + songItems.length) % songItems.length;
        loadSong(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % songItems.length;
        loadSong(currentIndex);
    });

    songItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            loadSong(index);
        });
    });

    freeplayMusic.play();
});

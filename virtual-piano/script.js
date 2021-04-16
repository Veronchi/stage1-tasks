const piano = document.querySelector('.piano');

piano.addEventListener('mousedown', function (event) {
    const pianoButton = event.target;

    if (pianoButton.classList.contains('piano-key')) {
        pianoButton.addEventListener('mouseup', function (event) {
            event.target.classList.remove("piano-key-active")
        }, {once: true})
        pianoButton.addEventListener('mouseout', function (event) {
            event.target.classList.remove("piano-key-active")
        }, {once: true})
        

        const note = pianoButton.dataset.note;
        const src = `./assets/audio/${note}.mp3`;
        playAudio(src);
        getActiveBtn(pianoButton);
    }

});

function getActiveBtn(target) {
    const pianoKeys = document.querySelectorAll('.piano-key')

    pianoKeys.forEach((el) => {
        if (el.classList.contains('piano-key-active')) {
            el.classList.remove('piano-key-active');
        }
    });
    target.classList.add('piano-key-active');
}

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}




const piano = document.querySelector('.piano');

const modelPiano = {
    elPiano: piano,
    lastTargetElement: null,
}

modelPiano.elPiano.addEventListener('mousedown', function (event) {

    if (event.target.classList.contains('piano-key')) {
        modelPiano.lastTargetElement = event.target;

        modelPiano.elPiano.addEventListener('mouseover', overCall);

        document.addEventListener('mouseup', function (event) {
            modelPiano.lastTargetElement.classList.remove("piano-key-active");
            modelPiano.elPiano.removeEventListener('mouseover', overCall);
        }, { once: true })

        const note = modelPiano.lastTargetElement.dataset.note;
        const src = `./assets/audio/${note}.mp3`;
        playAudio(src);
        getActiveBtn(modelPiano.lastTargetElement);
    }

})

window.addEventListener('keydown', function (event) {
    let eventCodeStr = event.code;
    let letterOfStr = eventCodeStr.substr(3, 1);
    let datasetLetter = document.querySelector(`[data-letter="${letterOfStr}"]`);

    if (datasetLetter) {
        const note = datasetLetter.dataset.note;
        const src = `./assets/audio/${note}.mp3`;
        playAudio(src);
        getActiveBtn(datasetLetter);
        // modelPiano.lastTargetElement = datasetLetter;  
    }


})

window.addEventListener('keyup', function (event) {
    const pianoKeys = document.querySelectorAll('.piano-key')

    pianoKeys.forEach((el) => {
        if (el.classList.contains('piano-key-active')) {
            el.classList.remove('piano-key-active');
        }
    });
})

function overCall(event) {
    if (event.target.classList.contains('piano-key')) {
        modelPiano.lastTargetElement = event.target;
        const note = modelPiano.lastTargetElement.dataset.note;
        const src = `./assets/audio/${note}.mp3`;
        playAudio(src);
        getActiveBtn(modelPiano.lastTargetElement);
    }
}

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




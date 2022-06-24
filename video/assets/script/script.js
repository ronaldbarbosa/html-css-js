let video = document.getElementById('video');
let controls = document.getElementsByClassName('controls')[0];
let img = document.querySelector('#img');
let isPlaying = false;

function decrease() {
    video.currentTime -= 5;
}

function increase() {
    video.currentTime += 5;
}

function lowew() {
    if (video.playbackRate > 0.25) {
        video.playbackRate -= 0.25;
    }
}

function faster() {
    if (video.playbackRate < 2.0) {
        video.playbackRate += 0.25;
    }
}

function play() {
    if (isPlaying) {
        video.pause();
        isPlaying = false;
        img.setAttribute("src", "./assets/image/play.png");
    } else {
        video.play();
        isPlaying = true;
        img.setAttribute('src', './assets/image/pause.png');
    }
}

function stop() {
    video.pause();
    video.currentTime = 0;
    isPlaying = false;
    img.setAttribute("src", "./assets/image/play.png");
} 

function hide() {
    if (isPlaying) {
        controls.classList.add('hidden');
    }
}

function show() {
    controls.classList.remove('hidden');

}

/**
 * TO DO
 * implementar apresentação das informaações de velocidade e adiantar/atrasar o video
 * implementar opção de assistir de novo quando o video acabar
 */
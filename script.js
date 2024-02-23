let vid = document.getElementById("video");

var slider = document.getElementById("myRange");
var videoSlider = document.getElementById("videoSlider")
videoSlider.max = vid.duration;


let Button = document.getElementById("playPauseButton")
let playing = false;

function volumeChange() {
    var vol = slider.value/100;
    vid.volume = vol;
}

function durationChange() {
    videoSlider.max = vid.duration;
    vid.currentTime = videoSlider.value;
}

var value = 5;
function skipForward() {
    vid.currentTime += value;
    videoSlider.value = vid.currentTime;
}
function skipBackward() {
    vid.currentTime -= value;
    videoSlider.value = vid.currentTime;
}
slider.style.display = "none"
function showVol() {
    if(slider.style.display == "none") {
        slider.style.display = "flex";
        document.getElementById("volSection").style.bottom = "80px";
    } else {
        slider.style.display = "none";
        document.getElementById("volSection").style.bottom = "0px";
    }
}

function pauseVid() {
    if(playing == true) {
        vid.pause();
        playing = false;
        Button.innerHTML = ">"
    } else {
        vid.play();
        playing = true;
        Button.innerHTML = "||"
    }
}

function fullscreen() {
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
    }
}


const signupContainer = document.querySelector(".Signup-container");
const loginContainer = document.querySelector(".login-container");
const pritamlist = document.querySelector(".pritamlist");
const rgtprtn = document.querySelector(".rgt-prtn");
const homebtn = document.querySelector(".home");
const songImage = document.getElementById('song-image');

const song = document.getElementById("song");
const progress = document.getElementById("progress");
const ctrlIcon = document.getElementById("ctrlIcon");
const musicplayer = document.querySelector(".music-player");

function login() {
    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        signupContainer.style.display = "none";
    }
}

function signup() {
    if (signupContainer.style.display === "none") {
        signupContainer.style.display = "block";
        loginContainer.style.display = "none";
    } else {
        signupContainer.style.display = "none";
        loginContainer.style.display = "none";
    }
}

function pritam() {
    if (pritamlist.style.display === "none") {
        pritamlist.style.display = "block";
        rgtprtn.style.display = "none";
    } else {
        pritamlist.style.display = "none";
        rgtprtn.style.display = "block";
    }
}

function home() {
    if (rgtprtn.style.display === "none") {
        rgtprtn.style.display = "block";
        pritamlist.style.display = "none";
        musicplayer.style.display="none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    pritamlist.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'LI') {
            const songSrc = e.target.getAttribute('data-song');
            const imageSrc = e.target.getAttribute('data-image');
            if (songSrc) {
                song.src = songSrc;
                song.play();
                musicplayer.style.display = "block";
                if (imageSrc) {
                    songImage.src = imageSrc;
                }
                song.onloadedmetadata = function() {
                    progress.max = song.duration;
                    progress.value = song.currentTime;
                }
            
                song.ontimeupdate = function() {
                    progress.value = song.currentTime;
                }
            }
        }
    });

    progress.oninput = function() {
        song.currentTime = progress.value;
    }
});

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

function back() {
    song.currentTime -= 10;
}

function forward() {
    song.currentTime += 10;
}
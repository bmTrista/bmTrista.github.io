const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseVideo);

function playPauseVideo() {
    if (myVideo.paused || myVideo.ended) {
        playPauseImg.src = "url"
        myVideo.play();
    } else{
        playPauseImg.src ="url"
        myVideo.pause();
    }  
}

document.addEventListener("DOMContentLoaded", function() {
  // 选择 play-pause 按钮
  const playPauseButton = document.querySelector("#play-pause-btn");
  console.log(playPauseButton);
// Summary:
// This part selects the play-pause button element from the DOM using its ID "play-pause-btn".
// The selected button is then logged to the console for debugging purposes.
// This setup is essential for adding functionality to the play-pause button in the subsequent steps.

  // 添加点击事件监听器
  playPauseButton.addEventListener("click", togglePlayPause);
// Summary:
// This part selects the play-pause button when the DOM content is fully loaded.
// It logs the button to the console for debugging purposes.
// An event listener is added to the button to handle play/pause functionality.

  // 选择 play-pause 图片
  const playPauseImg = document.querySelector("#play-pause-img");
  console.log(playPauseImg);
// Summary:
// This part selects the play-pause image element and logs it to the console for debugging purposes.
// The image will be used to visually indicate whether the video is playing or paused.

  // 选择视频元素
  const myVideo = document.querySelector("#custom-video-player");
// Summary:
// This part selects the video element with the ID "custom-video-player".
// This element will be controlled by the play/pause button and other video-related functionalities.

  // 更新进度条
  myVideo.addEventListener("timeupdate", updateProgressBar);
// Summary:
// This part adds an event listener to the video element to update the progress bar as the video plays.
// The "timeupdate" event is triggered periodically as the video plays, allowing the progress bar to reflect the current time of the video.

  const progressBarFill = document.querySelector("#progress-bar-fill");
  console.log(progressBarFill);
// Summary:
// This part selects the progress bar fill element and logs it to the console for debugging purposes.
// The progress bar will visually indicate the current progress of the video playback.


  function togglePlayPause() {
    if (myVideo.paused || myVideo.ended) {
      playPauseImg.src = "icons8-pause-100.png";
      myVideo.play();
    } else {
      playPauseImg.src = "icons8-play-100.png";
      myVideo.pause();
    }
  }
// Summary:
// The togglePlayPause function toggles the play and pause states of the video.
// It changes the source of the play-pause image to indicate the current state.
// If the video is paused or ended, it changes the image to a pause icon and plays the video.
// If the video is playing, it changes the image to a play icon and pauses the video.

  function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    progressBarFill.style.width = progress + "%";
  }
// Summary:
// The updateProgressBar function updates the width of the progress bar based on the current time of the video.
// The width is calculated as a percentage of the video's total duration.
// This provides a visual representation of how much of the video has been played.

  // 全屏按钮功能
  const fullscreenButton = document.querySelector("#fullscreen-button");
  console.log(fullscreenButton);
// Summary:
// This part selects the fullscreen button element and logs it to the console for debugging purposes.
// The button will be used to toggle fullscreen mode for the video.

  fullscreenButton.addEventListener("click", goFullscreen);
  myVideo.addEventListener("dblclick", goFullscreen);
// Summary:
// Event listeners are added to the fullscreen button and the video element to handle fullscreen functionality.
// Clicking the fullscreen button or double-clicking the video will toggle fullscreen mode.

  function goFullscreen() {
    if (!document.fullscreenElement) {
      if (myVideo.requestFullscreen) {
        myVideo.requestFullscreen();
      } else if (myVideo.webkitRequestFullscreen) {
        myVideo.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
// Summary:
// The goFullscreen function toggles fullscreen mode for the video.
// If the video is not currently in fullscreen, it requests fullscreen mode.
// If the video is already in fullscreen, it exits fullscreen mode.
// The function accounts for different browser implementations of the fullscreen API.

  // 添加倍速播放功能
  const speed05xButton = document.querySelector("#speed-05x-btn");
  const speed1xButton = document.querySelector("#speed-1x-btn");
  const speed2xButton = document.querySelector("#speed-2x-btn");
// Summary:
// This part selects the buttons for changing the playback speed of the video.
// Buttons for 0.5x, 1x, and 2x playback speeds are selected.

  speed05xButton.addEventListener("click", function() {
    myVideo.playbackRate = 0.5;
  });

  speed1xButton.addEventListener("click", function() {
    myVideo.playbackRate = 1.0;
  });

  speed2xButton.addEventListener("click", function() {
    myVideo.playbackRate = 2.0;
  });
// Summary:
// Event listeners are added to the playback speed buttons to change the video playback speed.
// Clicking the 0.5x button sets the playback rate to 0.5.
// Clicking the 1x button sets the playback rate to 1.0 (normal speed).
// Clicking the 2x button sets the playback rate to 2.0.
// These buttons allow users to adjust the speed of video playback according to their preference.

});


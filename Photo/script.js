document.addEventListener("DOMContentLoaded", function() {
  // 选择 play-pause 按钮
  const playPauseButton = document.querySelector("#play-pause-btn");
  console.log(playPauseButton);

  // 添加点击事件监听器
  playPauseButton.addEventListener("click", togglePlayPause);

  // 选择 play-pause 图片
  const playPauseImg = document.querySelector("#play-pause-img");
  console.log(playPauseImg);

  // 选择视频元素
  const myVideo = document.querySelector("#custom-video-player");

  // 更新进度条
  myVideo.addEventListener("timeupdate", updateProgressBar);

  const progressBarFill = document.querySelector("#progress-bar-fill");
  console.log(progressBarFill);

  function togglePlayPause() {
    if (myVideo.paused || myVideo.ended) {
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
      myVideo.play();
    } else {
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
      myVideo.pause();
    }
  }

  function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    progressBarFill.style.width = progress + "%";
  }

  // 全屏按钮功能
  const fullscreenButton = document.querySelector("#fullscreen-button");
  console.log(fullscreenButton);

  fullscreenButton.addEventListener("click", goFullscreen);
  myVideo.addEventListener("dblclick", goFullscreen);

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

  // 添加倍速播放功能
  const speed05xButton = document.querySelector("#speed-05x-btn");
  const speed1xButton = document.querySelector("#speed-1x-btn");
  const speed2xButton = document.querySelector("#speed-2x-btn");

  speed05xButton.addEventListener("click", function() {
    myVideo.playbackRate = 0.5;
  });

  speed1xButton.addEventListener("click", function() {
    myVideo.playbackRate = 1.0;
  });

  speed2xButton.addEventListener("click", function() {
    myVideo.playbackRate = 2.0;
  });
});


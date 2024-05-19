document.addEventListener("DOMContentLoaded", function() {
  // 选择所有的图片容器
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach(container => {
    container.addEventListener("click", function() {
      container.classList.toggle("liked");
    });
  });
});

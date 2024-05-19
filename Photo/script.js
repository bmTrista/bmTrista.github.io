document.addEventListener("DOMContentLoaded", function() {
  // 选择所有的图片容器
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach(container => {
    container.addEventListener("click", function() {
      container.classList.toggle("liked");
    });
  });
});

// Summary:
// This JavaScript code adds interactivity to the image containers on the web page.
// When the DOM content is fully loaded, it selects all elements with the class "image-container".
// It then iterates over each container, adding a click event listener to toggle the "liked" class.
// When an image container is clicked, the "liked" class is toggled, allowing for visual changes such as adding a red heart icon.
// This functionality enhances user engagement by providing a responsive and interactive element to the images.








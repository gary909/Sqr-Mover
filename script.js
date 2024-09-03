const square = document.getElementById("square");
const moveSpeed = 10; // Speed of movement

document.addEventListener("keydown", function (event) {
  const rect = square.getBoundingClientRect();

  switch (event.key) {
    case "ArrowUp":
    case "w":
      if (rect.top > 0) {
        // Prevent moving outside the top boundary
        square.style.top = `${rect.top - moveSpeed}px`;
      }
      break;
    case "ArrowDown":
    case "s":
      if (rect.bottom < window.innerHeight) {
        // Prevent moving outside the bottom boundary
        square.style.top = `${rect.top + moveSpeed}px`;
      }
      break;
    case "ArrowLeft":
    case "a":
      if (rect.left > 0) {
        // Prevent moving outside the left boundary
        square.style.left = `${rect.left - moveSpeed}px`;
      }
      break;
    case "ArrowRight":
    case "d":
      if (rect.right < window.innerWidth) {
        // Prevent moving outside the right boundary
        square.style.left = `${rect.left + moveSpeed}px`;
      }
      break;
  }
});

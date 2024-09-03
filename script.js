document.addEventListener("DOMContentLoaded", () => {
  const square = document.getElementById("square");
  let position = { top: 50, left: 50 };
  const step = 10;

  function moveSquare(event) {
    switch (event.key) {
      case "w":
      case "ArrowUp":
        position.top -= step;
        break;
      case "a":
      case "ArrowLeft":
        position.left -= step;
        break;
      case "s":
      case "ArrowDown":
        position.top += step;
        break;
      case "d":
      case "ArrowRight":
        position.left += step;
        break;
    }

    square.style.top = position.top + "px";
    square.style.left = position.left + "px";
  }

  document.addEventListener("keydown", moveSquare);
});

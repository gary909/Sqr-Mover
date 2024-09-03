document.addEventListener("DOMContentLoaded", () => {
  const square = document.getElementById("square");
  const text = document.getElementById("text");

  let x = 0;
  let y = 0;

  // Function to center the square on the screen
  function centerSquare() {
    x = (window.innerWidth - square.offsetWidth) / 2;
    y = (window.innerHeight - square.offsetHeight) / 2;
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
  }

  // Function to randomize text position
  function randomizeTextPosition() {
    const textWidth = text.offsetWidth;
    const textHeight = text.offsetHeight;

    const maxX = window.innerWidth - textWidth;
    const maxY = window.innerHeight - textHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    text.style.position = "absolute";
    text.style.left = `${randomX}px`;
    text.style.top = `${randomY}px`;
  }

  // Function to split text into individual letters and animate them
  function animateTextFall() {
    const letters = text.textContent.split("");
    text.innerHTML = "";

    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`;
      text.appendChild(span);
    });
  }

  // Function to check for collision between the square and text
  function checkCollision() {
    const squareRect = square.getBoundingClientRect();
    const textRect = text.getBoundingClientRect();

    const overlap = !(
      squareRect.right < textRect.left ||
      squareRect.left > textRect.right ||
      squareRect.bottom < textRect.top ||
      squareRect.top > textRect.bottom
    );

    if (overlap) {
      animateTextFall();
    }
  }

  // Event listener to move the square with keyboard keys
  document.addEventListener("keydown", (event) => {
    const step = 5;

    switch (event.key) {
      case "ArrowUp":
      case "w":
        y = Math.max(y - step, 0); // Prevent moving out of bounds (top)
        break;
      case "ArrowDown":
      case "s":
        y = Math.min(y + step, window.innerHeight - square.offsetHeight); // Prevent moving out of bounds (bottom)
        break;
      case "ArrowLeft":
      case "a":
        x = Math.max(x - step, 0); // Prevent moving out of bounds (left)
        break;
      case "ArrowRight":
      case "d":
        x = Math.min(x + step, window.innerWidth - square.offsetWidth); // Prevent moving out of bounds (right)
        break;
    }

    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
    checkCollision();
  });

  // Center the square and randomize text position when the page loads
  centerSquare();
  randomizeTextPosition();
});

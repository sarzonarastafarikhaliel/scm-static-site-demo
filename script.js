/* eslint-env browser */
/* global module */

// Confetti animation colors
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

// Create and animate confetti
function startConfetti() {
  const container = document.createElement("div");
  container.id = "confetti-container";
  container.style.position = "fixed";
  container.style.top = 0;
  container.style.left = 0;
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  document.body.appendChild(container);

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.style.position = "absolute";
    piece.style.width = "10px";
    piece.style.height = "10px";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.top = `${Math.random() * window.innerHeight}px`;
    piece.style.left = `${Math.random() * window.innerWidth}px`;
    piece.style.opacity = 0.9;
    piece.style.borderRadius = "50%";
    piece.style.transition = "transform 3s ease-in-out";
    container.appendChild(piece);

    setTimeout(() => {
      piece.style.transform = `translateY(${window.innerHeight}px) rotate(${
        Math.random() * 720
      }deg)`;
      piece.style.opacity = 0;
    }, 50 + i * 10);
  }

  // Remove confetti after animation
  setTimeout(() => {
    container.remove();
  }, 4000);
}

// Run confetti when page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded successfully");
  startConfetti();
});

// Allow Jest testing in Node
if (typeof module !== "undefined" && module.exports) {
  module.exports = { startConfetti };
}

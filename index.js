// Your code here
// Get the dodger element
const dodger = document.getElementById('dodger');

// moveDodgerLeft function
function moveDodgerLeft() {
  const leftPosition = parseInt(dodger.style.left);
  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 4}px`;
  }
}

// moveDodgerRight function
function moveDodgerRight() {
  const leftPosition = parseInt(dodger.style.left);
  if (leftPosition < 360) {
    dodger.style.left = `${leftPosition + 4}px`;
  }
}

// Export functions if using Node.js/CommonJS
// module.exports = { moveDodgerLeft, moveDodgerRight };

// Export functions if using ES6 modules
// export { moveDodgerLeft, moveDodgerRight };

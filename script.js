// Create the grid
let containerWidth = 596;
let containerHeight = 596;
const container = document.querySelector('.container');
createGrid(16);

function createGrid(squares) {
  let squareWidth = containerWidth / squares;
  let squareHeight = containerHeight / squares;
  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      let div = document.createElement('div');
      div.classList.add('square');
      div.style.height = squareHeight + 'px';
      div.style.width = squareWidth + 'px';
      container.appendChild(div);
    }
  }

  // Add a listener to each square so that the background of each square
  // changes to black when the mouse first enters the square
  let squareArray = [...document.getElementsByClassName('square')];
  squareArray.forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.backgroundColor = '#000';
    });
  });
}

// Reset Button
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  // Changes all grid squares to white
  let squareArray = [...document.getElementsByClassName('square')];
  squareArray.forEach(item => item.style.backgroundColor = '#FFF');
});

// Resize Button
const resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => {
  // Brings a prompt for the user to enter a new grid size
  let newSquares = prompt('Enter new grid size (ie. 8 for 8x8 grid):');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(newSquares);
});
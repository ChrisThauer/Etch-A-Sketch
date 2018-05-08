// Create the grid
const squares = 16;
let containerWidth = 596;
let containerHeight = 596;
let squareWidth = containerWidth / squares;
let squareHeight = containerHeight / squares;
const container = document.querySelector('.container');
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
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
console.log(container);
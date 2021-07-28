const board = document.querySelector('#board');
const SQUARES_COUNT = 300;
const colors = [
  '#ffe925',
  '#63ff25',
  '#25ffa4',
  '#2583ff',
  '#7125ff',
  '#f12020',
];
for (let i = 0; i < SQUARES_COUNT; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });
}

function setColor(square) {
  let random = getRandomColor();
  square.style.backgroundColor = random;
  square.style.boxShadow = `0 0 12px ${random},0 0 12px ${random}`;
}

function removeColor(square) {
  square.style.background = 'rgb(73, 73, 73)';
  square.style.boxShadow = `0 0 2px rgb(73, 73, 73)`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

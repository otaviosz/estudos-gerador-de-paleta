const generateButton = document.querySelector('#generate-button');
const colorsDiv = document.querySelector('.colors');

function generateColors() {
  colorsDiv.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    console.log(color);
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    const colorName = document.createElement('p');
    colorName.innerText = color;
    colorDiv.appendChild(colorName);
    colorsDiv.appendChild(colorDiv);
  }
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

generateButton.addEventListener('click', generateColors);

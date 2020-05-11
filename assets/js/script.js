const colorDiv = document.querySelector('#color');
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

const redDivLabel = document.querySelector(".redDiv label");
const greenDivLabel = document.querySelector(".greenDiv label");
const blueDivLabel = document.querySelector(".blueDiv label");

function changeColor() {

  colorDiv.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;

  redDivLabel.textContent = red.value;
  greenDivLabel.textContent = green.value;
  blueDivLabel.textContent = blue.value;

  let hexRed = Number(red.value).toString(16);
  let hexGreen = Number(green.value).toString(16);
  let hexBlue = Number(blue.value).toString(16);

  if(hexRed.length == 1) {
    hexRed = "0" + hexRed;
  }
  if(hexGreen.length == 1) {
    hexGreen = "0" + hexGreen;
  }
  if(hexBlue.length == 1) {
    hexBlue = "0" + hexBlue;
  }

  colorDiv.textContent = `#${hexRed}${hexGreen}${hexBlue}`;

  if(Number(red.value) + Number(green.value) + Number(blue.value) < 380) {
    colorDiv.classList.add("dark");
  } else {
    colorDiv.classList.remove("dark");
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(colorDiv.textContent).then(() => {
    console.log(`Valor copiado: ${colorDiv.textContent}`);
  }).catch(error => {
    console.error(`Erro ao acessar área de transferência: ${JSON.stringify(error)}`);
  });
}

async function asyncCopyToClipboard() {
  try {
    await navigator.clipboard.writeText(colorDiv.textContent);
    console.log(`Valor copiado: ${colorDiv.textContent}`);    
  } catch (error) {
    console.error(`Erro ao acessar área de transferência: ${JSON.stringify(error)}`);
  }
}

colorDiv.addEventListener('click', asyncCopyToClipboard);

red.oninput = changeColor;
green.oninput = changeColor;
blue.oninput = changeColor;

changeColor();
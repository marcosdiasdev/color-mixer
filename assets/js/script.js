const box = document.querySelector("main div");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

function changeColor() {
  box.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  
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

  box.textContent = `#${hexRed}${hexGreen}${hexBlue}`;
}

function copyToClipboard() {
  navigator.clipboard.writeText(box.textContent).then(() => {
    console.log(`Copiado para a área de transferência: ${box.textContent}`)
  });
}

box.onclick = copyToClipboard;
red.onchange = changeColor;
green.onchange = changeColor;
blue.onchange = changeColor;

changeColor();
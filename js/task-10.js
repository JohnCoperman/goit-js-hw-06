function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const scriptTag = document.querySelector('body').lastElementChild;
const contrInput = document.querySelector('#controls').firstElementChild;
const makeDIVS = document.querySelector('button[data-create]');
const killDIVS = document.querySelector('button[data-destroy]');

function making(event) {
  let divs = '';
  for (let i = 0; i < Number(contrInput.value); i++) {
    divs = divs + `<div id="boxes" style ="width:${30 + 10*i}px; height:${30 + 10*i}px; background-color:${getRandomHexColor()}"}></div>`;
  }
  scriptTag.insertAdjacentHTML('beforebegin', divs);
}

function destroyBoxes(event) {
  const suicideBoxes = document.querySelectorAll('#boxes');

  suicideBoxes.forEach(box => box.remove());
}

makeDIVS.addEventListener("click", making.bind(makeDIVS));

killDIVS.addEventListener("click", destroyBoxes.bind(killDIVS));

//----------------------------TESTS---------------------------------
// makeDIVS.addEventListener("click", event => {
//   console.log(Number(event.currentTarget.parentNode.firstElementChild.value));
// });
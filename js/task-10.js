function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxOfBoxes = document.querySelector("#boxes");
const contrInput = document.querySelector("#controls").firstElementChild;
const makeDIVS = document.querySelector("button[data-create]");
const killDIVS = document.querySelector("button[data-destroy]");

function making(event) {
  let divs = "";
  for (let i = 0; i < Number(contrInput.value); i++) {
    divs =
      divs +
      `<div style ="width:${30 + 10 * i}px; height:${
        30 + 10 * i
      }px; background-color:${getRandomHexColor()}"}></div>`;
  }
  boxOfBoxes.insertAdjacentHTML("beforeend", divs);
}

// function making(event) {
//   let divs = [];

//   for (let i = 0; i < Number(contrInput.value); i++) {
//     let divEl = document.createElement("div");
//     divEl.style["backgroundColor"] = getRandomHexColor();
//     divEl.style["width"] = `${30 + 10 * i}px`;
//     divEl.style["height"] = `${30 + 10 * i}px`;
//     divEl.id = "boxes";
//     divs.push(divEl);
//   }
//   boxOfBoxes.append(...divs);
//   // document.querySelector(".container").append(...divs);
// }

function destroyBoxes(event) {
  const killContainer = document.querySelector("#boxes");
  killContainer.innerHTML = "";
}

makeDIVS.addEventListener("click", making.bind(makeDIVS));

killDIVS.addEventListener("click", destroyBoxes.bind(killDIVS));

//----------------------------TESTS---------------------------------
// makeDIVS.addEventListener("click", event => {
//   console.log(Number(event.currentTarget.parentNode.firstElementChild.value));
// });

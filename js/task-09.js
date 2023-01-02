function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyNode = document.querySelector("body");
const container = document.querySelector(".widget");
const divChilds = container.children;
// console.log(divChilds);

function painter(event) {
  bodyNode.style.backgroundColor = getRandomHexColor();
  divChilds[0].firstElementChild.textContent = getRandomHexColor();
}

divChilds[1].addEventListener("click", painter.bind(divChilds[1], event));


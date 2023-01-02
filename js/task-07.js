const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

span.style["font-size"];
input.addEventListener("mouseup", event => {
  span.style["font-size"] = `${input.value}px`;
});

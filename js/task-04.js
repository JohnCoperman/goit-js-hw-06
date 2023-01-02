const counterValue = document.querySelectorAll('button');

const number = document.querySelector('#value');

function changeValue(event) {
  let num = Number(number.textContent);
  if (this.dataset.action === "decrement") {
    num -= 1;
    return number.textContent = `${num}`;
  }
  if (this.dataset.action === "increment") {
    num += 1;
    return number.textContent = `${num}`;
  }
};

for (const btn of counterValue) {
  btn.addEventListener('click', changeValue.bind(btn, event))
}
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const arrLi = [];
for (const elem of ingredients) {
  const liElem = document.createElement('li');
  
  liElem.textContent = elem;
  liElem.classList.add('item');
  arrLi.push(liElem);
  // list.append(liElem);
  // console.log(liElem);
}
// console.log(arrLi);

list.prepend(...arrLi);
console.log(list);
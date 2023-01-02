const categoriesList = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesList.length);
console.log("");

// console.log(categoriesList);
// const test = categoriesList[0].firstChild; BAD
// const test = categoriesList[0].firstElementChild; WORKING! YAY
// console.log(test.textContent);

for (const elem of categoriesList) {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.childNodes.length);
  console.log("");
}
// ---------------------------TESTS--------------------------------
// const categoryTitles = document.querySelectorAll(".item");
// const titles = document.querySelectorAll("h2");
// for (const title in titles) {
//   if (Object.hasOwnProperty.call(titles, title)) {
//     const elem = titles[title];
//     console.log(elem.textContent);
//   }
// }

// console.log(item.querySelector("ul"));
// for (let i = 0; i < categoriesList.length; i++) {
//   const elem = categoriesList[i];
//   const secondUl = elem.lastChild;
//   console.log('Category:', elem.firstChild.textContent);
//   console.log('Elements:', secondUl.childNodes.length);

// }

// for (let j = 0; j < categoriesList.length; j++) {
//   const elem = categoriesList[j];
//   console.log(elem.firstChild.textContent);
// }

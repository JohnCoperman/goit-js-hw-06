const loginForm = document.querySelector(".login-form");

function emitter(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Complete all fields!");
  }

  console.log({ [email.name]: email.value, [password.name]: password.value });
  event.currentTarget.reset();
}

loginForm.addEventListener("submit", emitter.bind(loginForm));

// ---------------------------TESTS--------------------------------
// loginForm.addEventListener('submit', event => {
//       event.preventDefault();
//       alert('GERONIMO')
//       const { elements: { email, password } } = event.currentTarget;
//       console.log(email.value, password);
//     }
//   );

// loginForm.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(event.currentTarget);
// });
//------------------------------------------------------------------

// let lambda = 13;

// const third = Math.floor(lambda / 3);
// let minStr = "";

// switch (lambda - 3 * third) {
//   case 0:
//     for (let i = 0; i < third; i++) {
//       minStr = minStr + 3;
//     }
//     break;

//   case 2:
//     for (let i = 0; i < third; i++) {
//       minStr = minStr + 3;
//     }
//     minStr = minStr + 2;
//     break;

//   case 1:
//     for (let i = 0; i < third - 1; i++) {
//       minStr = minStr + 3;
//     }
//     minStr = minStr + 2 + 2;
//     break;
// }

// let splitting = [minStr];
// let continStr = "";
// while (minStr.includes("33")) {
//   continStr = minStr.replace("33", "222");
//   splitting.push(continStr);
// }
// let string = "76335733";
// string.replace("33", "222");
// console.log(string);
// minStr.split('');
// console.log(splitting);

// splitting.push();

// splitSized.push(elem)
// console.log(threes);

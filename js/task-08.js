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
//--------------------------------------------------------------------------------------------

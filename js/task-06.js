const input = document.querySelector('#validation-input');

function validation(event) {
  // console.log(this.dataset.length);
  if (this.value === '') {
    this.className = '';
    return;
  };

  if (this.value.length === Number(this.dataset.length)) {

    // this.classList.add('valid'); ------------also work...IT VERY STRANGE...
    this.classList.replace('invalid', 'valid');
    this.classList.add('valid');
    return;
    // console.log(this.value.length);
  }
    else {
      //----------------------------------------------------SAME
      this.classList.replace('valid', 'invalid');
      this.classList.add('invalid');
      return;
    }
  // if (this.value.length !== this.dataset.length && this.value.length !== 0) {
  //   this.classList.remove('valid');
  //   // this.classList.replace('valid','invalid');
  //   // input.classList.toggle();
  //   return;
  // }
  
};

// 
input.addEventListener('blur', validation.bind(input, event));
const inp = document.querySelector('#name-input');
const spanInp = document.querySelector('#name-output');
function inserter(event) {
  if (this.value === '') {
    return spanInp.textContent = 'Anonymous';
   ;
  }
  if (this.value !== '') {
    return spanInp.textContent = this.value;
    
  }
}

inp.addEventListener('input', inserter.bind(inp, event));
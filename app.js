const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg= document.querySelector('.msg');
const userlist = document.querySelector('#users');
 
myForm.addEventListener('submit',onSubmit);

  function onSubmit(e) {
    e.preventDefault();
   if(nameInput.value === '' || emailInput.value === ''){
    msg.innerHTML = 'Please enter a feild';
    setTimeout(()=>msg.remove(),3000);
   }
   else{
    localStorage.setItem('userName', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    nameInput.value='';
    emailInput.value='';
   }
  }
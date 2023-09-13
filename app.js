const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numbInput = document.querySelector('#num');
const msg= document.querySelector('.msg');
const userlist = document.querySelector('#users');
 
myForm.addEventListener('submit',onSubmit);

  function onSubmit(e) {
    e.preventDefault();
   if(nameInput.value === '' || emailInput.value === '' || numbInput===''){
    msg.innerHTML = 'Please enter a feild';
    setTimeout(()=>msg.remove(),3000);
   }
   else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${numbInput.value}`));
    userlist.append(li);
     let myObj ={
      name : nameInput.value,
      email : emailInput.value,
      number : numbInput.value

    }
    let myObj_ser = JSON.stringify(myObj);
    localStorage.setItem(email.value, myObj_ser);
    nameInput.value='';
    emailInput.value='';
    

   }
  }
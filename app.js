const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numbInput = document.querySelector('#num');
const msg= document.querySelector('.msg');
const userlist = document.querySelector('#users');
 
myForm.addEventListener('submit',onSubmit);
userlist.addEventListener('click', onRemove);
userlist.addEventListener('click', onedit);
  function onSubmit(e) {
    e.preventDefault();
   if(nameInput.value === '' || emailInput.value === '' || numbInput===''){
    msg.innerHTML = 'Please enter a feild';
    setTimeout(()=>msg.remove(),3000);
   }
   else{
    // Create a unique ID for the list item
    const itemId = new Date().getTime();
    //console.log(itemId);
    const li = document.createElement('li');
    li.setAttribute('data-myObj_ser-id', itemId);
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${numbInput.value}`));
    
    var dlt = document.createElement('button');
    dlt.className= 'dlt';
     dlt.appendChild(document.createTextNode('delete'));
     li.append(dlt);

     var edit = document.createElement('button');
    edit.className= 'edt';
     edit.appendChild(document.createTextNode('edit'));
     li.append(edit);


     userlist.append(li);
          let myObj ={
      name : nameInput.value,
      email : emailInput.value,
      number : numbInput.value

    }
    let myObj_ser = JSON.stringify(myObj);
    localStorage.setItem(itemId.toString(), myObj_ser);
    nameInput.value='';
    emailInput.value='';
    numbInput.value='';

   }
  }

  function onRemove(e){
    if(e.target.classList.contains('dlt')){
      if(confirm("are u dlt?")){
        var li = e.target.parentElement;
        userlist.removeChild(li);
        const itemId = li.getAttribute('data-myObj_ser-id');
        localStorage.removeItem(itemId); 
        
      }
    }
  }

  function onedit(e) {
    if (e.target.classList.contains('edt')) {
       var li = e.target.parentElement;
       let editobjkey = li.getAttribute('data-myObj_ser-id'); 
       let obj = JSON.parse(localStorage.getItem(editobjkey)); 
       document.getElementById('name').value = obj.name;
       document.getElementById('email').value = obj.email;
       document.getElementById('num').value = obj.number;
       var li = e.target.parentElement;
        userlist.removeChild(li);

        localStorage.removeItem(editobjkey); 
        console.log(obj);
    }
 }
 
const li = document.createElement('li');
const text2=document.createTextNode('Kiwi');


const button=document.createElement('button')
button.className='remove-item btn-link text-red';


const i=document.createElement('i');
i.className='fa-solid fa-xmark';

button.appendChild(i);
li.appendChild(text2);
li.appendChild(button);
document.querySelector('ul').appendChild(li);
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



// refactor with many functions

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItem('Cheese');
createNewItem('Sauce');
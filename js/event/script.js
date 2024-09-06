// event listeners

const clearBtn= document.querySelector('#clear');
const listItems= document.querySelectorAll('li');

function onClear(){
  listItems.forEach((el, index)=>el.remove());
}
// js event
// clearBtn.onclick= function(){
//     alert('clear item');
// }

//clearBtn.addEventListener('click', ()=> console.log('clear item'));
clearBtn.addEventListener('click', onClear);

//setTimeout(()=> clearBtn.removeEventListener('click', onClear),5000);
//setTimeout(()=> clearBtn.click(), 5000)

// mouse event

const logo = document.querySelector('img');

const onClick =() => console.log('click event');
const onDoubleClick =()=>{
    document.body.style.backgroundColor='black';
}
const onRightClick=()=>console.log('right click event');
const onMouseDown=()=>console.log('mouse down');
const onMouseUp=()=>console.log('mouse up');
const onMouseWheel=()=>console.log('mouse wheel');
const onMouseOver=()=>console.log('mouse over');
const onMouseOut=()=>console.log('mouse out');
const onDragStart=()=>console.log('drag start');
const onDrag=()=>console.log('drag');
const onDragEnd=()=>console.log('drag end');


logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);

// right click 

logo.addEventListener('contextmenu', onRightClick)

logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);


// input events



const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
  console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}

function onBlur() {
  console.log('Input is not focused');
  itemInput.style.outlineStyle = 'none';
}

// input, change, focus and blur events
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

//form submission
const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  // Get value with .value
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

// Using the FormData Object
function onSubmit2(e) {
  e.preventDefault(); // for to dont submit in the same page if there is no action

  const formData = new FormData(form);

  // Get individual items
  const item = formData.get('item');
  const priority = formData.get('priority');

  console.log(item, priority);

  // Get al entried as an Iterator
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);

// Event building
const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
 form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked');
});


// even delegation

 listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Add an event listener on all items
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// Add a single event listener on the parent (Event Delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
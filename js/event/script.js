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
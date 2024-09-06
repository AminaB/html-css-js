const itemForm= document.getElementById('item-form');
const itemInput= document.getElementById('item-input');
const itemList= document.getElementById('item-list');
const clearButton= document.getElementById('clear');

const newItem=itemInput.value;
function addItem(e){
    e.preventDefault();

    if(newItem===''){
        alert('please add an item');
        return;
    }
    const li =document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button=createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
    itemInput=value;
   
}


function createButton(classes){
    const button=document.createElement('button');
    button.className=classes;
    const icon=createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createIcon(classes){
    const icon=document.createElement('i');
    icon.className=classes;
    return icon;
}

itemForm.addEventListener('submit', addItem)

// remove item

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){

        e.target.parentElement.parentElement.remove();

    }

}

itemList.addEventListener('click', removeItem);


//clear all item

function removeItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}
clearButton.addEventListener('click', removeItems);
const itemForm= document.getElementById('item-form');
const itemInput= document.getElementById('item-input');
const itemList= document.getElementById('item-list');
const clearButton= document.getElementById('clear');
const itemFilter= document.getElementById('filter');


const newItem=itemInput.value;
function addItem(e){
    e.preventDefault();

    addItemToDom(newItem);

    // add item to local storage
    addItemToStorage(newItem)
    checkUI();
    itemInput.value='';
   
}
function addItemToDom(newItem){
  if(newItem===''){
        alert('please add an item');
        return;
    }
    const li =document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button=createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
}

function addItemToStorage(item){
    const itemsFromStorage=getItemFromStorage();
    
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
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


// remove item

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
            checkUI();
        }
    }

}



//clear all item

function removeItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

// clear UI
function checkUI(){
    const items = itemList.querySelectorAll('li');

        console.log(items.length)

    if(items.length===0){

        clearButton.style.display='none';
        itemFilter.style.display='none';
    }else{
        clearButton.style.display='block';
        itemFilter.style.display='block';
    }
}



// filter 
function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    items.forEach(item=>{
        const itemName=item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!=-1){
            item.style.display='flex';
        }else{
             item.style.display='none';
        }
    });
}



// getItemFromStorage
function getItemFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('items')== null){
        itemsFromStorage=[];
    
    }else{
        itemsFromStorage=JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function displayItems(){
    const itemsFromStorage=getItemFromStorage();
    itemsFromStorage.forEach((item)=> addItemToDom(item));
    checkUI();
}


function init(){
    itemForm.addEventListener('submit', addItem)
    itemList.addEventListener('click', removeItem);
    clearButton.addEventListener('click', removeItems);
    itemFilter.addEventListener('input', filterItems)
    document.addEventListener('DOMContentLoaded', displayItems);
    checkUI();
}

init();

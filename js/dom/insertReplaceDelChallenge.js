function insertAfter(newEl, existingEL){
    existingEL.parentElement.insertBefore(newEl, existingEL.nextSibling);
}

const li = document.createElement('li');
li.textContent='Insert Me After';

const firstItem= document.querySelector('li:first-child');

insertAfter(li, firstItem);


//replace element

function replaceFirstItem(){
    const firstItem= document.querySelector('li:first-child');

    const li =document .querySelector('li');
     li.textContent='Replaced first';
     firstItem.replaceWith(li);
    
}

function replaceSecondItem(){
    const secondItem= document.querySelector('li:nth-child(2)');

    // const li =document .querySelector('li');
    //  li.textContent='Replaced Second';
    //  secondItem.replaceWith(li);
    secondItem.outerHTML='<li>Second Item <li/>'
    
}

function replaceAllItems(){
    const list= document.querySelectorAll('li');
    list.forEach((element,index )=> {
        //element.outerHTML='<li>Replace li</li>';
        element.innerHTML='Replace All';
    });
}

function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1= document.querySelector('header h1');

    const h2=document.createElement('h2');
    h2.id='app-title';
    h2.textContent= 'Shopping List';
    header.replaceChild(h2,h1);
}


// remove element

function removeClearButton(){
    document.querySelector('#clear').remove();
}

function removeFirstItem(){
    const ul=document.querySelector('ul');
    const li =document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber){
    const ul=document.querySelector('ul');
    //const li =document.querySelector(`li:nth-child(${itemNumber})`);
    const li =document.querySelectorAll(`li`)[itemNumber];
    ul.removeChild(li);
}
removeItem(1);
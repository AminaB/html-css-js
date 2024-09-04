function insertAfter(newEl, existingEL){
    existingEL.parentElement.insertBefore(newEl, existingEL.nextSibling);
}

const li = document.createElement('li');
li.textContent='Insert Me After';

const firstItem= document.querySelector('li:first-child');

insertAfter(li, firstItem);
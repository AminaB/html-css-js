let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = 'new-id';

// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);


// html selector
const listItemp = document.querySelectorAll('.item');
const listItems= Array.from(listItemp);

const listItems3= document.getElementsByTagName('li');


// child and parent element

const parent = document.querySelector('.parent');
let output2= parent.children[1].innerText;
parent.firstElementChild.innerText='child one';

const child = document.querySelector('.child');
parent= child.parentElement;
child.parentElement.style.border='1px solid #ccc';

//sibbling element
const secondItem= document.querySelector('.cild:nth-child(2)');
output= secondItem.nextElementSibling;

//nodes
output= parent.childNodes[3];  //parentNode, parentElement, nextElementSibbling,

//create Element, and append
const div=document.createElement('div');
div.className='my-element';
div.id='my-element';
div.setAttribute('title','MY element');
//div.innerText='Hello World';
const text=document.createTextNode('Hello world')
div.appendChild(text);
document.body.appendChild(div);
document.querySelector('ul').appendChild(div);



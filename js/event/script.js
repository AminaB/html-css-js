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
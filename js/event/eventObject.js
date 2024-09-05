const logo = document.querySelector('img');
logo.addEventListener('click', onClick);

function onClick(e) {
  //Event properties
  console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(e.type);
//   console.log(e.timeStamp);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.pageX);
//   console.log(e.pageY);
//   console.log(e.screenX);
//   console.log(e.screenY);

  e.target.style.backgroundColor='purple'
}

document.body.addEventListener('click', (e)=>{
    console.log(e.target);
    console.log(e.currentTarget);
})
const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  console.log(e.key);
//   if(e.key=='Enter'){
//     alert('your press enter');
//   }

    // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }
  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }
   // repeat
  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

    // shiftKey, ctrlKey & altKey
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }

};

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);


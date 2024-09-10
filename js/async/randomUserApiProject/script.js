function fetchUser(){
  showSpinner();
  fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data=> {
        hideSpinner();
        disPlayUser(data.results[0])

      });
}

function disPlayUser(user){
  const userEl=document.getElementById('user');
  if(user.geder==='male'){
    document.body.style.backgroundColor='blue';
  }else{
    document.body.style.backgroundColor='purple';
  }
  userEl.innerHTML=`<div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>`;
  console.log(user.name)
}
function generateUser(){
  const button=document.querySelector('#generate');
  button.addEventListener('click',fetchUser);
}
function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}
fetchUser();
generateUser();

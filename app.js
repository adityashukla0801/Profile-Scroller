const data = [
  {
    name: 'Suyash Mishra',
    age: '32',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Bostan MA',
    image: './img/suy.jpeg',
  },
  {
    name: 'Jen Smith',
    age: '26',
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Miami FL',
    image: './img/ayushi.jpeg',
  },
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/adi.jpeg',
  },
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/anjali.jpeg',
  },
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/san.jpeg',
  },
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/shivangi.jpeg',
  },
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/dipss.jpeg',
  },
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/anushka.jpeg',
  },
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/kk.jpeg',
  },
  
  {
    name: 'William smith',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: './img/akash.jpeg',
  },
]

const profiles = profileIterator(data)

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile)

function nextProfile(){
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){
  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender}
  <br>  Looking For: ${currentProfile.lookingfor}</li>
  </ul>`

  document.getElementById('imageDisplay').innerHTML = `<div style="height:300px;width:300px; border-radius:50%; overflow:hidden; margin:auto;"> <img src=${currentProfile.image} 
  style=
    "width:300px;"
    alt="" /></div>`
  }else{
    window.location.reload()
  }
}


function profileIterator(profiles){
  let nextIndex = 0
  return{
    next: function(){
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false }:
      { done: true }
    }
  }
}

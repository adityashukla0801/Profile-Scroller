const data = [
  {
    name: 'Suyash Mishra',
    age: '21',
    gender: 'Male',
    post: 'Senior Developer',
    location: 'Kanpur',
    image: './img/suy.jpeg',
  },
  {
    name: 'Ayushi Singh',
    age: '26',
    gender: 'Female',
    post: 'Team Leader',
    location: 'Mumbai',
    image: './img/ayushi.jpeg',
  },
  {
    name: 'Aditya Shukla',
    age: '22',
    gender: 'Male',
    post: 'Software Engineer',
    location: 'Delhi',
    image: './img/adi.jpeg',
  },
  {
    name: 'Anjali Dubey',
    age: '21',
    gender: 'Female',
    post: 'HR Manager',
    location: 'Lynn MA',
    image: './img/anjali.jpeg',
  },
  {
    name: 'Sankalp Mishra',
    age: '28',
    gender: 'Male',
    post: 'Technical Lead',
    location: 'Noida',
    image: './img/san.jpeg',
  },
  {
    name: 'Shivangi Sonker',
    age: '24',
    gender: 'Female',
    post: 'Sales Executive',
    location: 'Pune',
    image: './img/shivangi.jpeg',
  },
  {
    name: 'Dipanshu Prajapati',
    age: '23',
    gender: 'Male',
    post: 'UI/UX Engineer',
    location: 'Kerla',
    image: './img/dipss.jpeg',
  },
  {
    name: 'Anushka Tiwari',
    age: '27',
    gender: 'Female',
    post: 'Marketing Manager',
    location: 'Shimla',
    image: './img/anushka.jpeg',
  },
  {
    name: 'Krishna Sharma',
    age: '21',
    gender: 'Male',
    post: 'Technical Advisor',
    location: 'Lucknow',
    image: './img/kk.jpeg',
  },
  
  {
    name: 'Akash Prajapati',
    age: '19',
    gender: 'Male',
    post: 'Intern',
    location: 'Delhi',
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
  <li class="list-group-item">Gender: ${currentProfile.gender}</li>
  <li class="list-group-item">Post: ${currentProfile.post}</li>
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

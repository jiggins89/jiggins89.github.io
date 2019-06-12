let images = [
  {name: 'My Dressmaker', imageSrc: '/images/my-dressmaker.png'},
  {name: 'My Scooter', imageSrc: '/images/my-scooter.png'},
  {name: 'JS Piano', imageSrc: '/images/piano.png'}
]

const row = document.querySelector('.row');
// const docFrag = document.createDocumentFragment();

images.forEach(function(image) {
  let a = document.createElement('a');
  let img = document.createElement('img');
  img.src = image.imageSrc;
  img.className = 'project-img';
  console.log(img);
  console.log(a);
  a.innerHTML = img;
  row.appendChild(a);
});

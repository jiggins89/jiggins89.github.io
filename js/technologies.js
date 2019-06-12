let images = [
  {name: 'Rails', imageSrc: '/images/rails.png'},
  {name: 'React', imageSrc: '/images/react.png'},
  {name: 'JavaScript', imageSrc: '/images/js.png'}
]

const row = document.querySelector('.row');
// const docFrag = document.createDocumentFragment();

images.forEach(function(image) {
  // console.log(img.imageSrc);
  var img = document.createElement('img');
  img.src = image.imageSrc;
  img.className = 'project-img';
  row.appendChild(img);
});

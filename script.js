var button = document.querySelector('header > section > button');

var form = document.querySelector('.Filters');
button.addEventListener('click', function() {
  console.log("mogge");
  form.classList.toggle('block');
});

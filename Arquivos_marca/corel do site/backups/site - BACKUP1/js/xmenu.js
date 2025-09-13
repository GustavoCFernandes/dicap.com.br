function changeImage() {
  var image = document.getElementById('myImg');
  if (document.getElementById('check').checked) {
    image.src = 'images/x.svg';
  } else {
    image.src = 'images/menu.svg';
  }
}
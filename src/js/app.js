//* Scroll Hide NavBar */
let mainLocation = window.pageXOffset;
let $nav = document.querySelector('.header-content');

window.addEventListener('scroll', function () {
  let currentLocation = this.window.pageYOffset;
  // console.log(currentLocation);
  if (mainLocation >= currentLocation) {
    $nav.style.top = '0';
  } else {
    $nav.style.top = '-70rem';
  }

  mainLocation = currentLocation;
});

//* TagCanvas */
window.onload = function () {
  try {
    TagCanvas.textColour = '#000';
    // TagCanvas.outlineColour = 'transparent';
    TagCanvas.maxSpeed = .1;
    TagCanvas.outlineColour = 'transparent';
    TagCanvas.radiusX = 1;
    TagCanvas.radiusY = 1;
    TagCanvas.radiusZ = 1;
    TagCanvas.wheelZoom = false;
    TagCanvas.textHeight = 20;
    TagCanvas.reverse = true;
    // TagCanvas.shadow = '#000';
    // TagCanvas.shadowBlur = 20;
    // TagCanvas.shadowOffset = [3, 3];
    TagCanvas.shuffleTags = true;
    TagCanvas.txtOpt = true;
    TagCanvas.Start('myCanvas');
  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};

//* Parallax Intro Section */
// let introText = document.getElementById('intro-text');
// let introTitle = document.getElementById('intro-section');
// let introImage = document.getElementById('intro-image');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  // introText.style.paddingLeft = value * 3 + 'px';
  // introTitle.style.paddingLeft = value * 3 + 'px';
  // introImage.style.paddingRight = value * 3 + 'px';
})
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

//* 3D Effect Image Projects Section */
const el1 = document.getElementsByClassName('project')[0];
const height = el1.clientHeight;
const width = el1.clientWidth;
let yRotation = 0, xRotation = 0, string1 = '';
let  string2 = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
    `
el1.addEventListener('mousemove', (evt) => {

  const {layerX, layerY} = evt;

  yRotation1 = (
    (layerX - width / 2) / width
  ) * 20;

  xRotation1 = (
    (layerY - height / 2) / height
  ) * 20;

  string1 = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation1}deg)
        rotateY(${yRotation1}deg)
    `

  el1.style.transform = string1;
});

el1.addEventListener('mouseout', () => {


  
  el1.style.transform = string2;
});

const el2 = document.getElementsByClassName('project')[1];
el2.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt;

    yRotation1 = (
        (layerX - width / 2) / width
    ) * 20;

    xRotation1 = (
        (layerY - height / 2) / height
    ) * 20;

    string1 = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation1}deg)
        rotateY(${yRotation1}deg)
    `

    el2.style.transform = string1;
});

el2.addEventListener('mouseout', () => {
    el2.style.transform = string2;
});

const el3 = document.getElementsByClassName('project')[2];
el3.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt;

    yRotation1 = (
        (layerX - width / 2) / width
    ) * 20;

    xRotation1 = (
        (layerY - height / 2) / height
    ) * 20;

    string1 = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation1}deg)
        rotateY(${yRotation1}deg)
    `

    el3.style.transform = string1;
});

el3.addEventListener('mouseout', () => {
    el3.style.transform = string2;
});
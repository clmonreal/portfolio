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

//#================================//
//#        SKILLS SECTION        //
//#================================//

//* TagCanvas */
window.onload = function () {
  try {
    TagCanvas.textColour = '#000';
    TagCanvas.maxSpeed = .1;
    TagCanvas.outlineColour = 'transparent';
    TagCanvas.radiusX = 1;
    TagCanvas.radiusY = 1;
    TagCanvas.radiusZ = 1;
    TagCanvas.wheelZoom = false;
    TagCanvas.textHeight = 20;
    TagCanvas.reverse = true;
    TagCanvas.shuffleTags = true;
    TagCanvas.txtOpt = true;
    TagCanvas.activeCursor = 'default';
    TagCanvas.initial = [.05, -.1];
    TagCanvas.Start('myCanvas');
  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};

//#================================//
//#        PROJECTS SECTION        //
//#================================//

//* 3D Effect Image Projects Section */
const el1 = document.getElementsByClassName('img')[0];
const height = el1.clientHeight;
const width = el1.clientWidth;
let yRotation = 0, xRotation = 0, string1 = '';
let string2 = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
    `
el1.addEventListener('mousemove', (evt) => {

  const { layerX, layerY } = evt;

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

const el2 = document.getElementsByClassName('img')[1];
el2.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;

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

const el3 = document.getElementsByClassName('img')[2];
el3.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;

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

//#================================//
//#         SCROLL REVEAL          //
//#================================//

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.intro-section h3', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.intro-section h1, .intro-section img', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.intro-section .media-icons i', { delay: 400, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.about-section h3', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about-section p', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.projects-section .first-horizontal-line', { delay: 300, origin: 'left', distance: '300px', duration: 2000 });
ScrollReveal().reveal('.projects-section .second-horizontal-line', { delay: 300, origin: 'right', distance: '300px', duration: 2000 });
ScrollReveal().reveal('.projects-section .project, .projects-section p', { delay: 500, origin: 'bottom', interval: 400 });
ScrollReveal().reveal('.projects-container .container-button, .skills-description', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.skills-container .experience h2', { delay: 500, origin: 'left', reset: false });
ScrollReveal().reveal('.skills-container .skills h2', { delay: 500, origin: 'right', reset: false });
ScrollReveal().reveal('.skills-container .vertical-divider', { delay: 700, origin: 'bottom', distance: '300px', reset: false });
ScrollReveal().reveal('.experience-container .graphic-view, .skills-description h2', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.experience-container .description', { delay: 600, origin: 'right' });
ScrollReveal().reveal('#myCanvasContainer', { delay: 1000, distance: '0' });
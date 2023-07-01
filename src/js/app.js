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
//#          SKILLS SECTION        //
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
    TagCanvas.textHeight = 15;
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
//#   SCROLL REVEAL ALL SECTIONS   //
//#================================//

if (window.innerWidth > 768) {
  ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 200
  });

  ScrollReveal().reveal('.intro-section h3, .intro-contact-container, .projects-section .project', { origin: 'left', once: true });
  ScrollReveal().reveal('.intro-section h1, .intro-section img, .contact-form, .projects-section .project-description', { origin: 'right', once: true });
  ScrollReveal().reveal('.media-icons i', { origin: 'bottom', interval: 200, once: true });
  ScrollReveal().reveal('.thanks-container h2, .thanks-container p, .thanks-button-container, .logo-contact-image', { origin: 'bottom', interval: 200, once: true });
  ScrollReveal().reveal('.about-section h3', { origin: 'right', once: true });
  ScrollReveal().reveal('.about-section .about-container-first-text', { origin: 'left', once: true });
  ScrollReveal().reveal('.projects-section .first-horizontal-line', { origin: 'left', distance: '300px', duration: 2000, once: true });
  ScrollReveal().reveal('.projects-section .second-horizontal-line', { origin: 'right', distance: '300px', duration: 2000, once: true });
  ScrollReveal().reveal('.projects-container .container-button, .skills-description', { origin: 'bottom', once: true });
  ScrollReveal().reveal('.skills-container .experience h2', { origin: 'left', reset: false, once: true });
  ScrollReveal().reveal('.skills-container .skills h2', { origin: 'right', reset: false, once: true });
  ScrollReveal().reveal('.experience-container .graphic-view, .skills-description h2', { origin: 'left', once: true });
  ScrollReveal().reveal('.experience-container .description', { origin: 'right', once: true });
  ScrollReveal().reveal('#myCanvasContainer, .about-section .CV-elements, .experience-section .experience-horizontal-divider', { distance: '0', once: true });
  ScrollReveal().reveal('.projects-container h2, .experience-section h2', { origin: 'bottom', once: true });
}

//#================================//
//#         CONTACT SECTION        //
//#================================//
const $form = document.querySelector('.contact-form');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    header: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    const newElement = document.createElement("p");
    newElement.classList.add("popup-message");
    newElement.textContent = "The message has been sent successfully!";
    document.querySelector(".contact-form").appendChild(newElement);
    $form.reset();

    setTimeout(function () {
      newElement.remove();
    }, 4000);
  }
}

//#================================//
//#          FOOTER SECTION        //
//#================================//
document.getElementById('logo-container').addEventListener('click', scrollUp);

//#================================//
//#          FOOTER SECTION        //
//#================================//
let yearElement = document.getElementById('year');
let currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

//#================================//
//#          ARROW SECTION         //
//#================================//
//* Scroll Up
document.getElementById('arrow-container').addEventListener('click', scrollUp);

function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}

//* Scale Scroll Arrow 
let arrowUp = document.getElementById('arrow-container');

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 600) {
    arrowUp.style.transform = 'scale(1)';
  } else {
    arrowUp.style.transform = 'scale(0)';
  }
};

//#================================//
//#   WINDOW CHANGE FOCUS EFFECT   //
//#================================//
let previousTitle = document.title;
window.addEventListener('blur', () => {
  previousTitle = document.title;
  document.title = 'Don\'t go, come back please! 😃';
});

window.addEventListener('focus', () => {
  document.title = previousTitle;
});
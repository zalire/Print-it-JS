const slides = [
  {
    "image":"slide1.jpg",
    "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image":"slide2.jpg",
    "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image":"slide3.jpg",
    "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image":"slide4.png",
    "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  }
];


const arrowLeft  = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

const dotsContainer = document.querySelector('.dots');
const totalSlides   = slides.length;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('dot_selected');
  dotsContainer.appendChild(dot);
}

let currentIndex = 0;
const bannerImg   = document.querySelector('.banner-img');
const bannerText  = document.querySelector('#banner p');
const dots        = document.querySelectorAll('.dot');

arrowRight.addEventListener('click', () => {
  dots[currentIndex].classList.remove('dot_selected');

  if (currentIndex === totalSlides - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }

  bannerImg.src       = `./assets/images/slideshow/${ slides[currentIndex].image }`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  dots[currentIndex].classList.add('dot_selected');
});

arrowLeft.addEventListener('click', () => {
  dots[currentIndex].classList.remove('dot_selected');

  if (currentIndex === 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = currentIndex - 1;
  }

  bannerImg.src       = `./assets/images/slideshow/${ slides[currentIndex].image }`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  dots[currentIndex].classList.add('dot_selected');
});

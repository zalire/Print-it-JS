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

// 1. Récupérer les flèches
const arrowLeft  = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// 2. Générer les bullet points (étape 3)
const dotsContainer = document.querySelector('.dots');
const totalSlides   = slides.length;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('dot_selected');
  dot.setAttribute('data-index', i);
  dotsContainer.appendChild(dot);
}

// 3. Préparer les variables pour le carrousel
let currentIndex = 0;                             // On démarre sur la slide 0
const bannerImg   = document.querySelector('.banner-img');
const bannerText  = document.querySelector('#banner p');
const dots        = document.querySelectorAll('.dot');

// 4. Listener pour la flèche droite, avec boucle infinie
arrowRight.addEventListener('click', () => {
  // Retirer le dot_selected actuel
  dots[currentIndex].classList.remove('dot_selected');

  // Si on est sur la dernière slide, on revient à la première, sinon on incrémente
  if (currentIndex === totalSlides - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }

  // Mettre à jour l'image et le texte
  bannerImg.src       = `./assets/images/slideshow/${ slides[currentIndex].image }`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  // Ajouter dot_selected au nouveau bullet
  dots[currentIndex].classList.add('dot_selected');
});

// 5. Listener pour la flèche gauche, avec boucle infinie
arrowLeft.addEventListener('click', () => {
  // Retirer le dot_selected actuel
  dots[currentIndex].classList.remove('dot_selected');

  // Si on est sur la première slide, on passe à la dernière, sinon on décrémente
  if (currentIndex === 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = currentIndex - 1;
  }

  // Mettre à jour l'image et le texte
  bannerImg.src       = `./assets/images/slideshow/${ slides[currentIndex].image }`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  // Ajouter dot_selected au nouveau bullet
  dots[currentIndex].classList.add('dot_selected');
});

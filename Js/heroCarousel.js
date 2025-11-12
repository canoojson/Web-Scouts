// Hero background carousel
let currentIndex = 0;

// Lista de imágenes del hero
const images = [
  'img/imagen1.jpg',
  'img/imagen2.jpg',
  'img/imagen3.jpg'
];

const intervalTime = 5000; // Cambia cada 5 segundos
let intervalId;

function showHeroImage(index) {
  const hero = document.getElementById('hero');
  currentIndex = (index + images.length) % images.length;
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function changeHeroImage(delta) {
  clearInterval(intervalId);
  showHeroImage(currentIndex + delta);
  startHeroInterval();
}

function startHeroInterval() {
  intervalId = setInterval(() => {
    changeHeroImage(1);
  }, intervalTime);
}

// Iniciar el carrusel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  showHeroImage(currentIndex);
  startHeroInterval();
});

// Control con flechas del teclado (opcional)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') changeHeroImage(-1);
  else if (event.key === 'ArrowRight') changeHeroImage(1);
});

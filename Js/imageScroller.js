let currentIndex = 0;
const images = ['img/imagen1.jpg', 'img/imagen2.jpg', 'img/imagen3.jpg']; // Agrega las rutas de tus imágenes
const intervalTime = 4000; // Cambia la imagen cada 4 segundos
let intervalId;

function showImage(index) {
    const mainImage = document.getElementById('mainImage');
    currentIndex = (index + images.length) % images.length; // Manejo de índices negativos y desbordamiento
    mainImage.src = images[currentIndex];
}

function changeImage(delta) {
    clearInterval(intervalId); // Detener el intervalo actual
    showImage(currentIndex + delta);
    startInterval(); // Iniciar un nuevo intervalo
}

function startInterval() {
    intervalId = setInterval(() => {
        changeImage(1);
    }, intervalTime);
}

// Mostrar la primera imagen al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    startInterval(); // Iniciar el intervalo al cargar la página
});

// Detectar las flechas izquierda y derecha
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    }
});
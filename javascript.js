
const images = document.querySelectorAll("#galeria img");

let currentSlide = 0;
let slideInterval;


const video = document.getElementById("miVideo");

video.addEventListener("click", function () {
    if (video.classList.contains("zoom")) {
        // Si el video tiene la clase "zoom", quitarla para eliminar el efecto de zoom
        video.classList.remove("zoom");
    } else {
        // Si el video no tiene la clase "zoom", agregarla para aplicar el efecto de zoom
        video.classList.add("zoom");
    }
});


function showSlide(n) {
    images[currentSlide].style.display = "none";
    currentSlide = (n + images.length) % images.length;
    images[currentSlide].style.display = "block";
}


function startSlideshow() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000); // Cambia de diapositiva cada 3 segundos (ajusta este valor según desees)
}

// Detiene la presentación de diapositivas
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Asigna eventos a los botones de control de la galería
document.getElementById("galeria").addEventListener("mouseover", stopSlideshow);
document.getElementById("galeria").addEventListener("mouseout", startSlideshow);

// Inicia la presentación de diapositivas al cargar la página
window.addEventListener("load", startSlideshow);

// Responsive Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Lightbox for Image Gallery
function openLightbox(event) {
    const imageSrc = event.currentTarget.src;
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <img src="${imageSrc}" />
        <span onclick="closeLightbox()" class="close-btn">&times;</span>
    `;
    document.body.appendChild(lightbox);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    document.body.removeChild(lightbox);
}

// Adding Event Listeners to Gallery Images
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);

    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => img.addEventListener('click', openLightbox));
});

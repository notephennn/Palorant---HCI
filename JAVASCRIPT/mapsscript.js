// Ganti ability image saat diklik
function changeAbilityImage(mapName, abilityNumber) {
    const imageId = mapName + 'Image';
    const imagePath = `../ASSET/${mapName}a${abilityNumber}.png`;

    const imgElement = document.getElementById(imageId);
    if (imgElement) {
        imgElement.src = imagePath;
    }
}

// Navigasi antar maps dengan klik box thumbnail
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const containers = document.querySelectorAll('.container');

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            containers.forEach(container => container.classList.remove('active'));
            containers[index].classList.add('active');

            // Optional: Scroll ke map yang dipilih
            containers[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('menu-overlay');
    body.appendChild(overlay);
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
    
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});
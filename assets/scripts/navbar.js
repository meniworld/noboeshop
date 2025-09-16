// Hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Mega menu background from HTML
document.querySelectorAll('.mega-menu').forEach(menu => {
    const bg = menu.getAttribute('data-bg');
    if (bg) {
        menu.style.backgroundImage = `url(${bg})`;
    }
});

// Mega menu open/close
const megaToggles = document.querySelectorAll('.mega-toggle');
const megaMenus = document.querySelectorAll('.mega-menu');

megaToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.closest('.has-mega');
        const mega = parent.querySelector('.mega-menu');

        // Close others
        megaMenus.forEach(m => {
            if (m !== mega) m.classList.remove('active');
        });

        // Toggle current
        mega.classList.toggle('active');
    });
});

// Close mega menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-mega')) {
        megaMenus.forEach(m => m.classList.remove('active'));
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Alert when clicking the WhatsApp button
    document.querySelector('.btn-whatsapp').addEventListener('click', function () {
        alert('Redirigiendo a WhatsApp...');
    });
});

document.getElementById('lang-toggle').addEventListener('click', function() {
    let currentLang = this.textContent;
    if (currentLang === 'English') {
        // Cambiar a inglés
        document.documentElement.lang = 'en';
        this.textContent = 'Español';
    } else {
        // Cambiar a español
        document.documentElement.lang = 'es';
        this.textContent = 'English';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Navigation mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Carrousel
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    function showSlide(n) {
        // Cacher toutes les slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Afficher la slide demandée
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        slides[slideIndex].classList.add('active');
        indicators[slideIndex].classList.add('active');
    }

    window.changeSlide = function (n) {
        slideIndex += n;
        showSlide(slideIndex);
    };

    window.currentSlide = function (n) {
        slideIndex = n - 1;
        showSlide(slideIndex);
    };

    // Afficher la première slide
    showSlide(slideIndex);

    // Changer automatiquement de slide toutes les 5 secondes
    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);

    // Accordéon Témoignages
    window.toggleTestimonial = function (id) {
        const content = document.getElementById(`testimonial${id}`);
        content.classList.toggle('active');
    };
    // Boîte de dialogue pour télécharger l'application mobile
    // Afficher la boîte de dialogue après 5 minutes (300000 millisecondes)
    setTimeout(function () {
        const modal = document.getElementById('mobileAppModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }, 300000);

    // Fermer la boîte de dialogue quand l'utilisateur clique sur le bouton de fermeture (×)
    const closeBtn = document.querySelector('.modal .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            const modal = document.getElementById('mobileAppModal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Fermer la boîte de dialogue quand l'utilisateur clique en dehors de la boîte de dialogue
    const modal = document.getElementById('mobileAppModal');
    if (modal) {
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Gestion du bouton de téléchargement (exemple)
    const downloadBtn = document.getElementById('downloadAppBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            // Remplacer par le lien de téléchargement réel de votre application
            alert('Lien de téléchargement de l\'application mobile');
            // window.location.href = 'https://exemple.com/telecharger-app';
            window.location.href= 'https://google.com';
        });
    }
});
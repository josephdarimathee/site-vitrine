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

    // Boucle automatique du carrousel
    setInterval(function() {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);

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
    
        // Popup modale pour les réalisations
        const realisationDetails = [
            {
                title: 'Projet 1',
                description: 'Détail complet du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.'
            },
            {
                title: 'Projet 2',
                description: 'Détail complet du projet 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
            },
            {
                title: 'Projet 3',
                description: 'Détail complet du projet 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
            },
            {
                title: 'Projet 4',
                description: 'Détail complet du projet 4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
            }
        ];
    
        window.openRealisationModal = function(index) {
            const modal = document.getElementById('realisationModal');
            const details = realisationDetails[index-1];
            document.getElementById('modalDetails').innerHTML = `<h3>${details.title}</h3><p>${details.description}</p>`;
            modal.style.display = 'flex';
        };
    
        window.closeRealisationModal = function() {
            document.getElementById('realisationModal').style.display = 'none';
        };

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
        window.addEventListener('DOMContentLoaded', () => {
            gsap.to('.circle-photo', {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.3,
                ease: "elastic.out(1, 0.5)"
            });
        });
});
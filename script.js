document.addEventListener('DOMContentLoaded', function () {
    // Navigation mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Variables globales pour la boîte de dialogue
    const dialogOverlay = document.getElementById('dialogOverlay'),
          dialogContent = document.getElementById('dialogContent'),
          dialogImage = document.getElementById('dialogImage'),
          dialogTitle = document.getElementById('dialogTitle'),
          dialogDescription = document.getElementById('dialogDescription');
    let currentProjectIndex = 0,
        allProjects = [];

    // Détails des projets
    const realisationDetails = [
        {
            title: 'Projet 1',
            description: 'Détail complet du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
            technologies: 'HTML, CSS, JavaScript',
            duree: '3 mois',
            date: '2025',
            client: 'Entreprise XYZ',
            objectifs: '100%'
        },
        {
            title: 'Projet 2',
            description: 'Détail complet du projet 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
            technologies: 'React, Node.js',
            duree: '4 mois',
            date: '2025',
            client: 'Startup ABC',
            objectifs: '95%'
        },
        {
            title: 'Projet 3',
            description: 'Détail complet du projet 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
            technologies: 'Vue.js, PHP',
            duree: '2 mois',
            date: '2024',
            client: 'Corporation DEF',
            objectifs: '100%'
        },
        {
            title: 'Projet 4',
            description: 'Détail complet du projet 4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
            technologies: 'WordPress, PHP',
            duree: '1 mois',
            date: '2024',
            client: 'Association GHI',
            objectifs: '98%'
        }
    ];

    // Fonction pour mettre à jour les détails du projet dans la boîte de dialogue
    function updateDialogContent(index) {
        const project = allProjects[index];
        const details = realisationDetails[index];
        const title = project.querySelector('h3').textContent;
        const description = project.querySelector('p').textContent;
        const image = project.querySelector('img').src;

        dialogContent.innerHTML = `
            <img src="${image}" alt="${title}" class="dialog-image">
            <h2 class="dialog-title">${title}</h2>
            <div class="dialog-description">
                <p>${description}</p>
                <div class="dialog-details">
                    <h3>Détails du projet</h3>
                    <ul>
                        <li>Technologies utilisées : ${details.technologies}</li>
                        <li>Durée du projet : ${details.duree}</li>
                        <li>Date de réalisation : ${details.date}</li>
                        <li>Client : ${details.client}</li>
                        <li>Objectifs atteints : ${details.objectifs}</li>
                    </ul>
                </div>
            </div>
            <div class="dialog-navigation">
                <button class="dialog-nav-button" onclick="navigateProject('prev')">Précédent</button>
                <button class="dialog-nav-button" onclick="navigateProject('next')">Suivant</button>
            </div>
        `;
    }

    // Ouvrir la boîte de dialogue
    window.openRealisationDialog = function(button) {
        const realisationItem = button.closest('.realisation-item');
        allProjects = Array.from(document.querySelectorAll('.realisation-item'));
        currentProjectIndex = allProjects.indexOf(realisationItem);
        
        if (realisationItem && dialogOverlay) {
            updateDialogContent(currentProjectIndex);
            dialogOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    // Fermer la boîte de dialogue
    window.closeDialog = function() {
        if (dialogOverlay) {
            dialogOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Navigation entre les projets
    window.navigateProject = function(direction) {
        if (direction === 'prev') {
            currentProjectIndex = (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
        } else {
            currentProjectIndex = (currentProjectIndex + 1) % allProjects.length;
        }
        updateDialogContent(currentProjectIndex);
    }

    // Fermer la boîte de dialogue en cliquant en dehors
    dialogOverlay.addEventListener('click', function(e) {
        if (e.target === dialogOverlay) {
            closeDialog();
        }
    });

    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && dialogOverlay.style.display === 'flex') {
            closeDialog();
        }
    });
    // Carrousel
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide'),
          indicators = document.querySelectorAll('.indicator');

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

    window.changeSlide = function(n) {
        slideIndex += n;
        showSlide(slideIndex);
    }

    window.currentSlide = function(n) {
        slideIndex = n - 1;
        showSlide(slideIndex);
    }

    // Afficher la première slide et démarrer le carrousel
    if (slides.length > 0) {
        showSlide(slideIndex);
        setInterval(() => {
            slideIndex++;
            showSlide(slideIndex);
        }, 5000);
    }

    // Accordéon Témoignages
    window.toggleTestimonial = function(id) {
        const content = document.getElementById(`testimonial${id}`);
        if (content) {
            content.classList.toggle('active');
        }
    }

    // Animation des photos
    if (typeof gsap !== 'undefined') {
        gsap.to('.circle-photo', {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: "elastic.out(1, 0.5)"
        });
    }
});
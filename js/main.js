document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENÚ MÓVIL ---
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const closeMenuBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full'); // Muestra el menú
            body.style.overflow = 'hidden'; // Evita scroll al estar abierto
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full'); // Esconde el menú
            body.style.overflow = ''; // Habilita el scroll de nuevo
        });
    }

    // Cerrar menú al hacer click en un link (opcional pero recomendado)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            body.style.overflow = '';
        });
    });

    // --- 2. HERO SLIDER AUTOMÁTICO ---
    let currentHeroSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');

    if (heroSlides.length > 0) {
        setInterval(() => {
            heroSlides[currentHeroSlide].classList.remove('active');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.add('active');
        }, 5000);
    }

    // --- 3. REVIEWS SLIDER CON DATOS ---
    const reviews = [
        {
            text: "The most professional cleaning service in Indianapolis. They never miss a spot!",
            author: "Sarah J.",
            location: "Carmel, IN",
            initial: "S"
        },
        {
            text: "Reliable and punctual. My office in downtown Indy looks brand new every Monday morning.",
            author: "Michael R.",
            location: "Downtown Indianapolis",
            initial: "M"
        },
        {
            text: "I've tried many cleaners, but Eya's attention to detail is on another level. Highly recommended!",
            author: "Elena G.",
            location: "Fishers, IN",
            initial: "E"
        }
    ];

    let currentReview = 0;
    const reviewText = document.getElementById('review-text');
    const reviewAuthor = document.getElementById('review-author');
    const reviewLocation = document.getElementById('review-location');
    const reviewInitial = document.getElementById('review-initial');
    const reviewContainer = document.getElementById('review-container');

    function updateReview(index) {
        // Efecto de salida (Fade out)
        reviewContainer.style.opacity = '0';
        reviewContainer.style.transform = 'translateX(20px)';

        setTimeout(() => {
            reviewText.textContent = `"${reviews[index].text}"`;
            reviewAuthor.textContent = `— ${reviews[index].author}`;
            reviewLocation.textContent = reviews[index].location;
            reviewInitial.textContent = reviews[index].initial;

            // Efecto de entrada (Fade in)
            reviewContainer.style.opacity = '1';
            reviewContainer.style.transform = 'translateX(0)';
        }, 300);
    }

    document.getElementById('next-review')?.addEventListener('click', () => {
        currentReview = (currentReview + 1) % reviews.length;
        updateReview(currentReview);
    });

    document.getElementById('prev-review')?.addEventListener('click', () => {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        updateReview(currentReview);
    });
});

// --- 4. REVEAL ON SCROLL (Intersection Observer) ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Una vez que aparece, dejamos de observarlo para ahorrar memoria
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // Aparece cuando el 15% del elemento es visible
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});
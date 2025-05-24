document.addEventListener('DOMContentLoaded', () => {
    const moreLinks = document.querySelectorAll('.more-link');
    moreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing scroll-to-bottom functionality for "More" buttons
    const moreLinks = document.querySelectorAll('.more-link');
    moreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    });

    // Animation for artwork cards in scroll container
    const cards = document.querySelectorAll('.animate-on-scroll');
    const scrollContainer = document.querySelector('.scroll-container');

    const checkVisibility = () => {
        const containerRect = scrollContainer.getBoundingClientRect();
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const isVisible = (
                cardRect.top >= containerRect.top &&
                cardRect.bottom <= containerRect.bottom
            );
            if (isVisible) {
                card.classList.add('visible');
            }
        });
    };

    scrollContainer.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

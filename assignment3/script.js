document.addEventListener("DOMContentLoaded", () => {
  // Scroll-to-bottom functionality for "More" buttons
  const moreLinks = document.querySelectorAll(".more-link");
  moreLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });
  });

  // Animation for artwork cards in scroll container
  const cards = document.querySelectorAll(".animate-on-scroll");
  const scrollContainer = document.querySelector(".scroll-container");

  if (scrollContainer && cards.length > 0) {
    const checkVisibility = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const isVisible =
          cardRect.top >= containerRect.top &&
          cardRect.top <= containerRect.bottom;
        if (isVisible) {
          card.classList.add("visible");
        }
      });
    };

    scrollContainer.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check
  }

  // Toggle description visibility on card click
  const toggleCards = document.querySelectorAll(".toggle-card");
  toggleCards.forEach((card) => {
    card.addEventListener("click", () => {
      const description = card.querySelector(".artwork-description");
      if (description) {
        description.classList.toggle("show");
      }
    });
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    // Check system preference on load
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark-mode");
      themeToggle.classList.add("dark-mode");
      document.querySelector(".content-wrapper").classList.add("dark-mode");
      document.querySelector("header").classList.add("dark-mode");
      document.querySelector(".footer").classList.add("dark-mode");
      document.querySelector(".scroll-container").classList.add("dark-mode");
      document.querySelector(".project-description").classList.add("dark-mode");
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.classList.toggle("dark-mode");
      document.querySelector(".content-wrapper").classList.toggle("dark-mode");
      document.querySelector("header").classList.toggle("dark-mode");
      document.querySelector(".footer").classList.toggle("dark-mode");
      document.querySelector(".scroll-container").classList.toggle("dark-mode");
      document
        .querySelector(".project-description")
        .classList.toggle("dark-mode");
    });
  }

  // About modal functionality
  const aboutLink = document.getElementById("about-link");
  const aboutModal = document.getElementById("about-modal");
  const closeModal = document.getElementById("close-modal");
  const aboutModalContent = aboutModal.querySelector(".modal-content");

  if (aboutLink && aboutModal && closeModal) {
    aboutLink.addEventListener("click", (event) => {
      event.preventDefault();
      aboutModal.classList.add("show");
      setTimeout(() => {
        aboutModalContent.classList.add("show");
      }, 10); // Small delay for smooth animation
    });

    closeModal.addEventListener("click", () => {
      aboutModalContent.classList.remove("show");
      setTimeout(() => {
        aboutModal.classList.remove("show");
      }, 500); // Match CSS transition duration
    });

    // Close modal when clicking outside the content
    aboutModal.addEventListener("click", (event) => {
      if (event.target === aboutModal) {
        aboutModalContent.classList.remove("show");
        setTimeout(() => {
          aboutModal.classList.remove("show");
        }, 500);
      }
    });
  }

  // Contact modal functionality
  const contactLink = document.getElementById("contact-link");
  const contactModal = document.getElementById("contact-modal");
  const closeContactModal = document.getElementById("close-contact-modal");
  const contactModalContent = contactModal.querySelector(".modal-content");

  if (contactLink && contactModal && closeContactModal) {
    contactLink.addEventListener("click", (event) => {
      event.preventDefault();
      contactModal.classList.add("show");
      setTimeout(() => {
        contactModalContent.classList.add("show");
      }, 10); // Small delay for smooth animation
    });

    closeContactModal.addEventListener("click", () => {
      contactModalContent.classList.remove("show");
      setTimeout(() => {
        contactModal.classList.remove("show");
      }, 500); // Match CSS transition duration
    });

    // Close modal when clicking outside the content
    contactModal.addEventListener("click", (event) => {
      if (event.target === contactModal) {
        contactModalContent.classList.remove("show");
        setTimeout(() => {
          contactModal.classList.remove("show");
        }, 500);
      }
    });
  }

  // Enhanced particle animation
  const particleContainer = document.querySelector(".particle-container");
  if (particleContainer) {
    for (let i = 0; i < 30; i++) {
      // Reduced to 30 for performance and variety
      const particle = document.createElement("div");
      const shapeType = Math.floor(Math.random() * 3); // 0: circle, 1: star, 2: line
      particle.classList.add("particle");

      if (shapeType === 0) particle.classList.add("circle");
      else if (shapeType === 1) particle.classList.add("star");
      else particle.classList.add("line");

      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`; // Random path
      particleContainer.appendChild(particle);
    }
  }
});

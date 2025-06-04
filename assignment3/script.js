document.addEventListener("DOMContentLoaded", () => {
  // Collections data
  const collections = {
    "minh-collection": [
      {
        src: "DSC09009.png",
        alt: "Minh 1",
        description: "Light and shadow interplay.",
      },
      { src: "DSC00251.jpg", alt: "Minh 2", description: "Minimalist calm." },
      {
        src: "DSC00276.jpg",
        alt: "Minh 3",
        description: "Introspective forms.",
      },
      {
        src: "DSC00321.jpg",
        alt: "Minh 4",
        description: "Serene abstraction.",
      },
      {
        src: "DSC08935.jpg",
        alt: "Minh 4",
        description: "Serene abstraction.",
      },
      {
        src: "DSC07983.jpg",
        alt: "Minh 4",
        description: "Serene abstraction.",
      },
      { src: "DSC07892.jpg", alt: "Minh 5", description: "Quiet motion." },
    ],
    "tu-collection": [
      { src: "DSC5113.jpg", alt: "Tu 2", description: "City chaos." },
      { src: "DSC5076.jpg", alt: "Tu 1", description: "Urban vibrancy." },
      { src: "DSC5057.jpg", alt: "Tu 2", description: "City chaos." },
      { src: "DSC5391.jpg", alt: "Tu 2", description: "City chaos." },
      { src: "DSC5439.jpg", alt: "Tu 2", description: "City chaos." },
      { src: "DSC5148.jpg", alt: "Tu 3", description: "Dynamic shapes." },
    ],
    "artwork1-collection": [
      {
        src: "assets/images/artwork1_1.jpg",
        alt: "Artwork 1-1",
        description: "Light and shadow.",
      },
      {
        src: "assets/images/artwork1_2.jpg",
        alt: "Artwork 1-2",
        description: "Minimalist forms.",
      },
    ],
    "artwork2-collection": [
      {
        src: "assets/images/artwork2_1.jpg",
        alt: "Artwork 2-1",
        description: "Urban landscapes.",
      },
      {
        src: "assets/images/artwork2_2.jpg",
        alt: "Artwork 2-2",
        description: "Bold colors.",
      },
    ],
    "artwork3-collection": [
      {
        src: "assets/images/artwork3_1.jpg",
        alt: "Artwork 3-1",
        description: "Nature’s resilience.",
      },
      {
        src: "assets/images/artwork3_2.jpg",
        alt: "Artwork 3-2",
        description: "Fluid forms.",
      },
    ],
    "artwork4-collection": [
      {
        src: "assets/images/artwork4_1.jpg",
        alt: "Artwork 4-1",
        description: "Human connection.",
      },
      {
        src: "assets/images/artwork4_2.jpg",
        alt: "Artwork 4-2",
        description: "Abstract forms.",
      },
    ],
    "artwork5-collection": [
      {
        src: "assets/images/artwork5_1.jpg",
        alt: "Artwork 5-1",
        description: "Solitude essence.",
      },
      {
        src: "assets/images/artwork5_2.jpg",
        alt: "Artwork 5-2",
        description: "Minimalist lines.",
      },
    ],
    "artwork6-collection": [
      {
        src: "assets/images/artwork6_1.jpg",
        alt: "Artwork 6-1",
        description: "Cultural fusion.",
      },
      {
        src: "assets/images/artwork6_2.jpg",
        alt: "Artwork 6-2",
        description: "Bold patterns.",
      },
    ],
    "artwork7-collection": [
      {
        src: "assets/images/artwork7_1.jpg",
        alt: "Artwork 7-1",
        description: "Modern chaos.",
      },
      {
        src: "assets/images/artwork7_2.jpg",
        alt: "Artwork 7-2",
        description: "Dynamic compositions.",
      },
    ],
    "artwork8-collection": [
      {
        src: "assets/images/artwork8_1.jpg",
        alt: "Artwork 8-1",
        description: "Tranquil ode.",
      },
      {
        src: "assets/images/artwork8_2.jpg",
        alt: "Artwork 8-2",
        description: "Soft gradients.",
      },
    ],
    "artwork9-collection": [
      {
        src: "assets/images/artwork9_1.jpg",
        alt: "Artwork 9-1",
        description: "Identity fragments.",
      },
      {
        src: "assets/images/artwork9_2.jpg",
        alt: "Artwork 9-2",
        description: "Vivid colors.",
      },
    ],
    "artwork10-collection": [
      {
        src: "assets/images/artwork10_1.jpg",
        alt: "Artwork 10-1",
        description: "Time meditation.",
      },
      {
        src: "assets/images/artwork10_2.jpg",
        alt: "Artwork 10-2",
        description: "Layered textures.",
      },
    ],
  };

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
    checkVisibility();
  }

  // Gallery and toggle functionality
  const toggleCards = document.querySelectorAll(".toggle-card");
  const galleryModal = document.getElementById("gallery-modal");
  const galleryImage = document.getElementById("gallery-image");
  const galleryInfo = document.getElementById("gallery-info");
  const closeGalleryModal = document.getElementById("close-gallery-modal");
  const prevButton = document.getElementById("gallery-prev");
  const nextButton = document.getElementById("gallery-next");
  let currentImages = [];
  let currentIndex = 0;

  toggleCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Prevent description toggle when clicking the image for gallery
      if (event.target.classList.contains("artwork-image")) {
        const collectionId = card.dataset.collectionId;
        currentImages = collections[collectionId] || [];
        currentIndex = 0;

        if (currentImages.length > 0) {
          const title = card.querySelector(".artwork-title")?.innerText || "";
          const date = card.querySelector(".artwork-date")?.innerText || "";
          const description =
            card.querySelector(".artwork-description p")?.innerText ||
            currentImages[0].description;

          galleryImage.src = currentImages[0].src;
          galleryImage.alt = currentImages[0].alt;
          galleryInfo.innerHTML = `
            <h3 class="artwork-title">${title}</h3>
            <p class="artwork-date">${date}</p>
            <div class="artwork-description"><p>${description}</p></div>
          `;

          galleryModal.classList.add("show");
          setTimeout(() => {
            galleryModal.querySelector(".modal-content").classList.add("show");
          }, 10);
        }
      } else {
        // Toggle description for non-image clicks
        const description = card.querySelector(".artwork-description");
        if (description) {
          description.classList.toggle("show");
        }
      }
    });
  });

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
      galleryImage.src = currentImages[currentIndex].src;
      galleryImage.alt = currentImages[currentIndex].alt;
      galleryInfo.querySelector(".artwork-description p").innerText =
        currentImages[currentIndex].description;
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % currentImages.length;
      galleryImage.src = currentImages[currentIndex].src;
      galleryImage.alt = currentImages[currentIndex].alt;
      galleryInfo.querySelector(".artwork-description p").innerText =
        currentImages[currentIndex].description;
    });
  }

  if (closeGalleryModal) {
    closeGalleryModal.addEventListener("click", () => {
      galleryModal.querySelector(".modal-content").classList.remove("show");
      setTimeout(() => {
        galleryModal.classList.remove("show");
      }, 500);
    });

    galleryModal.addEventListener("click", (event) => {
      if (event.target === galleryModal) {
        galleryModal.querySelector(".modal-content").classList.remove("show");
        setTimeout(() => {
          galleryModal.classList.remove("show");
        }, 500);
      }
    });
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
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
      }, 10);
    });

    closeModal.addEventListener("click", () => {
      aboutModalContent.classList.remove("show");
      setTimeout(() => {
        aboutModal.classList.remove("show");
      }, 500);
    });

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
      }, 10);
    });

    closeContactModal.addEventListener("click", () => {
      contactModalContent.classList.remove("show");
      setTimeout(() => {
        contactModal.classList.remove("show");
      }, 500);
    });

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
      const particle = document.createElement("div");
      const shapeType = Math.floor(Math.random() * 3);
      particle.classList.add("particle");

      if (shapeType === 0) particle.classList.add("circle");
      else if (shapeType === 1) particle.classList.add("star");
      else particle.classList.add("line");

      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
      particleContainer.appendChild(particle);
    }
  }
});

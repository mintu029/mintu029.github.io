document.addEventListener("DOMContentLoaded", () => {
  // Collections data with standardized paths and types
  const collections = {
    "minh-collection": [
      {
        type: "image",
        src: "dsc09009.png",
        alt: "Drawing exploring light and shadow",
        description: "Light and shadow interplay.",
      },
      {
        type: "image",
        src: "dsc00251.jpg",
        alt: "Minimalist calm artwork",
        description: "Minimalist calm.",
      },
      {
        type: "image",
        src: "dsc00276.jpg",
        alt: "Introspective minimalist artwork",
        description: "Introspective forms.",
      },
      {
        type: "image",
        src: "dsc00321.jpg",
        alt: "Serene abstract drawing",
        description: "Serene abstraction.",
      },
      {
        type: "image",
        src: "dsc08935.jpg",
        alt: "Serene abstract composition",
        description: "Serene abstraction.",
      },
      {
        type: "image",
        src: "dsc07983.jpg",
        alt: "Serene abstract piece",
        description: "Serene abstraction.",
      },
      {
        type: "image",
        src: "dsc07892.jpg",
        alt: "Drawing with quiet motion",
        description: "Quiet motion.",
      },
    ],
    "tu-collection": [
      {
        type: "image",
        src: "dsc05113.jpg",
        alt: "Urban chaos artwork",
        description: "City chaos.",
      },
      {
        type: "image",
        src: "dsc05076.jpg",
        alt: "Vibrant urban scene",
        description: "Urban vibrancy.",
      },
      {
        type: "image",
        src: "dsc05057.jpg",
        alt: "City-inspired chaotic artwork",
        description: "City chaos.",
      },
      {
        type: "image",
        src: "dsc05391.jpg",
        alt: "Urban chaotic composition",
        description: "City chaos.",
      },
      {
        type: "image",
        src: "dsc05439.jpg",
        alt: "City-themed abstract",
        description: "City chaos.",
      },
      {
        type: "image",
        src: "dsc05148.jpg",
        alt: "Dynamic urban artwork",
        description: "Dynamic shapes.",
      },
    ],
    "artwork1-collection": [
      {
        type: "image",
        src: "20230915_194433000_ios.jpg",
        alt: "Light and shadow artwork",
        description: "Light and shadow.",
      },
      {
        type: "image",
        src: "20230915_200319000_ios.jpg",
        alt: "Minimalist forms artwork",
        description: "Minimalist forms.",
      },
      {
        type: "image",
        src: "20230916_034302000_ios.jpg",
        alt: "Minimalist composition",
        description: "Minimalist forms.",
      },
    ],
    "artwork2-collection": [
      {
        type: "image",
        src: "20231012_131022000_ios.png",
        alt: "Bold urban artwork",
        description: "Bold colors.",
      },
      {
        type: "image",
        src: "dsc07038.png",
        alt: "Colorful urban landscape",
        description: "Urban landscapes.",
      },
      {
        type: "image",
        src: "dsc07136.png",
        alt: "Vibrant urban artwork",
        description: "Bold colors.",
      },
      {
        type: "image",
        src: "dsc07163.png",
        alt: "Bold urban piece",
        description: "Bold colors.",
      },
      {
        type: "image",
        src: "dsc06769.png",
        alt: "Urban colorful abstract",
        description: "Bold colors.",
      },
      {
        type: "image",
        src: "dsc06704.png",
        alt: "Dynamic urban artwork",
        description: "Bold colors.",
      },
    ],
    "artwork3-collection": [
      {
        type: "image",
        src: "dsc01148.png",
        alt: "Nature-inspired artwork",
        description: "Nature’s resilience.",
      },
      {
        type: "image",
        src: "dsc07712.png",
        alt: "Fluid nature artwork",
        description: "Fluid forms.",
      },
      {
        type: "image",
        src: "dsc07680.png",
        alt: "Human connection artwork",
        description: "Human connection.",
      },
      {
        type: "image",
        src: "dsc07629.png",
        alt: "Abstract nature artwork",
        description: "Abstract forms.",
      },
      {
        type: "image",
        src: "dsc07596.png",
        alt: "Abstract nature composition",
        description: "Abstract forms.",
      },
    ],
    "artwork4-collection": [
      {
        type: "image",
        src: "dsc03243-recovered.jpg",
        alt: "Abstract human connection",
        description: "Human connection.",
      },
      {
        type: "image",
        src: "dsc03092.jpg",
        alt: "Abstract vibrant forms",
        description: "Abstract forms.",
      },
      {
        type: "image",
        src: "dsc03255.jpg",
        alt: "Abstract colorful forms",
        description: "Abstract forms.",
      },
      {
        type: "image",
        src: "dsc03065.jpg",
        alt: "Abstract dynamic forms",
        description: "Abstract forms.",
      },
    ],
    "artwork5-collection": [
      {
        type: "image",
        src: "PET MAGAZINE_page-0001.jpg",
        alt: "Minimalist solitude artwork",
        description: "Solitude essence.",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0002.jpg",
        alt: "Minimalist line artwork",
        description: "Minimalist lines.",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0003.jpg",
        alt: "Minimalist line composition",
        description: "Minimalist lines.",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0004.jpg",
        alt: "Minimalist abstract lines",
        description: "Minimalist lines.",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0005.jpg",
        alt: "Minimalist line design",
        description: "Minimalist lines.",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0006.jpg",
        alt: "Minimalist line art",
        description: "Minimalist lines.",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0007.jpg",
        alt: "Minimalist line piece",
        description: "Minimalist lines.",
      },
    ],
    "artwork6-collection": [
      {
        type: "video",
        src: "",
        alt: "Video of shadow play",
        description: "Shadow play.",
      },
    ],
    "artwork7-collection": [
      {
        type: "video",
        link: "https://youtu.be/hcSeyMMeoAg?si=Wu0gP2nuorBCSKGz",
        alt: "Modern chaos artwork",
        description: "Modern chaos.",
      },
      {
        type: "image",
        src: "assets/images/artwork7_2.jpg",
        alt: "Dynamic composition artwork",
        description: "Dynamic compositions.",
      },
    ],
    "artwork8-collection": [
      {
        type: "image",
        src: "assets/images/artwork8_1.jpg",
        alt: "Tranquil ode artwork",
        description: "Tranquil ode.",
      },
      {
        type: "image",
        src: "assets/images/artwork8_2.jpg",
        alt: "Soft gradients artwork",
        description: "Soft gradients.",
      },
    ],
    "artwork9-collection": [
      {
        type: "image",
        src: "assets/images/artwork9_1.jpg",
        alt: "Identity fragments artwork",
        description: "Identity fragments.",
      },
      {
        type: "image",
        src: "assets/images/artwork9_2.jpg",
        alt: "Vivid colors artwork",
        description: "Vivid colors.",
      },
    ],
    "artwork10-collection": [
      {
        type: "image",
        src: "assets/images/artwork10_1.jpg",
        alt: "Time meditation artwork",
        description: "Time meditation.",
      },
      {
        type: "image",
        src: "assets/images/artwork10_2.jpg",
        alt: "Layered textures artwork",
        description: "Layered textures.",
      },
    ],
  };

  // Scroll-to-bottom functionality for "More" buttons
  const moreLinks = document.querySelectorAll(".more-link");
  if (moreLinks.length) {
    moreLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      });
    });
  }

  // Animation for artwork cards in scroll container
  const cards = document.querySelectorAll(".animate-on-scroll");
  const scrollContainer = document.querySelector(".scroll-container");

  if (scrollContainer && cards.length) {
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
  const galleryMedia = document.getElementById("gallery-media");
  const galleryInfo = document.getElementById("gallery-info");
  const closeGalleryModal = document.getElementById("close-gallery-modal");
  const prevButton = document.getElementById("gallery-prev");
  const nextButton = document.getElementById("gallery-next");
  let currentImages = [];
  let currentIndex = 0;

  // Function to render media (image or video)
  const renderMedia = (media, title, date) => {
    if (!galleryMedia) return;
    galleryMedia.innerHTML = "";
    let mediaElement;

    if (media.type === "image") {
      mediaElement = document.createElement("img");
      mediaElement.src = media.src;
      mediaElement.alt = media.alt;
      mediaElement.setAttribute("aria-label", media.description);
    } else if (media.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.src = media.src;
      mediaElement.alt = media.alt;
      mediaElement.controls = true;
      mediaElement.autoplay = true;
      mediaElement.muted = true;
      mediaElement.loop = true;
      mediaElement.setAttribute("aria-label", media.description);
    }

    if (mediaElement) {
      galleryMedia.appendChild(mediaElement);
    }

    if (galleryInfo) {
      galleryInfo.innerHTML = `
        <h3 class="artwork-title">${title}</h3>
        <p class="artwork-date">${date}</p>
        <div class="artwork-description"><p>${media.description}</p></div>
      `;
    }
  };

  // Pause any playing video
  const pauseCurrentVideo = () => {
    const currentVideo = galleryMedia?.querySelector("video");
    if (currentVideo) {
      currentVideo.pause();
    }
  };

  if (toggleCards.length && galleryModal && galleryMedia && galleryInfo) {
    toggleCards.forEach((card) => {
      card.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("artwork-image")) {
          const collectionId = card.dataset.collectionId;
          currentImages = collections[collectionId] || [];
          currentIndex = 0;

          if (currentImages.length > 0) {
            const title = card.querySelector(".artwork-title")?.innerText || "";
            const date = card.querySelector(".artwork-date")?.innerText || "";
            renderMedia(currentImages[0], title, date);
            galleryModal.classList.add("show");
            setTimeout(() => {
              galleryModal
                .querySelector(".modal-content")
                ?.classList.add("show");
            }, 10);
          }
        } else {
          const description = card.querySelector(".artwork-description");
          if (description) {
            description.classList.toggle("show");
          }
        }
      });
    });
  }

  if (prevButton && nextButton) {
    const switchMedia = (newIndex) => {
      pauseCurrentVideo();
      currentIndex = newIndex;
      const title = document.querySelector(".artwork-title")?.innerText || "";
      const date = document.querySelector(".artwork-date")?.innerText || "";
      renderMedia(currentImages[currentIndex], title, date);
    };

    prevButton.addEventListener("click", () => {
      switchMedia(
        (currentIndex - 1 + currentImages.length) % currentImages.length
      );
    });

    nextButton.addEventListener("click", () => {
      switchMedia((currentIndex + 1) % currentImages.length);
    });
  }

  if (closeGalleryModal && galleryModal) {
    const closeModal = () => {
      pauseCurrentVideo();
      galleryModal.querySelector(".modal-content")?.classList.remove("show");
      setTimeout(() => {
        galleryModal.classList.remove("show");
      }, 500);
    };

    closeGalleryModal.addEventListener("click", closeModal);
    galleryModal.addEventListener("click", (event) => {
      if (event.target === galleryModal) {
        closeModal();
      }
    });
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const elementsToToggle = [
      document.body,
      themeToggle,
      document.querySelector(".content-wrapper"),
      document.querySelector("header"),
      document.querySelector(".footer"),
      document.querySelector(".scroll-container"),
      document.querySelector(".project-description"),
    ].filter(Boolean);

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      elementsToToggle.forEach((el) => el.classList.add("dark-mode"));
    }

    themeToggle.addEventListener("click", () => {
      elementsToToggle.forEach((el) => el.classList.toggle("dark-mode"));
    });
  }

  // About modal functionality
  const aboutLink = document.getElementById("about-link");
  const aboutModal = document.getElementById("about-modal");
  const closeModal = document.getElementById("close-modal");

  if (aboutLink && aboutModal && closeModal) {
    const aboutModalContent = aboutModal.querySelector(".modal-content");
    const toggleAboutModal = (show) => {
      if (show) {
        aboutModal.classList.add("show");
        setTimeout(() => aboutModalContent?.classList.add("show"), 10);
      } else {
        aboutModalContent?.classList.remove("show");
        setTimeout(() => aboutModal.classList.remove("show"), 500);
      }
    };

    aboutLink.addEventListener("click", (event) => {
      event.preventDefault();
      toggleAboutModal(true);
    });

    closeModal.addEventListener("click", () => toggleAboutModal(false));
    aboutModal.addEventListener("click", (event) => {
      if (event.target === aboutModal) {
        toggleAboutModal(false);
      }
    });
  }

  // Contact modal functionality
  const contactLink = document.getElementById("contact-link");
  const contactModal = document.getElementById("contact-modal");
  const closeContactModal = document.getElementById("close-contact-modal");

  if (contactLink && contactModal && closeContactModal) {
    const contactModalContent = contactModal.querySelector(".modal-content");
    const toggleContactModal = (show) => {
      if (show) {
        contactModal.classList.add("show");
        setTimeout(() => contactModalContent?.classList.add("show"), 10);
      } else {
        contactModalContent?.classList.remove("show");
        setTimeout(() => contactModal.classList.remove("show"), 500);
      }
    };

    contactLink.addEventListener("click", (event) => {
      event.preventDefault();
      toggleContactModal(true);
    });

    closeContactModal.addEventListener("click", () =>
      toggleContactModal(false)
    );
    contactModal.addEventListener("click", (event) => {
      if (event.target === contactModal) {
        toggleContactModal(false);
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

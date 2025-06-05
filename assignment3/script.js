document.addEventListener("DOMContentLoaded", () => {
  // Collections data with external URLs
  const collections = {
    "minh-collection": [
      {
        type: "image",
        src: "DSC09009.jpg",
        alt: "IFEST",
        tilte: "RMIT INTERNATIONAL FESTIVAL",
        description: "He hosted for media of this festival",
      },
      {
        type: "image",
        src: "DSC08972.jpg",
        alt: "RMIT",
        description: "FESTIVAL",
      },
      {
        type: "image",
        src: "DSC07983.jpg",
        alt: "RMIT",
        description: "FESTIVAL",
      },
      {
        type: "image",
        src: "DSC00321.jpg",
        alt: "RMIT",
        description: "FESTIVAL",
      },
      {
        type: "image",
        src: "DSC00276.jpg",
        alt: "RMIT",
        description: "FESTIVAL",
      },
      {
        type: "image",
        src: "DSC00251.jpg",
        alt: "RMIT",
        description: "FESTIVAL",
      },
    ],
     "vie-collection": [
      {
        type: "image",
        src: "DSC05113.jpg",
        alt: "PHU YEN",
        description: "PHU YEN",
      },
      {
        type: "image",
        src: "DSC09882.jpg",
        alt: "VIE",
        description: "VIE",
      },
   
      {
        type: "image",
        src: "DSC09880.jpg",
        alt: "VIE",
        description: "VIE",
      },
      {
        type: "image",
        src: "DSC09861.jpg",
        alt: "VIE",
        description: "VIE",
      },
      {
        type: "image",
        src: "DSC09848.jpg",
        alt: "VIE",
        description: "VIE",
      },  ],
       "ind-collection": [
      {
        type: "video",
        src: "final.mp4",
        alt: "PHU YEN",
        description: "PHU YEN",
      }, ],

    "tu-collection": [
      {
        type: "image",
        src: "DSC05113.jpg",
        alt: "PHU YEN",
        description: "PHU YEN",
      },
      {
        type: "image",
        src: "DSC05057.jpg",
        alt: "Vibrant urban scene",
        description: "PHU YEN",
      },
      {
        type: "image",
        src: "DSC05143.jpg",
        alt: "PHU YEN",
        description: "PHU YEN",
      },
      {
        type: "image",
        src: "DSC05144.jpg",
        alt: "PHU YEN",
        description: "PHU YEN",
      },
      {
        type: "image",
        src: "DSC05148.jpg",
        alt: "PHU YEN",
        description: "PHU YEN",
      },
      {
        type: "image",
        src: "DSC05391.jpg",
        alt: "PHU YEN",
        description: "PHU YEN",
      },
    ],
    "artwork1-collection": [
      {
        type: "image",
        src: "20230915_194433000_iOS.jpg",
        alt: "AN",
        description: "THU AN",
      },
      {
        type: "image",
        src: "20230915_200234000_iOS.jpg",
        alt: "AN",
        description: "THU AN",
      },
      {
        type: "image",
        src: "20230915_200319000_iOS.jpg",
        alt: "AN",
        description: "THU AN",
      },
      {
        type: "image",
        src: "20230916_034302000_iOS.jpg",
        alt: "AN",
        description: "THU AN",
      },
    ],
    "artwork2-collection": [
      {
        type: "image",
        src: "20231012_131022000_iOS.jpg",
        alt: "HA GIANG",
        description: "BẮC",
      },
      {
        type: "image",
        src: "DSC06769.jpg",
        alt: "HA GIANG",
        description: "BẮC",
      },
      {
        type: "image",
        src: "DSC06847.jpg",
        alt: "HA GIANG",
        description: "BẮC",
      },
      {
        type: "image",
        src: "DSC06850.jpg",
        alt: "HA GIANG",
        description: "BẮC",
      },
      {
        type: "image",
        src: "DSC07136.jpg",
        alt: "HA GIANG",
        description: "BẮC",
      },
      {
        type: "image",
        src: "DSC07163.jpg",
        alt: "HA GIANG",
        description: "BẮC",
      },
    ],
    "artwork3-collection": [
        {
        type: "image",
        src: "DSC01148.png",
        alt: "RMIT",
        description: "RMIT CARNIVAL DAY",
      },
      {
        type: "image",
        src: "DSC07596.png",
        alt: "RMIT",
        description: "RMIT CARNIVAL DAY",
      },
      {
        type: "image",
        src: "DSC07629.png",
        alt: "RMIT",
        description: "RMIT CARNIVAL DAY",
      },
      {
        type: "image",
        src: "DSC07647.png",
        alt: "RMIT",
        description: "RMIT CARNIVAL DAY",
      },
      {
        type: "image",
        src: "DSC07712.png",
        alt: "RMIT",
        description: "RMIT CARNIVAL DAY",
      },
    ],
    "artwork4-collection": [
      {
        type: "image",
        src: "DSC03243-Recovered.jpg",
        alt: "KHUE",
        description: "THY KHUE",
      },
      {
        type: "image",
        src: "DSC03255.jpg",
        alt: "KHUE",
        description: "THY KHUE",
      },
      {
        type: "image",
        src: "DSC03241-Recovered.jpg",
        alt: "KHUE",
        description: "THY KHUE",
      },
      {
        type: "image",
        src: "DSC03092.jpg",
        alt: "KHUE",
        description: "THY KHUE",
      },
    ],
    "artwork5-collection": [
      {
        type: "image",
        src: "PET MAGAZINE_page-0001.jpg",
        alt: "PET MAGAZINE",
        description: "PET MAGAZINE",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0002.jpg",
        alt: "PET MAGAZINE",
        description: "PET MAGAZINE",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0003.jpg",
        alt: "PET MAGAZINE",
        description: "PET MAGAZINE",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0004.jpg",
        alt: "PET MAGAZINE",
        description: "PET MAGAZINE",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0005.jpg",
        alt: "PET MAGAZINE",
        description: "PET MAGAZINE",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0006.jpg",
        alt: "PET MAGAZINE",
        description: "PET MAGAZINE",
      },
      {
        type: "image",
        src: "PET MAGAZINE_page-0007.jpg",
        alt: "PET MAGAZINE",
        description: "PET MAGAZINE",
      },
    ],
    "artwork6-collection": [
      {
        type: "video",
        src: "https://limewire.com/d/DrFbG#kBSSkYmbQj",
        alt: "ifest video",
        description: "Minh Tu is director of RMIT International Festival at RMIT Viet Nam",
      },
    ],
    "artwork7-collection": [
      {
        type: "video",
        src: "https://www.youtube.com/embed/hcSeyMMeoAg?si=qK0ZH6N-bTbiDsFV",
        alt: "Lá Thư",
        tilte: "Lá Thư",
        description: "Minh TÚ is director of this music video which called 'LÁ THƯ'",
      },
    ],
    "artwork8-collection": [
      {
        type: "video",
        src: "finalad.mp4",
        alt: "Shipaholic",
         tilte: "Shipaholic",
        description: "Minh Tu is director of this video. He made it to create a advertising for new brand call 'SHIPAHOLIC'",
      },
      {
        type: "image",
        src: "IMG_7384.jpg",
        alt: "bts",
        tilte: "Shipaholic",
        description: "Behind The Scence",
      },
     
    ],
    "artwork9-collection": [
      {
        type: "image",
        src: "000032.jpg",
        alt: "TET",
        description: "TET",
      },
      {
        type: "image",
        src: "000006.jpg",
        alt: "TET",
        description: "TET",
      },
      {
        type: "image",
        src: "000009.jpg",
        alt: "TET",
        description: "TET",
      },
      {
        type: "image",
        src: "000017.jpg",
        alt: "TET",
        description: "TET",
      },
      {
        type: "image",
        src: "000029.jpg",
        alt: "TET",
        description: "TET",
      },
      {
        type: "image",
        src: "000043.jpg",
        alt: "TET",
        description: "TET",
      },
      {
        type: "image",
        src: "000065.jpg",
        alt: "TET",
        description: "TET",
      },
      {
        type: "image",
        src: "000066.jpg",
        alt: "TET",
        description: "TET",
      },
    ],
    "artwork10-collection": [
      {
        type: "image",
        src: "finaldonhen.jpg",
        alt: "LONELINESS",
        description: "LONELINESS",
      },
      {
        type: "image",
        src: "Không có tiêu đề 5.jpg",
        alt: "LONELINESS",
        description: "LONELINESS",
      },
         {
        type: "image",
        src: "Không có tiêu đề 5.jpg",
        alt: "LONELINESS",
        description: "LONELINESS",
      },
         {
        type: "image",
        src: "Không có tiêu đề 7.jpg",
        alt: "LONELINESS",
        description: "LONELINESS",
      },
         {
        type: "image",
        src: "Không có tiêu đề 18.jpg",
        alt: "LONELINESS",
        description: "LONELINESS",
      },
         {
        type: "image",
        src: "ki.jpg",
        alt: "",
        description: "LONELINESS",
      },
    ],
  };
// Scroll-to-bottom functionality for "More" buttons
  const moreLinks = document.querySelectorAll(".more-link");
  if (moreLinks.length) {
    moreLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const scrollContainer = document.querySelector(".scroll-container");
        if (scrollContainer) {
          scrollContainer.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Animation for artwork cards in scroll container
  const cards = document.querySelectorAll(".animate-on-scroll");
  const scrollContainer = document.querySelector(".scroll-container");
  if (scrollContainer && cards.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { root: scrollContainer, threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
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

  // Function to render media (image, video, or iframe)
  const renderMedia = (media) => {
  if (!galleryMedia) return;
  galleryMedia.innerHTML = "";
  let mediaElement;

  if (media.type === "image") {
    mediaElement = document.createElement("img");
    mediaElement.src = media.src;
    mediaElement.alt = media.alt;
    mediaElement.setAttribute("aria-label", media.description);
  } else if (media.type === "video") {
    if (media.src.includes("youtube.com")) {
      mediaElement = document.createElement("iframe");
      mediaElement.src = media.src;
      mediaElement.allow = "autoplay; encrypted-media";
      mediaElement.allowFullscreen = true;
      mediaElement.setAttribute("aria-label", media.description);
    } else {
      mediaElement = document.createElement("video");
      mediaElement.src = media.src;
      mediaElement.alt = media.alt;
      mediaElement.controls = true;
      mediaElement.autoplay = true; // Giữ autoplay nếu cần
      // Xóa mediaElement.muted = true;
      mediaElement.loop = true;
      mediaElement.setAttribute("aria-label", media.description);
    }
  }

  if (mediaElement) {
    mediaElement.addEventListener("error", () => {
      galleryInfo.innerHTML = '<p>Error loading media.</p>';
    });
    galleryMedia.appendChild(mediaElement);
  }

  if (galleryInfo) {
    galleryInfo.innerHTML = `
      <h3 class="artwork-title">${media.title || "Untitled"}</h3>
      <p class="artwork-date">${media.date || ""}</p>
      <div class="artwork-description"><p>${media.description || "No description available"}</p></div>
    `;
  }
  
};
  // Pause any playing video
  const pauseCurrentVideo = () => {
    const currentVideo = galleryMedia?.querySelector("video");
    if (currentVideo) {
      currentVideo.pause();
    }
    const currentIframe = galleryMedia?.querySelector("iframe");
    if (currentIframe) {
      currentIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
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
            renderMedia(currentImages[0]);
            galleryModal.classList.add("show");
            setTimeout(() => {
              galleryModal
                .querySelector(".modal-content")
                ?.classList.add("show");
              const firstFocusable = galleryModal.querySelector(
                'button, [href], [tabindex]:not([tabindex="-1"])'
              );
              firstFocusable?.focus();
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

  // Focus trapping for gallery modal
  if (galleryModal) {
    const focusableElements = galleryModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    galleryModal.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  if (prevButton && nextButton) {
    const switchMedia = (newIndex) => {
      pauseCurrentVideo();
      currentIndex = newIndex;
      renderMedia(currentImages[currentIndex]);
    };

    prevButton.setAttribute("tabindex", "0");
    nextButton.setAttribute("tabindex", "0");

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
        document.body.focus();
      }, 500);
    };

    closeGalleryModal.addEventListener("click", closeModal);
    galleryModal.addEventListener("click", (event) => {
      if (event.target === galleryModal) {
        closeModal();
      }
    });
    galleryModal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
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
      document.querySelector(".project-description")
    ].filter(Boolean);

    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      elementsToToggle.forEach((el) => el.classList.add("dark-mode"));
    }

    themeToggle.addEventListener("click", () => {
      elementsToToggle.forEach((el) => el.classList.toggle("dark-mode"));
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
      );
    });
  }

  // About modal functionality
  const aboutLink = document.getElementById("about-link");
  const aboutModal = document.getElementById("about-modal");
  const closeModal = document.getElementById("close-modal");

  if (aboutLink && aboutModal && closeModal) {
    const aboutModalContent = aboutModal.querySelector(".modal-content");
    const focusableElements = aboutModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const toggleAboutModal = (show) => {
      if (show) {
        aboutModal.classList.add("show");
        setTimeout(() => {
          aboutModalContent?.classList.add("show");
          firstElement?.focus();
        }, 10);
      } else {
        aboutModalContent?.classList.remove("show");
        setTimeout(() => {
          aboutModal.classList.remove("show");
          document.body.focus();
        }, 500);
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
    aboutModal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleAboutModal(false);
      } else if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  // Contact modal functionality
  const contactLink = document.getElementById("contact-link");
  const contactModal = document.getElementById("contact-modal");
  const closeContactModal = document.getElementById("close-contact-modal");

  if (contactLink && contactModal && closeContactModal) {
    const contactModalContent = contactModal.querySelector(".modal-content");
    const focusableElements = contactModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const toggleContactModal = (show) => {
      if (show) {
        contactModal.classList.add("show");
        setTimeout(() => {
          contactModalContent?.classList.add("show");
          firstElement?.focus();
        }, 10);
      } else {
        contactModalContent?.classList.remove("show");
        setTimeout(() => {
          contactModal.classList.remove("show");
          document.body.focus();
        }, 500);
      }
    };

    contactLink.addEventListener("click", (event) => {
      event.preventDefault();
      toggleContactModal(true);
    });

    closeContactModal.addEventListener("click", () => toggleContactModal(false));
    contactModal.addEventListener("click", (event) => {
      if (event.target === contactModal) {
        toggleContactModal(false);
      }
    });
    contactModal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleContactModal(false);
      } else if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  // Enhanced particle animation
  const particleContainer = document.querySelector(".particle-container");
  if (particleContainer) {
    for (let i = 0; i < 15; i++) {
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
      particleContainer.appendChild(particle);
    }
  }
});
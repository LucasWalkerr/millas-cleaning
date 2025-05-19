document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = {
    whats1: [
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.05 PM.jpeg", caption: "Image 1" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.48 PM.jpeg", caption: "Image 2" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (1).jpeg", caption: "Image 3" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (2).jpeg", caption: "Image 4" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (3).jpeg", caption: "Image 5" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (4).jpeg", caption: "Image 6" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (5).jpeg", caption: "Image 7" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (6).jpeg", caption: "Image 8" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (7).jpeg", caption: "Image 9" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (8).jpeg", caption: "Image 10" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (9).jpeg", caption: "Image 11" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (10).jpeg", caption: "Image 12" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (11).jpeg", caption: "Image 13" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (12).jpeg", caption: "Image 14" },
      { src: "img/WhatsApp Image 2025-05-15 at 4.41.49 PM (13).jpeg", caption: "Image 15" },
      { src: "img/WhatsApp Image 2025-05-16 at 4.28.29 PM (1).jpeg", caption: "Image 16" },
      { src: "img/WhatsApp Image 2025-05-16 at 4.28.29 PM.jpeg", caption: "Image 17" },
      { src: "img/WhatsApp Image 2025-05-16 at 4.28.30 PM.jpeg", caption: "Image 18" }
    ]
  };

  let currentGallery = [];
  let currentIndex = 0;

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close-lightbox");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  // Proteção: se galeria estiver presente
  if (lightbox && lightboxImg && lightboxCaption && closeBtn && prevBtn && nextBtn) {
    document.querySelectorAll(".album-thumbnails").forEach(thumb => {
      thumb.addEventListener("click", () => {
        const galleryName = thumb.getAttribute("data-gallery");
        currentGallery = galleryImages[galleryName] || [];
        if (currentGallery.length > 0) {
          currentIndex = 0;
          showImage();
          lightbox.style.display = "flex";
        }
      });
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      showImage();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      showImage();
    });

    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.style.transform = "scale(1)";
    });

    lightboxImg.addEventListener("click", () => {
      lightboxImg.style.transform = lightboxImg.style.transform === "scale(2)" ? "scale(1)" : "scale(2)";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.style.transform = "scale(1)";
      }
    });

    function showImage() {
      const { src, caption } = currentGallery[currentIndex];
      lightboxImg.src = src;
      lightboxCaption.textContent = caption;
    }
  }

  // ✅ Menu hamburguer
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});

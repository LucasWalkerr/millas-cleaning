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
    ],
    whats2: [
      { src: "img/DSC00966.webp", caption: "Imagem 1" },
      { src: "img/DSC00967.webp", caption: "Imagem 2" },
      { src: "img/DSC00968.webp", caption: "Imagem 3" },
      { src: "img/DSC00969.webp", caption: "Imagem 4" },
      { src: "img/DSC00970.webp", caption: "Imagem 5" },
      { src: "img/DSC00971.webp", caption: "Imagem 6" },
      { src: "img/DSC00982.webp", caption: "Imagem 7" },
      { src: "img/DSC00983.webp", caption: "Imagem 8" },
      { src: "img/DSC00984.webp", caption: "Imagem 9" },
      { src: "img/DSC00985.webp", caption: "Imagem 10" },
      { src: "img/DSC00981.webp", caption: "Imagem 11" },
      { src: "img/DSC00980.webp", caption: "Imagem 12" },
      { src: "img/DSC00979.webp", caption: "Imagem 13" },
      { src: "img/DSC00978.webp", caption: "Imagem 14" },
      { src: "img/DSC00977.webp", caption: "Imagem 15" },
      { src: "img/DSC00976.webp", caption: "Imagem 16" },
      { src: "img/DSC00975.webp", caption: "Imagem 17" }
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

  // Show Image Function
  function showImage() {
    const { src, caption } = currentGallery[currentIndex];
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
  }

  // Navigation Arrows
  if (lightbox && lightboxImg && lightboxCaption && closeBtn && prevBtn && nextBtn) {
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

    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.style.transform = "scale(1)";
      }
    });
  }

  // Intersection Observer for Animations
  const animatedSections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.15 }
  );
  
  animatedSections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    observer.observe(section);
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const yOffset = -100; // Adjust for header offset
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  // Form Submission Handling
  const form = document.getElementById("contact-form");
  const formMsg = document.getElementById("form-msg");
  if (form && formMsg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form refresh
      formMsg.textContent = "Sending...";
      formMsg.style.color = "#1f3e34";

      // You can display a success message here after form submission
      setTimeout(() => {
        formMsg.textContent = "Your message has been sent!";
        formMsg.style.color = "#28a745";
      }, 2000); // Simulating form submission success
    });
  }

  // Burger Menu Toggle
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-links");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      const isExpanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isExpanded));
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }
});
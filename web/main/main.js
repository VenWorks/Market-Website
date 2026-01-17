// Navbar active state management
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to set active nav item
  function setActiveNav(targetSection) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.section === targetSection) {
        link.classList.add("active");
      }
    });
  }

  // Add click event listeners to nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = this.dataset.section;
      setActiveNav(section);

      // Add smooth transition effect
      this.style.transform = "scale(1.1)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Mobile menu toggle
  const hamburger = document.getElementById("hambuger");
  const navbarNav = document.querySelector(".navbar-nav");

  if (hamburger && navbarNav) {
    hamburger.addEventListener("click", function () {
      navbarNav.classList.toggle("active");
    });
  }
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animasi untuk logo di footer ketika dipencet
document.addEventListener("DOMContentLoaded", function () {
  const footerIcons = document.querySelectorAll(".footer .media-social i");

  // Tambahkan class sesuai jenis media sosial untuk warna
  footerIcons.forEach((icon) => {
    const iconName = icon.getAttribute("data-feather");
    if (iconName) {
      icon.classList.add(iconName);
    }
  });

  footerIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      // Hapus class animate-logo dari semua icon lain
      footerIcons.forEach((i) => i.classList.remove("animate-logo"));

      // Tambahkan class animate-logo ke icon yang dipencet
      this.classList.add("animate-logo");

      // Hapus class setelah animasi selesai (600ms)
      setTimeout(() => {
        this.classList.remove("animate-logo");
      }, 600);
    });
  });
});

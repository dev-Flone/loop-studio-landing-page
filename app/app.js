const sidebar = document.querySelector(".container__header__menu");
const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".container__header__nav");

function toggleSidebar() {
  hamburgerBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
  nav.classList.toggle("active");

  // Disable body scroll when nac is active
  if (nav.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "";
}

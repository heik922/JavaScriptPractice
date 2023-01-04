const menuBtn = document.querySelector(".menu-btn");
const navContainer = document.querySelector(["nav"]);
const container = document.getElementById("container");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

menuBtn.addEventListener("click", () => {
  navContainer.classList.toggle("nav-open");
  container.classList.toggle("container-all");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

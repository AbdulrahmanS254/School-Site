import * as bootstrap from "bootstrap";
import "@fortawesome/fontawesome-free/js/all.js";
import Swiper from "swiper";
import "swiper/css/bundle";
import "./assets/sass/style.scss";

// Changing the navbar background when scrolling
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// changing the background when the button is clicked
const navButton = document.getElementById("nav-btn");
navButton.addEventListener("click", () => {
    if (navButton.classList.contains("collapsed")) {
        navbar.classList.remove("bg-change");
    } else {
        navbar.classList.add("bg-change");
    }
});

// Students swiper
// const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     direction: "horizontal",
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: ".swiper-pagination",
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

const gallerySlider = new Swiper(".swiper.is-gallery", {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    speed: 300,
    grabCursor: true,
    parallax: true,
});

// Dark and Light Style
const control = document.getElementById("direction-toggle");
const wrapper = document.querySelector(".slideStyle");
const footer = document.querySelector(".footer");

control.addEventListener("click", () => {
    control.classList.toggle("darkStyle");
    wrapper.classList.toggle("darkStyle");
    footer.classList.toggle("darkStyle");
});

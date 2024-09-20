import * as bootstrap from "bootstrap";
import "@fortawesome/fontawesome-free/js/all.js";
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
const navButton = document.getElementById("nav-btn")
navButton.addEventListener("click", () => {
    if (navButton.classList.contains('collapsed')) {
        navbar.classList.remove('bg-change');
    } else {
        navbar.classList.add('bg-change');
    }
});

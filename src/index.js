import * as bootstrap from "bootstrap";
import "./assets/sass/style.scss";

const navbar = document.getElementById("navbar");

// Add an event listener for the scroll event
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // Adjust scrollY value to when you want the color change
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Import Bootstrap dynamically
const loadBootstrap = () => import("bootstrap");

// fontawesome
import "@fortawesome/fontawesome-free/js/all.js";

// Import main styles dynamically
const loadStyles = () => import("./assets/sass/style.scss");

// load all dependencies
const loadDependencies = async () => {
    await loadBootstrap();
    await loadStyles();
};

// Call the function to load dependencies
loadDependencies();
import Swiper from "swiper";

/*  ==============================================================  */
// Changing the navbar background when scrolling
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const home = document.getElementById("home");
window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        home.classList.add("active");
    } else {
        home.classList.remove("active");
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
const gallerySlider = new Swiper(".swiper.is-gallery", {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    speed: 300,
    grabCursor: true,
    parallax: true,
});

// footer copy-right year
let date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;

// دالة لحساب المعدل النهائي لكل صف
function calculateFinalGradeForRow(rowClass, finalGradeId) {
    const grades = document.querySelectorAll(rowClass);
    let total = 0;
    let count = 0;

    grades.forEach((grade) => {
        const value = parseFloat(grade.textContent); // تحويل الدرجة إلى رقم عشري
        if (!isNaN(value)) {
            // تأكد من أن القيمة رقم وليس NaN
            total += value; // جمع الدرجات
            count++; // زيادة عدد الدرجات الصحيحة
        }
    });

    const average = count > 0 ? total / count : 0; // حساب المعدل إذا كانت هناك درجات
    document.getElementById(finalGradeId).textContent = average.toFixed(2); // طباعة المعدل في الجدول
}

// حساب وطباعة المعدل النهائي لكل عمود
calculateFinalGradeForRow(".grade-1", "final-grade-1");
calculateFinalGradeForRow(".grade-2", "final-grade-2");
calculateFinalGradeForRow(".grade-3", "final-grade-3");

let slideIndex = 0;
let slides, dots;
showSlides();

function showSlides() {
    let i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slide");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("slide");
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 4 seconds
}

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManual(slideIndex = n);
}

function showSlidesManual(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slide");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("slide");
    dots[slideIndex - 1].className += " active";

}
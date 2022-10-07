let slideIndex = 1;
//showSlides(slideIndex);
autoSlides();
let test = document.getElementsByClassName("mainSlides");
console.log(test.length + " thing");

function plusSlides(num) {
    showSlides(slideIndex += num);
}

function currentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    let i;
    let slides = document.getElementsByClassName("mainSlides");
    let dots = document.getElementsByClassName("dot");
    if (num > slides.length) { slideIndex = 1 }
    if (num < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlides() {
    let i;
    let slides = document.getElementsByClassName("mainSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(autoSlides, 3000);
}
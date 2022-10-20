/*$(".fade_hov").hover(
    function () {
        $(this).siblings().addClass("fade");
    },
    function () {
        $(this).siblings().removeClass("fade");
    }
);*/

currentSlide("commentSlide", "dotsOne", 1);
currentSlide("commentSlideTwo", "dotsTwo", 1);
currentSlide("commentSlideThree", "dotsThree", 1);

function currentSlide(slideDivClass, dotClass, n) {
    console.log(slideDivClass, dotClass, n);
    let slides = document.getElementsByClassName(slideDivClass);
    let dots = document.getElementsByClassName(dotClass);
    showSlides(n, slides, dots);
}

function showSlides(n, slides, dots) {
    if (n > slides.length) {
        n = 1;
    }
    if (n < 1) {
        n = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}


let slideIndex = 0;

function slideShow() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++
    if (slideIndex > slides.length) slideIndex=1;

    slides[slideIndex-1].style.display = "block";

    setTimeout(slideShow, 2000);
}

slideShow()


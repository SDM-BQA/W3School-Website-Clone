// let slideIndex = 1

// let slides = document.getElementsByClassName("mySlide")
// slides[slideIndex - 1].style.display = "block"

// // Previous Next Control
// function plusSlides(n) {
//     showSlides(slideIndex += n)
// }

// // Current Image
// function currentSlide(n) {
//     showSlides(slideIndex = n)
// }

// function showSlides(n) {
//     let i;

//     let slides = document.getElementsByClassName("mySlide")
//     let dots = document.getElementsByClassName("dot")

//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < slides.length; i++) {
//         dots[i].className = dots.className.replace(" active", "")
//     }

//     slides[slideIndex - 1].style.display = "block"

//     dots[slideIndex - 1].className += " active"
// }

let menu = document.querySelector('#nav-menu')

let links = document.querySelector('.nav-links')

menu.addEventListener('click', () => {
    links.classList.toggle('display-vislble')
})
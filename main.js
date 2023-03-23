// Abrir el carro
const cartButton = document.getElementById('cart-button');
const cartContainer = document.querySelector('.cart-container');

cartButton.addEventListener('click', () => {
  cartContainer.classList.add('show-cart');
});

// Cerrar el carro
const closeCart =document.getElementById("close-cart");

closeCart.addEventListener("click", () => {
    cartContainer.classList.remove("show-cart")
})

// Slider

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector(".cart-container")
let cartClose = document.querySelector("#close-cart")

cartIcon.onclick = () => {
    cart.classList.add("active");
};
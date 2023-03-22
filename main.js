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




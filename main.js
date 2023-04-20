// Abrir el carro
const cartButton = document.getElementById('cart-button');
const cartContainer = document.querySelector('.cart-container');

cartButton.addEventListener('click', () => {
  cartContainer.classList.add('show-cart');
});

// Cerrar el carro
const closeCart = document.getElementById("close-cart");

closeCart.addEventListener("click", () => {
    cartContainer.classList.remove("show-cart")
});

// Agregar productos al carrito
const addToCartButtons = document.querySelectorAll('.bx-cart-add');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
  // Obtener la información del producto que se agregará al carrito
  const product = event.target.parentElement;
  const title = product.querySelector('.product-title').textContent;
  const price = product.querySelector('.price').textContent;

  // Llamar a la función que agrega el producto al carrito
  addToCart(title, price);
  updateCartTotal();
}

function addToCart(title, price) {
  // Crea un nuevo elemento de carro
  const cartRow = document.createElement('div');
  cartRow.classList.add('cart-card');

  // Estructura del carro
  const cartRowContents = `
    <div class="details-cart">
        
        <h2 class="cart-title">${title}</h2>
        <p class="cart-price">${price}</p>
        <input type="number" value="1" class="item-quantity">
    </div>
    <i class='bx bx-trash' onclick="removeCartItem(event)"></i>
  `;
  cartRow.innerHTML = cartRowContents;

  // Agrega el nuevo elemento al carro
  const cartItems = document.querySelector('.cart-box');
  const totalBox = document.querySelector('.total-box');
  cartItems.insertBefore(cartRow, totalBox);
}


// Eliminar productos del carrito
function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

// Contabilizar el total del precio de los productos en el carrito
function updateCartTotal() {
  const cartItemContainer = document.querySelector('.cart-box');
  const cartRows = cartItemContainer.querySelectorAll('.cart-card');
  let total = 0;
  cartRows.forEach(cartRow => {
    const priceElement = cartRow.querySelector('.cart-price');
    const quantityElement = cartRow.querySelector('.item-quantity');
    const price = parseFloat(priceElement.textContent.replace('$', ''));
    const quantity = quantityElement.value;
    total += price * quantity;
  });

  const totalElement = document.querySelector('.total-price');
  totalElement.textContent = `$${total}`;
}


const buyButton = document.querySelector('.buy-btn');
const cartBox = document.querySelector('.cart-box');
const cartItems = document.querySelectorAll('.product-card .bx-cart-add');
const totalPrice = document.querySelector('.total-price');

// Función para vaciar el carrito
function clearCart() {
  totalPrice.textContent = "$0";
  cartItems.forEach(item => item.style.color = "white");
}

// Función para mostrar la alerta y vaciar el carrito
function showThanksAndClearCart() {
  alert("¡Gracias por su compra!");
  clearCart();
}

// Evento de clic en el botón de compra
buyButton.addEventListener('click', showThanksAndClearCart);


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
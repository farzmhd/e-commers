// script.js

let cartCount = 0;

const buttons = document.querySelectorAll(".add-cart");

const cart = document.getElementById("cart-count");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    cartCount++;

    cart.innerText = cartCount;

    alert("Product added to cart!");

  });

});
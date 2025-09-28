const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "car holder item:001",
    image: "image/2.jpg",
    price: 21,
    description: "wholesale price $3.5",
  },
  {
    id: 2,
    name: "usb cable for iphone",
    image: "image/3.jpg",
    price: 10.5,
   description: "wholesale price $1.75",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    image: "image/05.jpg",
    price: 3.99,
   description: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    image: "image/008.jpg",
    price: 5.99,
    description: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    image: "image/37.jpg",
    price: 10.99,
    description: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    image: "image/38.jpg",
    price: 2.99,
    description: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    image: "image/92.jpg",
    price: 9.99,
    description: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    image: "image/101.jpg",
    price: 4.99,
    description: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    image: "image/102.jpg",
    price: 2.99,
    description: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    image: "image/105.jpg",
    price: 2.99,
    description: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    image: "image/106.jpg",
    price: 11.99,
    description: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/121.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 13,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/122.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 14,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/123.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 15,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/125.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 16,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/126.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 17,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/131.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 18,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/145.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 19,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/151.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 20,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/305.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 21,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/404.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 22,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/421.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 23,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/422.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 24,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/436.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 25,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/505.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 26,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/524.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 27,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/538.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 28,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/551.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 29,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/607.jpg",
    price: 12.99,
   description: "Cupcake",
  },

  {
    id: 30,
    name: "Lemon Cupcakes (4 Pack)",
    image: "image/608.jpg",
    price: 12.99,
   description: "Cupcake",
  },
];

products.forEach(
  ({ name, id, image,price, description}) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <img class="picture" src="${image}">
        <p class="dessert-price">$${price} (6 pack)</p>
        <p class="product-category">description: ${description}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  }
);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, image, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p class="letter">
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <img  width=45px height=55px src="${image}">
        <p>$${price} (6 pack)</p>
      </div>
      `;
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});


clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));

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
    name: "usb cable for iphone item:002",
    image: "image/3.jpg",
    price: 10.5,
   description: "wholesale price $1.75",
  
  },
  {
    id: 3,
    name: "usb cable for iphene/samsung item:003",
    image: "image/05.jpg",
    price: 13.5,
   description: "wholesale price $2.25",
 
  },
  {
    id: 4,
    name: "usb cable for samsung/iphone item:004",
    image: "image/008.jpg",
    price: 15,
    description: "wholesale price $2.5",
  
  },
  {
    id: 5,
    name: "car holder item:005",
    image: "image/37.jpg",
    price: 22.5,
    description: "wholesale price $3.75",
  },

  {
    id: 6,
    name: "usb cable for samsung/iphone item:006",
    image: "image/38.jpg",
    price: 13.5,
    description: "wholesale price $2.25",

  },
  {
    id: 7,
    name: "3-in-one car holder item:008",
    image: "image/92.jpg",
    price: 39,
    description: "wholesale price $6.5",
  
  },

  {
    id: 8,
    name: "2-in-1 wall charger item:009",
    image: "image/101.jpg",
    price: 18,
   description: "wholesale price $3",

  },
  {
    id: 9,
    name: "phone stand item:010",
    image: "image/102.jpg",
    price: 18,
   description: "wholesale price $3.00",

  },
  {
    id: 10,
    name: "bicycle phone holder item:012",
    image: "image/105.jpg",
    price: 27,
    description: "wholesale price $4.50",

  },
  {
    id: 11,
    name: "headphone for samsung/iphone item:013",
    image: "image/106.jpg",
    price: 18,
    description: "wholesale price $3",

  },
  {
    id: 12,
    name: "10ft cable for samsung/iphone item:015",
    image: "image/121.jpg",
    price: 13.5,
   description: "wholesale price $2.25",
  },

  {
    id: 13,
    name: "2-in-one charger item:016",
    image: "image/122.jpg",
    price: 16.5,
   description: "wholesale price $2.75",

  },

  {
    id: 14,
    name: "usb cale for iphone item:017",
    image: "image/123.jpg",
    price: 9,
   description: "wholesale price $1.50",

  },

  {
    id: 15,
    name: "usb cable for iphone item:018",
    image: "image/125.jpg",
    price: 10.5,
   description: "wholesale price $1.75",

  },

  {
    id: 16,
    name: "usb cable for samsung item:019",
    image: "image/126.jpg",
    price: 10.50,
   description: "wholesale price $1.75",

  },

  {
    id: 17,
    name: "usb cable for iphone item:020",
    image: "image/131.jpg",
    price: 16.5,
   description: "wholesale price $2.75",
  },

  {
    id: 18,
    name: "type-c to iphone item:021",
    image: "image/145.jpg",
    price: 16.5,
   description: "wholesale price $2.75",

  },

  {
    id: 19,
    name: "powerbank for phone item:022",
    image: "image/151.jpg",
    price: 75,
   description: "wholesale price $12",
  
  },

  {
    id: 20,
    name: "phone holder item:023",
    image: "image/305.jpg",
    price: 25.5,
  description: "wholesale price $4.25",

  },

  {
    id: 21,
    name: "2-in-1 charger item:024",
    image: "image/404.jpg",
    price: 22.5,
   description: "wholesale price $3.75",

  },

  {
    id: 22,
    name: "type-c to iphone item:025",
    image: "image/421.jpg",
    price: 13.5,
   description: "wholesale price $2.25",

  },

  {
    id: 23,
    name: "2-in-1 charger item:026",
    image: "image/422.jpg",
    price: 22.5,
   description: "wholesale price $3.75",
 
  },

  {
    id: 24,
    name: "type-c to iphone item:027",
    image: "image/436.jpg",
    price: 10.5,
   description: "wholesale price $1.75",
 
  },

  {
    id: 25,
    name: "type-c to iphone item:28",
    image: "image/505.jpg",
    price: 12,
   description: "wholesale price $2",

  },

  {
    id: 26,
    name: "headphone for ipad/samsung item:029",
    image: "image/524.jpg",
    price: 10.5,
   description: "wholesale price $1.75",

  },

  {
    id: 27,
    name: "car holder item:030",
    image: "image/538.jpg",
    price: 25.5,
   description: "wholesale price $4.25",

  },

  {
    id: 28,
    name: "powerbank for phone item:031",
    image: "image/551.jpg",
    price: 69,
   description: "wholesale price $11.5",

  },

  {
    id: 29,
    name: "headphone for samsung/iphone item:032",
    image: "image/607.jpg",
    price: 16.5,
   description: "wholesale price $2.75",

  },

  {
    id: 30,
    name: "headphone for iphone/samsung item:035",
    image: "image/609.jpg",
    price: 18,
   description: "wholesale price $3.00",

  },
  
 
];









 
products.forEach(
  ({ name, id, image,price, description,}) => {
    dessertCards.innerHTML +=  `
      
      <div class="dessert-card">
      
        <label for="name"><input type="hidden" value="${name}" name="name"></input></label>
        <img class="picture" src="${image}">
        <br>
        <label for="price"><input type="hidden" class="dessert-price"  name="price" value="$${price}"> (6 pack)</input></label>
        <input type="hidden" class="product-category">description: ${description}</input>
       
        
        <button 
          id="${id}" 
          class="btn add-to-cart-btn" type="submit" >Add to cart
        </button>
    
      </div>
    
      
    `
  });




class ShoppingCart   {
  constructor() {
    this.items = [];
    this.total = 0;
    // this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, image, price,} = product;
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

      <div  id="dessert${id}" class="product ">  
       <p type="hidden" class="letter" name="name">
          <span  class="product-count" id="product-count-for-id${id}"></span>${name}"
        </p>
        <img  width=45px height=55px src="${image}">
        <p type="hidden" id="price" name="price">$${price} (6 pack)</p>
       
        <hr>
        <br>
      
      </div>
      ` }


  getCounts() {
    return this.items.length ;
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
      // cartTaxes.textContent = 0;
      // cartTotal.textContent = 0;
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    // const tax = this.calculateTaxes(subTotal);
    this.total = subTotal; // tax
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    // cartTaxes.textContent = `$${tax.toFixed(2)}`;
    // cartTotal.textContent = `$${this.total.toFixed(2)}`;
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



    const now = new Date();
    const timestamp = now.getTime(); // Returns milliseconds since epoch
    console.log(timestamp);

    console.log(now)

function updateTime() {
        const now = new Date();
        document.getElementById("currentTime").textContent = now.toLocaleTimeString();
    }

    // Update the time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately

document.getElementById("data-submit").addEventListener("submit", async (e) => {
  e.preventDefault();
  // Get form data
  const formData = new FormData(e.target);
  const formValues = Object.fromEntries(formData);

  // Combine with cart
  const payload = {
    userInfo: formValues,
   
    cartItems: cart

  };


  console.log(payload)


  const res = await fetch("/api/checkout",
   { method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  document.write('<p>order detail:' + JSON.s(payload) + ' </form> </p>')
})



const timedate = document.getElementById("present-date")

const el = new Date()

const eltime = el.toDateString();

timedate.innerHTML ='<p>'+ eltime + '</p>'


 console.log(timedate)
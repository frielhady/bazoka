// ================= CART =================
const cart = [];
const orders = [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartBox = document.getElementById("cart");
const overlay = document.getElementById("cart-overlay");
const openCart = document.getElementById("open-cart");
const closeCart = document.getElementById("close-cart");

openCart.addEventListener("click", () => {
  cartBox.classList.add("active");
  overlay.classList.add("active");
});

closeCart.addEventListener("click", closeShoppingCart);
overlay.addEventListener("click", closeShoppingCart);

function closeShoppingCart() {
  cartBox.classList.remove("active");
  overlay.classList.remove("active");
}

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    count += item.quantity;

    const itemBox = document.createElement("div");
    itemBox.className = "cart-item";
    itemBox.innerHTML = `
      <div class="cart-item-info">
        <h4></h4>
        <p class="cart-item-price"></p>
        <div class="quantity">
          <button class="minus" type="button" aria-label="Decrease quantity">-</button>
          <span>${item.quantity}</span>
          <button class="plus" type="button" aria-label="Increase quantity">+</button>
        </div>
        <button class="remove" type="button">Remove</button>
      </div>
    `;
    itemBox.querySelector("h4").textContent = item.name;
    itemBox.querySelector(".cart-item-price").textContent =
      `${item.price * item.quantity} EGP`;

    itemBox.querySelector(".plus").addEventListener("click", () => {
      item.quantity++;
      updateCart();
    });

    itemBox.querySelector(".minus").addEventListener("click", () => {
      item.quantity--;
      if (item.quantity <= 0) {
        cart.splice(cart.indexOf(item), 1);
      }
      updateCart();
    });

    itemBox.querySelector(".remove").addEventListener("click", () => {
      cart.splice(cart.indexOf(item), 1);
      updateCart();
    });

    cartItems.appendChild(itemBox);
  });

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
  }

  cartTotal.textContent = total;
  cartCount.textContent = count;
}

// ================= SEARCH =================
const search = document.getElementById("search");
const searchButton = document.getElementById("search-btn");
const products = document.querySelectorAll(".product-card");

function filterProducts() {
  const text = search.value.trim().toLowerCase();
  products.forEach((product) => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    const description = product.querySelector("p").textContent.toLowerCase();
    product.style.display = name.includes(text) || description.includes(text) ? "" : "none";
  });
}

search.addEventListener("input", filterProducts);
searchButton.addEventListener("click", filterProducts);
search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") filterProducts();
});

// ================= ORDER NOW =================
document.querySelector(".hero button").addEventListener("click", () => {
  document.querySelector(".products-container").scrollIntoView({ behavior: "smooth" });
});

// ================= CHECKOUT / ORDERS =================
document.querySelector(".checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const orderSummary = cart.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    lineTotal: item.price * item.quantity
  }));
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  orders.push({
    number: orders.length + 1,
    items: orderSummary,
    total,
    date: new Date().toLocaleString()
  });

  alert(`Thank you for your order!\nOrder total: ${total} EGP`);
  cart.length = 0;
  updateCart();
  closeShoppingCart();
});

// ================= PROFILE DROPDOWN =================
const profileButton = document.getElementById("profile-button");
const profileMenu = document.getElementById("profile-menu");
const closeProfile = document.getElementById("close-profile");
const ordersLink = document.getElementById("orders-link");
const favoritesLink = document.getElementById("favorites-link");
const logoutButton = document.getElementById("logout-button");

profileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = profileMenu.classList.toggle("show");
  profileButton.setAttribute("aria-expanded", String(isOpen));
});

closeProfile.addEventListener("click", () => {
  profileMenu.classList.remove("show");
  profileButton.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".profile-choice")) {
    profileMenu.classList.remove("show");
    profileButton.setAttribute("aria-expanded", "false");
  }
});

profileMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

ordersLink.addEventListener("click", (event) => {
  event.preventDefault();
  profileMenu.classList.remove("show");
  profileButton.setAttribute("aria-expanded", "false");

  if (orders.length === 0) {
    alert("You haven't placed any orders yet!");
    return;
  }

  const message = orders.map((order) => {
    const items = order.items
      .map((item) => `${item.name} x${item.quantity}`)
      .join(", ");
    return `Order #${order.number} (${order.date})\n${items}\nTotal: ${order.total} EGP`;
  }).join("\n\n");

  alert(message);
});

// Favorites: no favorite buttons are currently displayed on the product cards.
favoritesLink.addEventListener("click", (event) => {
  event.preventDefault();
  profileMenu.classList.remove("show");
  profileButton.setAttribute("aria-expanded", "false");
  alert("You haven't added any favorites yet!");
});

logoutButton.addEventListener("click", () => {
  alert("You have been logged out!");
  profileMenu.classList.remove("show");
  profileButton.setAttribute("aria-expanded", "false");
});

// ================= COUNTRY =================
const countrySelect = document.getElementById("country");
const profileCountry = document.getElementById("profile-country");

countrySelect.addEventListener("change", () => {
  profileCountry.textContent = countrySelect.value;
});

// ================= CHANGE BRANCH =================
document.getElementById("change-branch").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Branch selection will be added soon!");
});

// ================= MENU PRODUCTS =================
const menuProducts = [
  {
    id: "offer1",
    name: "Chicken Meal Offer",
    description: "Chicken sandwich, fries and a drink.",
    price: 199,
    category: "offers",
    image: "./The Best Fried Chicken.jpg",
  },
  {
    id: "chicken1",
    name: "Classic Chicken Sandwich",
    description: "Crispy chicken with fresh lettuce and sauce.",
    price: 150,
    category: "chicken",
    image: "./Delicious Crispy Chicken Sandwich.jpg",
  },
  {
    id: "chicken2",
    name: "Spicy Chicken Sandwich",
    description: "Crispy chicken with a spicy sauce.",
    price: 165,
    category: "chicken",
    image: "./Delicious Crispy Chicken Sandwich.jpg",
  },
  {
    id: "chicken3",
    name: "Chicken Cheese Sandwich",
    description: "Crispy chicken with melted cheese.",
    price: 175,
    category: "chicken",
    image: "./Delicious Crispy Chicken Sandwich.jpg",
  },
  {
    id: "beef1",
    name: "Classic Beef Burger",
    description: "Beef burger with cheese and Bazooka sauce.",
    price: 165,
    category: "beef",
    image:
      "./Classic Cheeseburger with Fresh Lettuce _ Juicy Burger Recipe🍔🍔.jpg",
  },
  {
    id: "beef2",
    name: "Double Beef Burger",
    description: "A double beef burger with special sauce.",
    price: 220,
    category: "beef",
    image:
      "./Classic Cheeseburger with Fresh Lettuce _ Juicy Burger Recipe🍔🍔.jpg",
  },
  {
    id: "beef3",
    name: "Mushroom Beef Burger",
    description: "Beef burger with mushrooms and cheese.",
    price: 195,
    category: "beef",
    image:
      "./Classic Cheeseburger with Fresh Lettuce _ Juicy Burger Recipe🍔🍔.jpg",
  },
  {
    id: "family1",
    name: "Family Chicken Box",
    description: "A shareable chicken meal for the family.",
    price: 499,
    category: "family",
    image: "./download.jpg",
  },
  {
    id: "family2",
    name: "Family Mix Box",
    description: "Chicken and beef favorites to share.",
    price: 549,
    category: "family",
    image: "./download.jpg",
  },
  {
    id: "meal1",
    name: "Chicken Combo Meal",
    description: "Chicken sandwich, fries and a soft drink.",
    price: 210,
    category: "meals",
    image:
      "./Cheeseburger and fried chicken meal with french fries and a glass of cola on a wooden board_.jpg",
  },
  {
    id: "meal2",
    name: "Beef Combo Meal",
    description: "Beef burger, fries and a soft drink.",
    price: 225,
    category: "meals",
    image:
      "./Cheeseburger and fried chicken meal with french fries and a glass of cola on a wooden board_.jpg",
  },
  {
    id: "extra1",
    name: "French Fries",
    description: "Golden crispy fries.",
    price: 45,
    category: "extras",
    image:
      "./_Dipped in joy__🍟 #graphicdesign #logoglowup #logodesinger #digitalart #aiart #freelancework #freelancedesigner #femaleartist #frieslover #illustration #ineedlogo.jpg",
  },
  {
    id: "extra2",
    name: "Cheese Sauce",
    description: "Creamy cheese dipping sauce.",
    price: 20,
    category: "extras",
    image: "./Recipes Season.jpg",
  },
  {
    id: "extra3",
    name: "Extra Cheese",
    description: "Add extra cheese to your meal.",
    price: 15,
    category: "extras",
    image: "./Recipes Season.jpg",
  },
  {
    id: "app1",
    name: "Chicken Strips",
    description: "Crispy chicken strips.",
    price: 85,
    category: "appetizers",
    image: "./Amazing.jpg",
  },
  {
    id: "app2",
    name: "Onion Rings",
    description: "Crunchy golden onion rings.",
    price: 40,
    category: "appetizers",
    image: "./Amazing.jpg",
  },
  {
    id: "app3",
    name: "Coleslaw",
    description: "Fresh and creamy coleslaw.",
    price: 30,
    category: "appetizers",
    image: "./Amazing.jpg",
  },
  {
    id: "drink1",
    name: "Pepsi",
    description: "Chilled soft drink.",
    price: 25,
    category: "drinks",
    image: "./Amazing.jpg",
  },
  {
    id: "drink2",
    name: "7UP",
    description: "Chilled lemon-lime soft drink.",
    price: 25,
    category: "drinks",
    image: "./imges/FriedChicken.webp",
  },
  {
    id: "drink3",
    name: "Mirinda Orange",
    description: "Chilled orange soft drink.",
    price: 25,
    category: "drinks",
    image: "./imges/FriedChicken.webp",
  },
  {
    id: "drink4",
    name: "Mountain Dew",
    description: "Chilled citrus soft drink.",
    price: 30,
    category: "drinks",
    image: "./imges/FriedChicken.webp",
  },
  {
    id: "drink5",
    name: "Water",
    description: "A bottle of water.",
    price: 10,
    category: "drinks",
    image: "./imges/FriedChicken.webp",
  },
];

const categoryNames = {
  offers: "🔥 Today's Offers",
  chicken: "🍗 Chicken Sandwich",
  beef: "🍔 Beef Sandwich",
  family: "👨‍👩‍👧‍👦 Family Meals",
  meals: "🍟 Meals",
  extras: "➕ Extras",
  appetizers: "🥨 Appetizers",
  drinks: "🥤 Soft Drinks",
};

const productsContainer = document.getElementById("products-container");
const categoryHeading = document.getElementById("category-heading");
const categoryButtons = document.querySelectorAll(".categories button");
const search = document.getElementById("search");
const searchButton = document.getElementById("search-btn");
let currentCategory = "offers";

// ================= PRODUCT CARDS =================
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.category = product.category;
  card.innerHTML = `
    <img src="${product.image}" alt="">
    <h3></h3>
    <p></p>
    <div class="product-bottom">
      <span class="price"></span>
      <button class="add-cart" type="button">Add to Cart</button>
    </div>
  `;
  card.querySelector("img").alt = product.name;
  card.querySelector("h3").textContent = product.name;
  card.querySelector("p").textContent = product.description;
  card.querySelector(".price").textContent = `${product.price} EGP`;
  const addButton = card.querySelector(".add-cart");
  addButton.dataset.id = product.id;
  addButton.dataset.name = product.name;
  addButton.dataset.price = product.price;
  return card;
}

function renderProducts(category) {
  currentCategory = category;
  categoryHeading.innerHTML = `<h2>${categoryNames[category] || "Menu"}</h2>`;
  const filteredProducts = menuProducts.filter(
    (product) => product.category === category,
  );
  productsContainer.innerHTML = "";

  if (!filteredProducts.length) {
    productsContainer.innerHTML =
      '<p class="empty-cart">No products in this category yet.</p>';
    return;
  }
  filteredProducts.forEach((product) =>
    productsContainer.appendChild(createProductCard(product)),
  );
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    search.value = "";
    renderProducts(button.dataset.category);
    productsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

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
const checkoutButton = document.querySelector(".checkout-btn");

// Add the mobile number field inside the existing cart footer.
// No existing HTML IDs are changed.
const phoneField = document.createElement("div");
phoneField.className = "customer-phone-field";
phoneField.innerHTML = `
  <label for="customer-phone">Mobile number for your order</label>
  <input id="customer-phone" type="tel" inputmode="tel" autocomplete="tel"
    placeholder="e.g. 01012345678" maxlength="20" required>
  <small>Enter a number the restaurant can contact you on.</small>
`;
checkoutButton.parentElement.insertBefore(phoneField, checkoutButton);
const customerPhone = document.getElementById("customer-phone");

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

productsContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".add-cart");
  if (!button) return;

  const id = button.dataset.id;
  const name = button.dataset.name;
  const price = Number(button.dataset.price);
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) existingItem.quantity++;
  else cart.push({ id, name, price, quantity: 1 });
  updateCart();
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
      if (item.quantity <= 0) cart.splice(cart.indexOf(item), 1);
      updateCart();
    });
    itemBox.querySelector(".remove").addEventListener("click", () => {
      cart.splice(cart.indexOf(item), 1);
      updateCart();
    });
    cartItems.appendChild(itemBox);
  });

  if (!cart.length)
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
  cartTotal.textContent = total;
  cartCount.textContent = count;
}

// ================= SEARCH =================
function filterProducts() {
  const text = search.value.trim().toLowerCase();
  const filteredProducts = menuProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(text) ||
      product.description.toLowerCase().includes(text),
  );
  categoryHeading.innerHTML = `<h2>${text ? "🔎 Search Results" : categoryNames[currentCategory] || "Menu"}</h2>`;
  productsContainer.innerHTML = "";
  filteredProducts
    .filter((product) => text || product.category === currentCategory)
    .forEach((product) =>
      productsContainer.appendChild(createProductCard(product)),
    );

  if (!productsContainer.children.length) {
    productsContainer.innerHTML =
      '<p class="empty-cart">No matching products found.</p>';
  }
}
search.addEventListener("input", filterProducts);
searchButton.addEventListener("click", filterProducts);
search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") filterProducts();
});

// ================= ORDER NOW =================
document.querySelector(".hero button").addEventListener("click", () => {
  productsContainer.scrollIntoView({ behavior: "smooth" });
});

// ================= CHECKOUT / SEND ORDER TO WHATSAPP =================
checkoutButton.addEventListener("click", () => {
  if (!cart.length) {
    alert("Your cart is empty!");
    return;
  }

  const phone = customerPhone.value.trim();
  // Accept common Egyptian mobile formats, including +20 and 0020.
  const digits = phone.replace(/[^\d]/g, "");
  const validEgyptianMobile =
    /^(01[0125]\d{8}|201[0125]\d{8}|00201[0125]\d{8})$/.test(digits);

  if (!validEgyptianMobile) {
    alert(
      "Please enter a valid Egyptian mobile number, for example 01012345678.",
    );
    customerPhone.focus();
    return;
  }

  const orderSummary = cart.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    lineTotal: item.price * item.quantity,
  }));
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderNumber = orders.length + 1;
  const orderDate = new Date().toLocaleString();

  orders.push({
    number: orderNumber,
    items: orderSummary,
    total,
    date: orderDate,
    phone,
  });

  const messageLines = [
    "Hello! I'd like to place an order from the Bazooka menu.",
    "",
    `Order number: #${orderNumber}`,
    `Customer mobile: ${phone}`,
    "",
    ...orderSummary.map(
      (item) => `${item.name} x${item.quantity} — ${item.lineTotal} EGP`,
    ),
    "",
    `Total: ${total} EGP`,
    "",
    "Please confirm my order. Thank you!",
  ];

  // IMPORTANT: replace this example with the restaurant's real WhatsApp number.
  // Use country code + number only (no +, spaces, or dashes), e.g. 2010XXXXXXXX.
  const restaurantWhatsAppNumber = "01021278653";
  const whatsappURL = `https://wa.me/${restaurantWhatsAppNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`;

  // Open WhatsApp before clearing the cart so the order details are preserved.
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
  alert(
    "Your order is ready in WhatsApp. Please press Send in WhatsApp to submit it to the restaurant.",
  );

  cart.length = 0;
  updateCart();
  customerPhone.value = "";
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
profileMenu.addEventListener("click", (event) => event.stopPropagation());

ordersLink.addEventListener("click", (event) => {
  event.preventDefault();
  profileMenu.classList.remove("show");
  profileButton.setAttribute("aria-expanded", "false");
  if (!orders.length) {
    alert("You haven't placed any orders yet!");
    return;
  }
  const message = orders
    .map((order) => {
      const items = order.items
        .map((item) => `${item.name} x${item.quantity}`)
        .join(", ");
      return `Order #${order.number} (${order.date})\nMobile: ${order.phone}\n${items}\nTotal: ${order.total} EGP`;
    })
    .join("\n\n");
  alert(message);
});

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

// Show the first category on page load.
renderProducts("offers");

/* ===========================
   Saffron Table — JavaScript
   Simple interactions for the restaurant website
   =========================== */

// --- Welcome Greeting (Home Page) ---
// Uses prompt() to ask the visitor's name and displays a greeting
var welcomeBtn = document.getElementById("welcome-btn");
if (welcomeBtn) {
  welcomeBtn.addEventListener("click", function () {
    var name = prompt("What is your name?");
    if (name && name.trim() !== "") {
      document.getElementById("welcome-greeting").textContent =
        "Welcome to Saffron Table, " + name + "! We're glad you're here.";
    }
  });
}

// --- Featured Dishes (Home Page) ---
// Uses an array of objects and map() to render dish cards
var featuredContainer = document.getElementById("featured-dishes");
if (featuredContainer) {
  var featuredDishes = [
    {
      name: "Saffron Lamb Tagine",
      description: "Slow-cooked lamb with apricots and warm spices",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=400&h=300&fit=crop",
      badge: "Popular"
    },
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with lemon butter sauce",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      badge: "Popular"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      badge: ""
    },
    {
      name: "Quinoa Power Bowl",
      description: "Quinoa with avocado, chickpeas, and tahini dressing",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      badge: ""
    }
  ];

  var dishCards = featuredDishes.map(function (dish) {
    var badgeHtml = "";
    if (dish.badge) {
      badgeHtml = '<span class="badge">' + dish.badge + "</span>";
    }
    return (
      '<div class="card">' +
      '<img class="card-img" src="' + dish.image + '" alt="' + dish.name + '">' +
      '<div class="card-body">' +
      badgeHtml +
      '<h3 class="card-title">' + dish.name + "</h3>" +
      '<p class="card-text">' + dish.description + "</p>" +
      '<span class="card-price">' + dish.price + "</span>" +
      "</div></div>"
    );
  });

  featuredContainer.innerHTML = dishCards.join("");
}

// --- Bill Estimator (Menu Page) ---
// Simple calculation using prompt() to get quantities
var estimateBtn = document.getElementById("estimate-btn");
if (estimateBtn) {
  var menuItems = [
    { name: "Saffron Lamb Tagine", price: 24.99 },
    { name: "Honey Glazed Chicken", price: 18.99 },
    { name: "Grilled Salmon", price: 22.99 }
  ];

  estimateBtn.addEventListener("click", function () {
    var total = 0;
    for (var i = 0; i < menuItems.length; i++) {
      var qty = prompt(menuItems[i].name + " ($" + menuItems[i].price.toFixed(2) + ") — How many?");
      if (qty && Number(qty) > 0) {
        total = total + Number(qty) * menuItems[i].price;
      }
    }
    var resultDiv = document.getElementById("bill-result");
    if (resultDiv) {
      resultDiv.textContent = "Estimated Total: $" + total.toFixed(2);
    }
  });
}

// --- Reservation Form Handler ---
var reservationForm = document.getElementById("reservation-form");
if (reservationForm) {
  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.querySelector("#reservation-form input[type='text']");
    var phone = document.querySelector("#reservation-form input[type='tel']");

    if (!name.value.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!phone.value.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    alert("Reservation request sent successfully! We will contact you shortly to confirm.");
    reservationForm.reset();
  });
}

// --- Contact Form Handler ---
var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// --- Login Form Handler ---
var loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Welcome back! You have been signed in successfully.");
    loginForm.reset();
  });
}

// --- Register Form Handler ---
var registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var passwords = document.querySelectorAll("#register-form input[type='password']");
    if (passwords.length === 2 && passwords[0].value !== passwords[1].value) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert("Account created successfully! Welcome to Saffron Table.");
    registerForm.reset();
  });
}

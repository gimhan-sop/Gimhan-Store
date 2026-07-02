/* ======================================
   GIMHAN STORE - SCRIPT.JS
====================================== */

/* ===== SEARCH PLACEHOLDER ===== */

const search = document.getElementById("search");

if (search) {
    const words = [
        "Search Toys...",
        "Search Teddy Bears...",
        "Search Gift Items...",
        "Search Cars...",
        "Search Dolls..."
    ];

    let index = 0;

    setInterval(() => {
        search.placeholder = words[index];
        index = (index + 1) % words.length;
    }, 2000);
}

/* ===== CART ===== */

let cartCount = 0;
const cartNumber = document.getElementById("cart-count");

function addToCart() {
    cartCount++;

    if (cartNumber) {
        cartNumber.textContent = cartCount;

        cartNumber.style.transform = "scale(1.3)";

        setTimeout(() => {
            cartNumber.style.transform = "scale(1)";
        }, 300);
    }
}

/* ===== SMOOTH SCROLL ===== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ===== PAGE FADE ===== */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

/* ===== FEATURED PRODUCTS ===== */

const products = [
    {
        id: 1,
        name: "Luxury Flower Box",
        price: "Rs. 4,500",
        rating: "★★★★★",
        discount: "-10%",
        image: "assets/products/product1.jpg"
    },
    {
        id: 2,
        name: "Birthday Surprise Box",
        price: "Rs. 5,900",
        rating: "★★★★☆",
        discount: "-15%",
        image: "assets/products/product2.jpg"
    },
    {
        id: 3,
        name: "Romantic Rose Box",
        price: "Rs. 6,200",
        rating: "★★★★★",
        discount: "-20%",
        image: "assets/products/product3.jpg"
    },
    {
        id: 4,
        name: "Wedding Collection",
        price: "Rs. 7,500",
        rating: "★★★★★",
        discount: "-12%",
        image: "assets/products/product4.jpg"
    },
    {
        id: 5,
        name: "Kids Celebration Box",
        price: "Rs. 3,800",
        rating: "★★★★☆",
        discount: "-8%",
        image: "assets/products/product5.jpg"
    },
    {
        id: 6,
        name: "Premium Chocolate Box",
        price: "Rs. 4,900",
        rating: "★★★★★",
        discount: "-18%",
        image: "assets/products/product6.jpg"
    }
];

/* ===== LOAD PRODUCTS ===== */

function createProducts(containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    let html = "";

    products.forEach(product => {

        html += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <div class="rating">
                    ${product.rating}
                </div>

                <p class="price">
                    ${product.price}
                </p>

                <span class="discount">
                    ${product.discount}
                </span>

                <br><br>

                <button class="add-cart-btn">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add To Cart
                </button>

            </div>

        </div>
        `;
    });

    container.innerHTML = html;
}

/* ===== LOAD ALL SECTIONS ===== */

createProducts("productGrid");
createProducts("newArrivals");
createProducts("bestSelling");

/* ===== ADD TO CART ===== */

document.addEventListener("click", (e) => {

    if (e.target.closest(".add-cart-btn")) {
        addToCart();
        alert("Product Added To Cart");
    }
});

/* ===== WELCOME ===== */

console.log("Welcome To Gimhan Store ❤️");

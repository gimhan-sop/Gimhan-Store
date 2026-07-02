/* ======================================
   GIMHAN STORE - JAVASCRIPT
====================================== */

// Search Placeholder Animation

const search = document.getElementById("search");

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

index++;

if(index >= words.length){

index = 0;

}

},2000);


// Shopping Cart Counter

let cartCount = 0;

const cartNumber = document.getElementById("cart-count");

function addToCart(){

cartCount++;

cartNumber.innerHTML = cartCount;

cartNumber.style.transform="scale(1.4)";

setTimeout(()=>{

cartNumber.style.transform="scale(1)";

},300);

}


// Product Hover Animation

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// Smooth Scroll

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});


// Loading Animation

window.onload=function(){

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},200);

};


// Button Ripple Effect

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("btn")){

let circle=document.createElement("span");

circle.classList.add("ripple");

e.target.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

}

});


// Welcome Message

console.log("Welcome To Gimhan Store");

/* ===================================
   PRODUCT PAGE JAVASCRIPT
=================================== */

// Quantity

const minusBtn = document.querySelector(".quantity button:first-child");
const plusBtn = document.querySelector(".quantity button:last-child");
const qtyInput = document.querySelector(".quantity input");

if (minusBtn && plusBtn && qtyInput) {

minusBtn.onclick = () => {

let qty = parseInt(qtyInput.value);

if(qty > 1){

qtyInput.value = qty - 1;

}

};

plusBtn.onclick = () => {

let qty = parseInt(qtyInput.value);

qtyInput.value = qty + 1;

};

}


// Image Zoom

const mainImage = document.getElementById("mainImage");

if(mainImage){

mainImage.addEventListener("click",()=>{

if(mainImage.style.transform=="scale(1.8)"){

mainImage.style.transform="scale(1)";

}

else{

mainImage.style.transform="scale(1.8)";

}

});

}


// Buy Button

const buyBtn=document.querySelector(".buy-btn");

if(buyBtn){

buyBtn.onclick=()=>{

alert("Thank You For Shopping ❤️");

};

}


// Add To Cart

const cartBtn=document.querySelector(".cart-btn");

if(cartBtn){

cartBtn.onclick=()=>{

addToCart();

alert("Product Added To Cart");

};

}


// WhatsApp Button

const whatsapp=document.querySelector(".whatsapp-btn");

if(whatsapp){

whatsapp.href="https://wa.me/94770000000";

}


// Comment Button

const commentBtn=document.querySelector(".comment-box button");

if(commentBtn){

commentBtn.onclick=()=>{

let txt=document.querySelector(".comment-box textarea").value;

if(txt==""){

alert("Please Write Your Comment");

}

else{

alert("Thank You For Your Feedback ❤️");

document.querySelector(".comment-box textarea").value="";

}

};

}

/*=========================================
        FEATURED PRODUCTS
=========================================*/

const products = [
{
    id:1,
    name:"Luxury Flower Box",
    price:"Rs. 4,500",
    rating:"★★★★★",
    discount:"-10%",
    image:"assets/products/product1.jpg"
},
{
    id:2,
    name:"Birthday Surprise Box",
    price:"Rs. 5,900",
    rating:"★★★★☆",
    discount:"-15%",
    image:"assets/products/product2.jpg"
},
{
    id:3,
    name:"Romantic Rose Box",
    price:"Rs. 6,200",
    rating:"★★★★★",
    discount:"-20%",
    image:"assets/products/product3.jpg"
},
{
    id:4,
    name:"Wedding Collection",
    price:"Rs. 7,500",
    rating:"★★★★★",
    discount:"-12%",
    image:"assets/products/product4.jpg"
},
{
    id:5,
    name:"Kids Celebration Box",
    price:"Rs. 3,800",
    rating:"★★★★☆",
    discount:"-8%",
    image:"assets/products/product5.jpg"
},
{
    id:6,
    name:"Premium Chocolate Box",
    price:"Rs. 4,900",
    rating:"★★★★★",
    discount:"-18%",
    image:"assets/products/product6.jpg"
},
{
    id:7,
    name:"Luxury Teddy Box",
    price:"Rs. 5,500",
    rating:"★★★★★",
    discount:"-10%",
    image:"assets/products/product7.jpg"
},
{
    id:8,
    name:"Custom Premium Box",
    price:"Rs. 6,900",
    rating:"★★★★★",
    discount:"-25%",
    image:"assets/products/product8.jpg"
}
];

const productGrid = document.getElementById("productGrid");

function loadProducts(){

    let html = "";

    products.forEach(product=>{

        html += `
        <div class="product-card">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

                <span class="discount">${product.discount}</span>

                <button class="wishlist-btn">
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>

            <div class="product-info">

                <h3 class="product-name">${product.name}</h3>

                <div class="price">${product.price}</div>

                <div class="rating">${product.rating}</div>

                <button class="cart-btn">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add To Cart
                </button>

            </div>

        </div>
        `;

    });

    productGrid.innerHTML = html;

}

loadProducts();

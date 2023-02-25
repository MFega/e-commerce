const hamburger = document.getElementById("btn");
const close = document.getElementById("cancel");
const nav = document.querySelector(".nav-bar");
const cart = document.querySelector(".cart")
const cart2 =document.getElementById("cart")
 
hamburger.addEventListener("click", ()=>{
    nav.style.display = "block"
    close.style.display = "block"
    hamburger.style.display = "none"
})

close.addEventListener("click", ()=>{
    nav.style.display = "none"
    close.style.display = "none"
    hamburger.style.display = "block"
})

cart2.addEventListener("click", ()=>{
    cart.classList.toggle("active");
})



var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num){
    displaySlides(currentIndex += num)
}

function currentSlides(num){
    displaySlides(currentIndex = num)
}

function displaySlides(num){
    var x ;
    var slides = document.getElementsByClassName("slides");
    var thumb = document.getElementsByClassName("thumb");
    if(num > slides.length){
        currentIndex = 1
    }
    if(num < slides.length){
        currentIndex = slides.length
    }
    for(x = 0; x < slides.length; x++){
        slides[x].style.display = "none"
    }
    for(x = 0;x < thumb.length;x++){
        thumb[x].className = thumb[x].className.replace("active", "");
    }
    slides[currentIndex - 1].style.display = "block";
    thumb[currentIndex - 1].className += "active";
}
  
const items = document.getElementById("item")
function addItem(item){

const sum = parseInt(items.innerHTML) + item;
items.innerHTML = sum;

if(sum < 0){
    items.innerHTML = 0
}
}

const cartContainer = document.querySelector(".cart-container");
const itemNo = document.getElementById("item-no");
const btn = document.getElementById("button")
const three = document.getElementById("three");
const price =document.getElementById("price");
const empty = document.getElementById("empty")
btn.addEventListener("click", ()=>{
    three.innerHTML = items.innerHTML
    price.innerHTML = "$" + (items.innerHTML * 125.00);
    itemNo.innerHTML = items.innerHTML
    itemNo.style.display = "flex"; 
    empty.style.display = "none"
    cartContainer.style.display = "block"
})

  

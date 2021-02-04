const button = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const list = document.querySelector(".list");
button.addEventListener('click', ()=> {
    list.classList.toggle("resp-display-visible");
    navbar.classList.toggle("h-nav-height");
})
const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");
const micIconEl = document.querySelector(".mic-icon");
const inputEl = document.querySelector(".input");


magnifierEl.addEventListener("click", ()=>{
    searchBarContainerEl.classList.toggle("active")
    micIconEl.classList.toggle("active")
    inputEl.classList.toggle("active")

})
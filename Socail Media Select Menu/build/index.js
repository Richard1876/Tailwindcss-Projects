const menuEl = document.querySelector(".menu ");
const menuTextEl = document.querySelector(".menu p");

const socialListsEl = document.querySelector(".social-lists");
const arrowIconEl = document.querySelector(".fa-solid");
const liEls = document.querySelectorAll(".social-lists li")



menuEl.addEventListener("click", ()=>{
socialListsEl.classList.toggle("invisible");
arrowIconEl.classList.toggle("rotate-180")
})


liEls.forEach(liEl =>{
    liEl.addEventListener("click",()=>{
        menuTextEl.innerHTML = liEl.innerHTML
        socialListsEl.classList.add("invisible")
        arrowIconEl.classList.toggle("rotate-180")
    })
})
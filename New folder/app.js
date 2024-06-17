const hamburgerEl = document.getElementById("hamburger");
const sidebarListEl = document.querySelector(".sidebar-list");





hamburgerEl.addEventListener('click', () => {
    console.log('hh');
    sidebarListEl.classList.toggle('hidden')
    // sidebarListEl.style.display = "flex";

})

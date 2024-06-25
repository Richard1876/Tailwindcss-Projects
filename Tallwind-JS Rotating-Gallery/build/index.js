const ImageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0
let timer;

prevEl.addEventListener("click", () => {
x = x + 45;
clearTimeout(timer)

updateGallery()
})

  nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer)
    
    updateGallery()
    })

    function updateGallery() {
  ImageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`; 
   timer = setTimeout(()=>{
    x = - 45
    updateGallery()
  }, 3000)
}

updateGallery()




    
    




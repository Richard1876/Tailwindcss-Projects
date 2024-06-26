const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");



btnEl.addEventListener("click", ()=>{
    createPassword()
})

copyIconEl.addEventListener("click", ()=>{
    copyPassword(); 

    if (inputEl.value) {
        alertContainerEl.classList.remove("hidden")

    setTimeout(()=>{
        alertContainerEl.classList.add("hidden")
    }, 3000)
        
    }
    
})



function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
         alertContainerEl.innerText = password + "Copied!"

       
        
    }
    inputEl.value =  password
}



function copyPassword(){
    inputEl.select();
    
    navigator.clipboard.writeText(inputEl.value)
   
}

 


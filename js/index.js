//mobile navigation responsiveness
const links = document.querySelectorAll(".mobilenav_Link")
const mobileList = document.querySelector(".mobileList")

const menu = document.querySelector("#hamburger")
menu.addEventListener("click", () => { 
    mobileList.classList.toggle("show")
})

links.forEach((item) => {
        item.addEventListener("click", ()=> {
            mobileList.classList.remove("show")
        })
        
    })

//to play video on click of the button
const video = document.querySelector("#bg-video")
const playbtn = document.querySelector("#playbtn")
playbtn.addEventListener("click", () => {
        video.play()
})


const smallCircles = document.querySelector(".small-circles")
const boxItems = ["New York", "Carlifonia", "Alaska", "Sidney", "Dubia", "London", "Tokyo", "Dehli"]

boxItems.forEach((city) => {

   const itemBox  = document.createElement("p")
    itemBox.classList.add("item-box")
    itemBox.textContent = city

    
    smallCircles.appendChild(itemBox)
    
    
})
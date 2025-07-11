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


window.onscroll = function () {
  const navbar = document.querySelector(".desktop-nav");
  const mobile = document.querySelector(".mobile-nav")

  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
    mobile.classList.add("nav-scrolled")
  } else {
    navbar.classList.remove("nav-scrolled");
    mobile.classList.remove("nav-scrolled")
  }
};

const cards = [
    {
        image : "./assets/images/alaskagreenwich.png",
        title: "Alaska: Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
        review : "584 reviews",
        person : "per person"
    },
     {
        image : "./assets/images/thames.png",
        title: "Alaska: Vintage Double Decker Bus Tour & Thames ",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
        review : "584 reviews",
        person : "per person"
    },
    {
        image : "./assets/images/londonmagic.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at Boat",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
        review : "584 reviews",
        person : "per person"
    },
     {
        image : "./assets/images/afternoontea.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at Ark",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
        review : "584 reviews",
        person : "per person"
    },
]

const sectionCard = document.querySelector("#sectionCard")
const sectionCard2 = document.querySelector("#sectionCard2")

cards.forEach((cardItem) => {
    
    const createCard = () => {
        const card = document.createElement("div")
        card.classList.add("card")

        const cardImage = document.createElement("img")
        cardImage.classList.add("cardImage")
        cardImage.src = cardItem.image
        cardImage.alt = cardItem.title

        const cardHeading = document.createElement("h2")
        cardHeading.classList.add("cardHeading")
        cardHeading.textContent = cardItem.title

        const iconText = document.createElement("div")
        iconText.classList.add("iconText")

        const timeDiv = document.createElement("div")
        timeDiv.classList.add("timeDiv")
        const time = document.createElement("span")
        time.className = cardItem.icon1
        const timeText = document.createElement("p")
        timeText.textContent = cardItem.feature1

        const movementDiv = document.createElement("div")
        movementDiv.classList.add("movementDiv")
        const movement = document.createElement("span")
        movement.className = cardItem.icon2
        const movementText = document.createElement("p")
        movementText.textContent = cardItem.feature2

        const personDiv = document.createElement("div")
        personDiv.classList.add("personDiv")
        const person = document.createElement("span")
        person.className = cardItem.icon3
        const personText = document.createElement("p")
        personText.textContent = cardItem.feature3

        const ratingSection = document.createElement("div")
        ratingSection.classList.add("ratingSection")

        const ratePrice = document.createElement("div")
        ratePrice.classList.add("ratePrice")
        const rateDiv = document.createElement("div")
        rateDiv.classList.add("rateDiv")

        const ratingDiv = document.createElement("div")
        ratingDiv.classList.add("ratingDiv")

        const ratingCount = document.createElement("p")
        ratingCount.classList.add("ratingCount")
        ratingCount.textContent = cardItem.review

        for (let i = 0; i < 5; i++) {
            const ratings = document.createElement("i")
            ratings.className = cardItem.star
            ratings.addEventListener("click", () => {
                ratings.style.color = "#FFA432"
            })
            ratingDiv.appendChild(ratings)
        }

        const price = document.createElement("h5")
        price.classList.add("cardPrice")
        price.textContent = cardItem.price

        const perPerson = document.createElement("p")
        perPerson.classList.add("perPerson")
        perPerson.textContent = cardItem.person

        timeDiv.append(time, timeText)
        movementDiv.append(movement, movementText)
        personDiv.append(person, personText)
        iconText.append(timeDiv, movementDiv, personDiv)

        rateDiv.append(ratingDiv, ratingCount)
        ratePrice.append(price, perPerson)

        ratingSection.append(rateDiv, ratePrice)

        card.append(cardImage, cardHeading, iconText, ratingSection)

        return card
    }

    sectionCard2.appendChild(createCard());
    sectionCard.appendChild(createCard());
});


const posts = [
{
    image: "../assets/images/blog1.png",
    heading : "7 Signs and Symptoms of Iodine Deficiency",
    author : "../assets/images/author.png",
    name : "Jackie Moncada"
},
{
    heading : "How to Fix Your Sleep Schedule: 7 Easy Ways",
    image: "../assets/images/blog2.png",
    author : "../assets/images/author.png",
    name : "Jackie Moncada"
},

{
    heading : "10 Proven Health Benefits of Cinnamon", 
    image: "../assets/images/blog4.png",
    author : "../assets/images/author.png",
    name : "Jackie Moncada"
},
{
    heading : "11 Health Benefits of Turmeric and Curcumin",
    image: "../assets/images/blog3.png",
    author : "../assets/images/author.png",
    name : "Jackie Moncada"
},
]

const post = document.querySelector("#post")

posts.map((blog) => {

    const blogCard = document.createElement("div")
    blogCard.classList.add("blogCard")

    const blogImage = document.createElement("img")
    blogImage.src = blog.image
    blogImage.alt = blog.heading

    const blogHeading = document.createElement("h1")
    blogHeading.classList.add("blogHeading")
    blogHeading.textContent = blog.heading

    const authorDiv = document.createElement("div")
    authorDiv.classList.add("authorDiv")

    const blogAuthor = document.createElement("p")
    blogAuthor.classList.add("blogAuthor")
    blogAuthor.textContent = blog.name

    const authorPic = document.createElement("img")
    authorPic.src = blog.author

authorDiv.append(authorPic, blogAuthor)
blogCard.append(blogImage, authorDiv, blogHeading)
post.appendChild(blogCard)

})




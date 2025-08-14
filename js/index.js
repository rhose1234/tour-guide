document.addEventListener("DOMContentLoaded", () =>  {

  const destinationData = [
    {
        location : "Westminster to Greenwich London",
        date: "2025-08-07",
         guest: 10
    },
    {
      
        location : "Westminster to Greenwich New York",
        date: "2025-08-08",
         guest: 10
        
    },
    {
        location : "Westminster to Greenwich Alaska",
        date: "2025-08-09",
         guest: 10
    },
    {
        location : "Westminster to Greenwich Tokyo",
        date: "2025-08-10",
         guest: 10
        
    },
    {
       
        location : "Westminster to Greenwich River Sidney",
        date: "2025-08-11",
        guest: 10
        
    },
    {
        location : "Westminster to Greenwich Carlifonia",
        date: "2025-08-12",
        guest: 10
        
    },
    {
        location : "Westminster to Greenwich Dehli",
        date: "2025-08-13",
         guest: 10
        
    },
    {
        location : "Westminster to Greenwich Nigeria",
        date: "2025-08-14",
        guest: 10    
    },
    {
        location : "Westminster to Greenwich River Dubia",
         date: "2025-08-15",
         guest: 10
        
    },
    {
        location : "Westminster to Greenwich River Tokyo",
         date: "2025-08-16",
         guest: 10
        
    }
]

const locationSearch = document.querySelector("#locationSearch")
const locationInput = document.querySelector("#locationInput")
const guestInput = document.querySelector("#guestInput")
const dateInput = document.querySelector("#dateInput")
const resultsDiv =  document.querySelector("#results")
resultsDiv.textAlign = "center"

locationSearch.addEventListener("submit", (e) => {
  e.preventDefault();

  const locationInputValue = locationInput.value.trim();
  const guestInputValue = guestInput.value.trim();
  const dateInputValue = dateInput.value.trim();

if (locationInputValue === "" && guestInputValue === "" && dateInputValue === "") {
  resultsDiv.innerHTML = "one search at least";
  resultsDiv.style.color = "red";
  resultsDiv.style.fontWeight = "bold";
} else {

  const filteredResults = destinationData.filter((result) => {

  const locationMatch = result.location.toLowerCase().includes(locationInputValue.toLowerCase());

  const guestMatch = Number(guestInputValue) <= result.guest;

  const dateMatch = result.date === dateInputValue;

    return locationMatch && guestMatch && dateMatch;
  });

  if (filteredResults.length > 0) {
    resultsDiv.innerHTML = filteredResults.map(output => `
      <p><strong>${output.location}</strong> - ${output.guest} guests - ${output.date}</p> You can book now
    `).join("");

    resultsDiv.style.color = "green";
    resultsDiv.style.fontWeight = "bold";
    setTimeout(() => {
      window.location.href = "destination.html";
    }, 2000);

  } else {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    resultsDiv.style.color = "red";
    resultsDiv.style.fontWeight = "bold";
  }
}
locationSearch.reset()
})




//mobile navigation responsiveness
const links = document.querySelectorAll(".mobilenav_Link")
const mobileList = document.querySelector(".mobileList")
const body = document.body

const menu = document.querySelector("#hamburger")
menu.addEventListener("click", () => { 
    mobileList.classList.toggle("show")
      body.classList.toggle('no-scroll');

})

links.forEach((item) => {
        item.addEventListener("click", ()=> {
            mobileList.classList.remove("show")
        })
        
    })


    //onscroll navbar color change
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


//to play video on click of the button
// const video = document.querySelector("#bg-video")
// const playBtn = document.querySelector("#playBtn")

// playBtn.addEventListener("click", () => {
  
//     if (video.paused) {
//     video.play();
   
//   } else {
//     video.pause();
  
//   }
// })


const smallCircles = document.querySelector("#small-circles")
const boxItems = ["New York", "Carlifonia", "Alaska", "Sidney", "Dubia", "London", "Tokyo", "Dehli"]

boxItems.forEach((city) => {

   const itemBox  = document.createElement("p")
    itemBox.classList.add("item-box")
    itemBox.textContent = city

    
    smallCircles.appendChild(itemBox)
    
    
})



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
        title: "Alaska: Magic of London Tour with Afternoon Tea Boat",
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
        title: "Alaska: Magic of London Tour with Afternoon Tea Ark",
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

cards.forEach((cardItem, index) => {
    
    const createCard = () => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.addEventListener("click", () =>{
          window.location.href= "destination.html"
        })

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


const ratingCount = document.createElement("p");
ratingCount.classList.add("ratingCount");
ratingCount.textContent = cardItem.review;

const ratingDiv = document.createElement("div");
ratingDiv.classList.add("ratingDiv");

const stars = [];

for (let i = 0; i < 5; i++) {
  const star = document.createElement("i");
  star.className = cardItem.star 
  star.index = i;
  stars.push(star);

  star.addEventListener("click", () => {
    const clickedIndex = parseInt(i);
    console.log(clickedIndex)

    stars.forEach((item, index) => {
      item.style.color = index <= clickedIndex ? "#FFA432" : "#ccc";
    });
  });

  ratingDiv.appendChild(star);
}

ratingDiv.appendChild(ratingCount);
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

        return card;
    }
    if(index < 4){
      sectionCard.appendChild(createCard());
    }

     sectionCard2.appendChild(createCard());

     // to scroll carounsel on featured section
const scrollRight = document.querySelector("#scrollRight");
const scrollLeft = document.querySelector("#scrollLeft");
const scrollTime = 300;

scrollRight.addEventListener("click", () => {
  sectionCard2.scrollLeft -= scrollTime;
});

scrollLeft.addEventListener("click", () => {
  sectionCard2.scrollLeft += scrollTime;
});

    }  

);




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
    blogImage.classList.add("blogImage")

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



// signin and signup popup forms
const signinButton = document.querySelector("#signin")
const signinButtonMobile = document.querySelector("#signinMobile")

const signinForm = document.querySelector("#signinForm")
const signupForm = document.querySelector("#signupForm")

const signUpLink = document.querySelector("#signUpLink")
const signinLink = document.querySelector("#signinLink")
const pageContent = document.querySelector("#pageContent")
const closeBtn = document.querySelector("#closeBtn")
const closeBtn2 = document.querySelector("#closeBtn2")

signinButtonMobile.addEventListener("click", (e) => {
  e.preventDefault()
  signinForm.style.display = "block"
  signupForm.style.display = "none"
   pageContent.classList.add("blur")
})


signinButton.addEventListener("click", (e) => {
  e.preventDefault()
  signinForm.style.display = "block"
  signupForm.style.display = "none"
   pageContent.classList.add("blur")
})

signinLink.addEventListener("click", (e) => {
  e.preventDefault()
  signinForm.style.display = "block"
  signupForm.style.display = "none"
   pageContent.classList.add("blur")
})
signUpLink.addEventListener("click", (e) => {
  e.preventDefault()
  signupForm.style.display = "block"
  signinForm.style.display = "none"
   pageContent.classList.add("blur")
})


closeBtn.addEventListener("click", (e) => {
  e.preventDefault()

    pageContent.classList.remove('blur');
    signupForm.style.display = "none"
    signinForm.style.display = "none"
})

closeBtn2.addEventListener("click", (e) => {
  e.preventDefault()

    pageContent.classList.remove('blur');
    signupForm.style.display = "none"
    signinForm.style.display = "none"
})
    
      

//signup validation
  const registerForm = document.querySelector("#signupForm");

  const firstname = document.querySelector("#firstname-input");
  const lastname = document.querySelector("#lastname-input");
  const signupPassword = document.querySelector("#password-signup");
  const signupEmail = document.querySelector("#email-signup");

  const errorSignup = document.querySelector("#error-signup");

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const signupPasswordValue = signupPassword.value.trim();
    const signupEmailValue = signupEmail.value.trim();

    errorSignup.style.color = "red";
    errorSignup.style.fontSize = "14px";
    errorSignup.style.marginBottom = "10px"

     if(firstnameValue === "" ||
        lastnameValue === "" ||
        signupEmailValue === "" || 
        signupPasswordValue === "" ){
      errorSignup.textContent = "All fields required please"

    }
    else if (firstnameValue === "") {
      errorSignup.textContent = "Firstname cannot be empty";
    } 
    else if (lastnameValue === "") {
      errorSignup.textContent = "Lastname cannot be empty";
    } 
    else if (!emailPattern.test(signupEmailValue)) {
      errorSignup.textContent = "Enter a valid email address";
    } 
    else if (signupPasswordValue === ""){
       errorSignup.textContent = "Password cannot be empty"
    }
    else if (signupPasswordValue.length < 8) {
      errorSignup.textContent = "Password must be at least 8 characters long";
    } 
    else if (!passwordPattern.test(signupPasswordValue)) {
      errorSignup.textContent =
        "Password must include uppercase, lowercase, number, and special character.";
    } 
    else {
   
      errorSignup.style.color = "green";
      errorSignup.textContent = "Signup successful! Redirecting to Login page...";
       setTimeout(()=> {
      signinForm.style.display = "block"
      signupForm.style.display = "none"
    }, 2000)
     
     

 const signupData = {
      firstname : firstnameValue,
      lastname : lastnameValue,
      email : signupEmailValue,
      password : signupPasswordValue
    }
  localStorage.setItem("signupData", JSON.stringify(signupData));
registerForm.reset();
    }

   

  });

//signin validation
const loginForm = document.querySelector("#loginForm");
const password = document.querySelector("#password-input");
const email = document.querySelector("#email-input");

const signinError = document.querySelector("#error-signin");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const storedData = JSON.parse(localStorage.getItem("signupData"));

  const passwordValue = password.value.trim()
  const emailValue = email.value.trim()

  signinError.style.color = "red"
  signinError.style.fontSize = "15px"
  signinError.textContent = ""

  if (emailValue === "" || passwordValue === "") {
    signinError.textContent = "All fields required"
  } 
  else if (!storedData) {
    signinError.textContent = "User not found, please create an account"
  } 
  else if (
    emailValue !== storedData.email || 
    passwordValue !== storedData.password ) 
  {
    signinError.textContent = "Email or password is incorrect"
  } else {
    signinError.style.color = "green"
    signinError.textContent = "Login successful! redirecting to profile..."
    setTimeout(()=> {
    window.location.href = "./profile.html"
    }, 2000)
  }
})

const favourite = document.querySelector("#heartIcon")
const share = document.querySelector("#shareIcon")

favourite.addEventListener("click", () => {
    favourite.style.backgroundColor = "#FFDA32"
})

share.addEventListener("click", () => {
    share.style.backgroundColor = "#7BBCB0"
})


})
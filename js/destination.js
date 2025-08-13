
document.addEventListener("DOMContentLoaded", () => { 

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

const activitiesInfo = [
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activty1.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activity4.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activty3.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activity4.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activity5.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activty6.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activity7.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activity8.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
         review : "(584 reviews)",
        person : "per person"
        
    },
    {
        tag : "WATER ACTIVITIES",
        image : "./assets/images/activity9.png",
        title : "Westminster to Greenwich River Thames",
        feature1 : "Duration 2 hours",
        feature2 : "Transport Facility",
        feature3 : "Family Plan",
        icon1 : "fa-solid fa-clock",
        icon2 : "fa-solid fa-car-side",
        icon3 : "fa-solid fa-user-group",
        star : "fa-solid fa-star",
        price : "$35.00",
        review : "(584 reviews)",
        person : "per person"
        
    }
]

const destinationContainer = document.querySelector("#destinationContainer")

activitiesInfo.map((item) => {

const destinationCard = document.createElement("div")
destinationCard.classList.add("destinationCard")

destinationCard.addEventListener("click", () => {
    window.location.href = "tour.html"
})

const destinationItem = document.createElement("div")
destinationItem.classList.add("destinationItem")

const destinationImageContainer = document.createElement("div")
const destinationImage = document.createElement("img")
destinationImage.classList.add("destinationImage")
destinationImage.src = item.image

const destinationDetailsContainer = document.createElement("div")
destinationDetailsContainer.classList.add("destinationDetailsContainer")

const destinationActivity = document.createElement("div")
destinationActivity.classList.add("destinationActivity")

const destinationActivityText = document.createElement("p")
destinationActivityText.textContent =item.tag

const ratingContainer = document.createElement("div")
ratingContainer.classList.add("ratingContainer")

for(let i = 0; i < 5; i++){
const destinationActivityRating = document.createElement("i")
destinationActivityRating.className = item.star

ratingContainer.appendChild(destinationActivityRating)
destinationActivity.append(destinationActivityText, ratingContainer)


}

const activityReview = document.createElement("p")
activityReview.textContent = item.review


const destinationTitle = document.createElement("h1")
destinationTitle.textContent =item.title
destinationTitle.classList.add("destinationTitle")


const activityFeatures = document.createElement("div")
activityFeatures.classList.add("activityFeatures")

const activityFeature1 = document.createElement("div")
activityFeature1.classList.add("activityFeature")

const activityFeatureText1 = document.createElement("p")
activityFeatureText1.textContent = item.feature1

const activityFeatureIcon1 = document.createElement("i")
activityFeatureIcon1.className =item.icon1

const activityFeature2 = document.createElement("div")
activityFeature2.classList.add("activityFeature")

const activityFeatureText2 = document.createElement("p")
activityFeatureText2.textContent = item.feature2

const activityFeatureIcon2 = document.createElement("i")
activityFeatureIcon2.className =item.icon2

const activityFeature3 = document.createElement("div")
activityFeature3.classList.add("activityFeature")

const activityFeatureText3 = document.createElement("p")
activityFeatureText3.textContent = item.feature3

const activityFeatureIcon3 = document.createElement("i")
activityFeatureIcon3.className =item.icon3

const priceDiv = document.createElement("div")
priceDiv.classList.add("priceDiv")

const reviewTag = document.createElement("p")
reviewTag.classList.add("reviewTag")
reviewTag.textContent = item.review

const activityPrice = document.createElement("h4")
activityPrice.textContent = item.price
activityPrice.classList.add("activityPrice")


destinationContainer.appendChild(destinationCard)
destinationCard.appendChild(destinationItem)
priceDiv.append(activityPrice, reviewTag)
destinationItem.append(destinationImageContainer, destinationDetailsContainer, priceDiv)
destinationImageContainer.appendChild(destinationImage)


activityFeature1.append(activityFeatureIcon1, activityFeatureText1)
activityFeature2.append(activityFeatureIcon2, activityFeatureText2)
activityFeature3.append(activityFeatureIcon3, activityFeatureText3)

activityFeatures.append(activityFeature1, activityFeature2, activityFeature3)



destinationDetailsContainer.append(destinationActivity, destinationTitle, activityFeatures)
})

const LoadMoreBtn = document.createElement("button")
LoadMoreBtn.textContent = "Load More"
LoadMoreBtn.classList.add("loadMoreBtn")

destinationContainer.appendChild(LoadMoreBtn)


// food activities cards and section
const waterActivitiesDetails = [
    {
        image: "./assets/images/water1.png",
        activityTitle : "Alaska: Westminster to Greenwich River Thames",
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
        image: "./assets/images/water2.png",
        activityTitle : "Alaska: Vintage Double Decker Bus Tour & Thames ",
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
        image: "./assets/images/water3.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/water4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/water4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/water4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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

    }
]

const specialContainerCards = document.querySelector("#specialContainerCards")


waterActivitiesDetails.map((waterActivity) => {

const waterActivitiesCard = document.createElement("div")
waterActivitiesCard.classList.add("waterActivitiesCard")


const waterActivityImage = document.createElement("img")
waterActivityImage.src = waterActivity.image
waterActivityImage.classList.add("waterActivityImage")


const waterActivityHeading = document.createElement("h1")
waterActivityHeading.textContent = waterActivity.activityTitle
waterActivityHeading.classList.add("waterActivityHeading")

const waterActivityFeatures = document.createElement("div")
waterActivityFeatures.classList.add("waterActivityFeatures")

const waterFeature1 = document.createElement("div")
waterFeature1.classList.add("waterFeatures")

const waterFeaturesText1 = document.createElement("p")
waterFeaturesText1.textContent = waterActivity.feature1

const waterFeaturesIcon1 = document.createElement("i")
waterFeaturesIcon1.className = waterActivity.icon1

const waterFeature2 = document.createElement("div")
waterFeature2.classList.add("waterFeatures")

const waterFeaturesText2 = document.createElement("p")
waterFeaturesText2.textContent = waterActivity.feature2

const waterFeaturesIcon2 = document.createElement("i")
waterFeaturesIcon2.className = waterActivity.icon2

const waterFeature3 = document.createElement("div")
waterFeature3.classList.add("waterFeatures")

const waterFeaturesText3 = document.createElement("p")
waterFeaturesText3.textContent = waterActivity.feature3

const waterFeaturesIcon3 = document.createElement("i")
waterFeaturesIcon3.className = waterActivity.icon3

const ratingContainer = document.createElement("div")
ratingContainer.classList.add("ratingContainer")

const waterReviewDiv = document.createElement("div")
waterReviewDiv.classList.add("waterReviewDiv")

for(let rating = 0 ; rating <  5; rating++){
    const ratingIcon = document.createElement("i")
    ratingIcon.className = waterActivity.star
    waterReviewDiv.appendChild(ratingIcon)
}

const waterRatingNumber = document.createElement("p")
waterRatingNumber.textContent = waterActivity.review
waterRatingNumber.classList.add("waterRatingNumber")

const waterPrice = document.createElement("div")
waterPrice.classList.add("waterPrice")

const waterActivityPrice = document.createElement("h3")
waterActivityPrice.textContent = waterActivity.price
waterActivityPrice.classList.add("waterActivityPrice")

const waterPeopleAmount = document.createElement("p")
waterPeopleAmount.textContent = waterActivity.person
waterPeopleAmount.classList.add("waterPeopleAmount")




waterFeature1.append(waterFeaturesIcon1, waterFeaturesText1)
waterFeature2.append(waterFeaturesIcon2, waterFeaturesText2)
waterFeature3.append(waterFeaturesIcon3, waterFeaturesText3)
waterActivityFeatures.append(waterFeature1, waterFeature2, waterFeature3)
ratingContainer.appendChild(waterReviewDiv)
waterReviewDiv.appendChild(waterRatingNumber)

waterPrice.append(waterActivityPrice, waterPeopleAmount)
ratingContainer.append(waterReviewDiv, waterPrice)
waterActivitiesCard.append(waterActivityImage, waterActivityHeading, waterActivityFeatures, ratingContainer)
specialContainerCards.appendChild(waterActivitiesCard)


})
const scrollRight = document.querySelector("#scrollRight")
const scrollLeft = document.querySelector("#scrollLeft")
const scrollTime = 300

scrollRight.addEventListener("click", () => {
    specialContainerCards.scrollLeft -=  scrollTime
})

scrollLeft.addEventListener("click", () => {
    specialContainerCards.scrollLeft += scrollTime
})




const foodsActivitiesDetails = [
    {
        image: "./assets/images/water1.png",
        activityTitle : "Alaska: Westminster to Greenwich River Thames",
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
        image: "./assets/images/water2.png",
        activityTitle : "Alaska: Vintage Double Decker Bus Tour & Thames ",
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
        image: "./assets/images/water3.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/water4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/water4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/water4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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

    }
]

const specialFoodsContainerCards = document.querySelector("#specialFoodsContainerCards")


foodsActivitiesDetails.map((foodsActivity) => {

const foodsActivitiesCard = document.createElement("div")
foodsActivitiesCard.classList.add("foodsActivitiesCard")


const foodsActivityImage = document.createElement("img")
foodsActivityImage.src = foodsActivity.image
foodsActivityImage.classList.add("foodsActivityImage")


const foodsActivityHeading = document.createElement("h1")
foodsActivityHeading.textContent = foodsActivity.activityTitle
foodsActivityHeading.classList.add("foodsActivityHeading")

const foodsActivityFeatures = document.createElement("div")
foodsActivityFeatures.classList.add("foodsActivityFeatures")

const foodsFeature1 = document.createElement("div")
foodsFeature1.classList.add("foodsFeatures")

const foodsFeaturesText1 = document.createElement("p")
foodsFeaturesText1.textContent = foodsActivity.feature1

const foodsFeaturesIcon1 = document.createElement("i")
foodsFeaturesIcon1.className = foodsActivity.icon1

const foodsFeature2 = document.createElement("div")
foodsFeature2.classList.add("foodsFeatures")

const foodsFeaturesText2 = document.createElement("p")
foodsFeaturesText2.textContent = foodsActivity.feature2

const foodsFeaturesIcon2 = document.createElement("i")
foodsFeaturesIcon2.className = foodsActivity.icon2

const foodsFeature3 = document.createElement("div")
foodsFeature3.classList.add("foodsFeatures")

const foodsFeaturesText3 = document.createElement("p")
foodsFeaturesText3.textContent = foodsActivity.feature3

const foodsFeaturesIcon3 = document.createElement("i")
foodsFeaturesIcon3.className = foodsActivity.icon3

const ratingfoodsContainer = document.createElement("div")
ratingfoodsContainer.classList.add("ratingfoodsContainer")

const foodsReviewDiv = document.createElement("div")
foodsReviewDiv.classList.add("foodsReviewDiv")

for(let rating = 0 ; rating <  5; rating++){
    const foodsratingIcon = document.createElement("i")
    foodsratingIcon.className = foodsActivity.star
    foodsReviewDiv.appendChild(foodsratingIcon)
}

const foodsRatingNumber = document.createElement("p")
foodsRatingNumber.textContent = foodsActivity.review
foodsRatingNumber.classList.add("foodsRatingNumber")

const foodsPrice = document.createElement("div")
foodsPrice.classList.add("foodsPrice")

const foodsActivityPrice = document.createElement("h3")
foodsActivityPrice.textContent = foodsActivity.price
foodsActivityPrice.classList.add("foodsActivityPrice")

const foodsPeopleAmount = document.createElement("p")
foodsPeopleAmount.textContent = foodsActivity.person
foodsPeopleAmount.classList.add("foodsPeopleAmount")


foodsFeature1.append(foodsFeaturesIcon1, foodsFeaturesText1)
foodsFeature2.append(foodsFeaturesIcon2, foodsFeaturesText2)
foodsFeature3.append(foodsFeaturesIcon3, foodsFeaturesText3)
foodsActivityFeatures.append(foodsFeature1, foodsFeature2, foodsFeature3)
ratingfoodsContainer.appendChild(foodsReviewDiv)
foodsReviewDiv.appendChild(foodsRatingNumber)

foodsPrice.append(foodsActivityPrice, foodsPeopleAmount)
ratingfoodsContainer.append(foodsReviewDiv, foodsPrice)
foodsActivitiesCard.append(foodsActivityImage, foodsActivityHeading, foodsActivityFeatures, ratingfoodsContainer)
specialFoodsContainerCards.appendChild(foodsActivitiesCard)


})
const scrollfoodsRight = document.querySelector("#foodscrollRight")
const scrollfoodsLeft = document.querySelector("#foodscrollLeft")
const scrollfoodsTime = 300

scrollfoodsRight.addEventListener("click", () => {
    specialFoodsContainerCards.scrollLeft +=  scrollfoodsTime
    
})

scrollfoodsLeft.addEventListener("click", () => {
    specialFoodsContainerCards.scrollLeft -= scrollfoodsTime
})


// river activity cards
const riverActivitiesDetails = [
    {
        image: "./assets/images/river1.png",
        activityTitle : "Alaska: Westminster to Greenwich River Thames",
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
        image: "./assets/images/river2.png",
        activityTitle : "Alaska: Vintage Double Decker Bus Tour & Thames ",
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
        image: "./assets/images/river3.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/river4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/river2.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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
        image: "./assets/images/river4.png",
        activityTitle : "Alaska: Magic of London Tour with Afternoon Tea at ",
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

    }
]

const riverContainerCards = document.querySelector("#riverContainerCards")


riverActivitiesDetails.map((riverActivity) => {

const riverActivitiesCard = document.createElement("div")
riverActivitiesCard.classList.add("riverActivitiesCard")


const riverActivityImage = document.createElement("img")
riverActivityImage.src = riverActivity.image
riverActivityImage.classList.add("riverActivityImage")


const riverActivityHeading = document.createElement("h1")
riverActivityHeading.textContent = riverActivity.activityTitle
riverActivityHeading.classList.add("riverActivityHeading")

const riverActivityFeatures = document.createElement("div")
riverActivityFeatures.classList.add("riverActivityFeatures")

const riverFeature1 = document.createElement("div")
riverFeature1.classList.add("riverFeatures")

const riverFeaturesText1 = document.createElement("p")
riverFeaturesText1.textContent = riverActivity.feature1

const riverFeaturesIcon1 = document.createElement("i")
riverFeaturesIcon1.className = riverActivity.icon1

const riverFeature2 = document.createElement("div")
riverFeature2.classList.add("riverFeatures")

const riverFeaturesText2 = document.createElement("p")
riverFeaturesText2.textContent = riverActivity.feature2

const riverFeaturesIcon2 = document.createElement("i")
riverFeaturesIcon2.className = riverActivity.icon2

const riverFeature3 = document.createElement("div")
riverFeature3.classList.add("riverFeatures")

const riverFeaturesText3 = document.createElement("p")
riverFeaturesText3.textContent = riverActivity.feature3

const riverFeaturesIcon3 = document.createElement("i")
riverFeaturesIcon3.className = riverActivity.icon3

const ratingriverContainer = document.createElement("div")
ratingriverContainer.classList.add("ratingriverContainer")

const riverReviewDiv = document.createElement("div")
riverReviewDiv.classList.add("riverReviewDiv")

for(let rating = 0 ; rating <  5; rating++){
    const riverratingIcon = document.createElement("i")
    riverratingIcon.className = riverActivity.star
    riverReviewDiv.appendChild(riverratingIcon)
}

const riverRatingNumber = document.createElement("p")
riverRatingNumber.textContent = riverActivity.review
riverRatingNumber.classList.add("riverRatingNumber")

const riverPrice = document.createElement("div")
riverPrice.classList.add("riverPrice")

const riverActivityPrice = document.createElement("h3")
riverActivityPrice.textContent = riverActivity.price
riverActivityPrice.classList.add("riverActivityPrice")

const riverPeopleAmount = document.createElement("p")
riverPeopleAmount.textContent = riverActivity.person
riverPeopleAmount.classList.add("riverPeopleAmount")


riverFeature1.append(riverFeaturesIcon1, riverFeaturesText1)
riverFeature2.append(riverFeaturesIcon2, riverFeaturesText2)
riverFeature3.append(riverFeaturesIcon3, riverFeaturesText3)
riverActivityFeatures.append(riverFeature1, riverFeature2, riverFeature3)
ratingriverContainer.appendChild(riverReviewDiv)
riverReviewDiv.appendChild(riverRatingNumber)

riverPrice.append(riverActivityPrice, riverPeopleAmount)
ratingriverContainer.append(riverReviewDiv, riverPrice)
riverActivitiesCard.append(riverActivityImage, riverActivityHeading, riverActivityFeatures, ratingriverContainer)
riverContainerCards.appendChild(riverActivitiesCard)


})
const scrollriverRight = document.querySelector("#riverscrollRight")
const scrollriverLeft = document.querySelector("#riverscrollLeft")
const scrollriverTime = 300

scrollriverRight.addEventListener("click", () => {
    riverContainerCards.scrollLeft +=  scrollriverTime
    
})

scrollriverLeft.addEventListener("click", () => {
    riverContainerCards.scrollLeft -= scrollriverTime
})


// stories section

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

// /signin and signup popups

// signin and signup popup forms
const signinButton = document.querySelector("#signin")
const signinForm = document.querySelector("#signinForm")
const signupForm = document.querySelector("#signupForm")
const signUpLink = document.querySelector("#signUpLink")
const signinLink = document.querySelector("#signinLink")
const pageContent = document.querySelector("#pageContent")
const closeBtn = document.querySelector("#closeBtn")
const closeBtn2 = document.querySelector("#closeBtn2")


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
       
})
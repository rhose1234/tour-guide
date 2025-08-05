

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
        review : "(584 reviews)",
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
        review : "(584 reviews)",
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
        review : "(584 reviews)",
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
        review : "(584 reviews)",
        person : "per person"

    }
]

const specialContainerCards = document.querySelector("#specialContainerCards")


waterActivitiesDetails.map((waterActivity) => {

const waterActivitiesCard = document.createElement("div")
waterActivitiesCard.classList.add("waterActivitiesCard")


const waterActivityImage = document.createElement("img")
waterActivityImage.src = waterActivity.image

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
    waterReviewDiv.append(ratingIcon)
}

const waterRatingNumber = document.createElement("p")
waterRatingNumber.textContent = waterActivity.review

const waterPrice = document.createElement("div")
waterPrice.classList.add("waterPrice")

const waterActivityPrice = document.createElement("h3")
waterActivityPrice.textContent = waterActivity.price

const waterPeopleAmount = document.createElement("p")
waterPeopleAmount.textContent = waterActivity.person




waterFeature1.append(waterFeaturesIcon1, waterFeaturesText1)
waterFeature2.append(waterFeaturesIcon2, waterFeaturesText2)
waterFeature3.append(waterFeaturesText3, waterFeaturesIcon3)
waterActivityFeatures.append(waterFeature1, waterFeature2, waterFeature3)
ratingContainer.appendChild(waterReviewDiv)
waterReviewDiv.appendChild(waterRatingNumber)
waterPrice.append(waterActivityPrice, waterPeopleAmount)
ratingContainer.append(waterReviewDiv, waterPrice)
waterActivitiesCard.append(waterActivityImage, waterActivityHeading, waterActivityFeatures, ratingContainer)
specialContainerCards.appendChild(waterActivitiesCard)





})






       

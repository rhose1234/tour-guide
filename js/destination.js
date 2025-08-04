

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
destinationActivity.appendChild(destinationActivityRating)
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

const activityPrice = document.createElement("h4")
activityPrice.textContent = item.price




destinationContainer.appendChild(destinationCard)
destinationCard.appendChild(destinationItem)
destinationItem.append(destinationImageContainer, destinationDetailsContainer, activityPrice)
destinationImageContainer.appendChild(destinationImage)


activityFeature1.append(activityFeatureIcon1, activityFeatureText1)
activityFeature2.append(activityFeatureIcon2, activityFeatureText2)
activityFeature3.append(activityFeatureIcon3, activityFeatureText3)

activityFeatures.append(activityFeature1, activityFeature2, activityFeature3)



destinationDetailsContainer.append(destinationActivity, destinationTitle, activityFeatures)
destinationActivity.appendChild(destinationActivityText)







})
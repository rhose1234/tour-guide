//for uploading image
const profileImage = document.querySelector("#profileImage")
const uploadImg = document.querySelector("#uploadImg")

uploadImg.onchange = () => {
  profileImage.src = URL.createObjectURL(uploadImg.files[0])
}



const loggedUser = JSON.parse(localStorage.getItem("signupData"));

const profileName = document.querySelector("#profileName");
const profileUser = document.createElement("h3");

profileUser.classList.add("profileUser");

if (loggedUser) {
  profileUser.textContent = `Hello, ${loggedUser.lastname} ${loggedUser.firstname}`;
} else {
  profileUser.textContent = "Hello, Guest";
}

profileName.appendChild(profileUser);



//personal information form validation
const profileFullname = document.querySelector("#profileFullname")

  if(loggedUser){
   profileFullname.value = `${loggedUser.lastname} ${loggedUser.firstname}`
}

const infoForm = document.querySelector("#infoForm")

const profileDate = document.querySelector("#profileDate")
const profileNumber = document.querySelector("#profileNumber")
const profileLocation = document.querySelector("#profileLocation")
const errorMessage = document.querySelector("#infoFormError")

infoForm.onsubmit = (e) => {
  e.preventDefault()


  const profileFullnameValue = profileFullname.value.trim()
  const profileDateValue = profileDate.value
  const profileNumberValue = profileNumber.value.trim()
  const profileLocationValue = profileLocation.value.trim()

 

  console.log(profileFullname)

  errorMessage.textContent = ""
  errorMessage.style.fontSize = "14px"
  errorMessage.style.margin = "10px 0px"
  errorMessage.style.color = "red"

  if(profileFullnameValue === "" || 
    profileDateValue === "" ||
    profileNumberValue === "" ||
    profileLocationValue === ""){
      errorMessage.textContent = "All fields required"
    }
    else if(profileNumberValue.length < 11){
      errorMessage.textContent = "Phone number must be 11 digits"
    }
    else{
      errorMessage.textContent = "Personal information saved successfully"
      errorMessage.style.color = "green"
      setTimeout(() => {
      errorMessage.textContent = ""
      }, 2000)
    

    const location = document.querySelector("#location")
    location.textContent = profileLocationValue

    const birthday = document.querySelector("#birthday")
    birthday.textContent = profileDateValue
    profileDateValue.readOnly = true
    profileLocationValue.readOnly = true
    profileNumberValue.readOnly = true
    profileLocationValue.readOnly = true
    } 

    let updatedData = {...loggedUser,
    fullname : profileFullnameValue,
    birthday : profileDateValue,
    location : profileLocationValue
  }
  localStorage.setItem("signupData", JSON.stringify(updatedData))

}


//security form validation

const securityForm = document.querySelector("#securityForm")
const securityEmail = document.querySelector("#securityEmail")
const securityPassword = document.querySelector("#securityPassword")
const confirmPassword = document.querySelector("#securityPassword2")
const securityError = document.querySelector("#securityError")

securityForm.onsubmit = (e) => {
  e.preventDefault()

  const securityEmailValue = securityEmail.value.trim()
  const securityPasswordValue = securityPassword.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,12}$/;


  securityError.style.color ="red"
  securityError.style.fontSize = "16px"
  securityError.textContent = ""

  if(securityEmailValue === "" ||
    securityPasswordValue === "" ||
    confirmPasswordValue === ""){
    securityError.textContent = "All fields required"
  }
  else if (!passwordRegex.test(securityPasswordValue)){
    securityError.textContent = "Password must include at least one uppercase, one lowercase, one number, one special character, and be 8-12 characters long."
  }
  else if(securityPasswordValue !== confirmPasswordValue){
    securityError.textContent = "Password does not match"
  }
  else{
     securityError.textContent = "Information saved!!"
      securityError.style.color = "green"
    setTimeout( () => {
      securityError.textContent = ""
    }, 2000)
    securityEmailValue.readOnly = true
    securityPasswordValue.readOnly = true
    confirmPasswordValue.readOnly = true
  }

  let updatedData = {...loggedUser,
    profileEmail : securityEmailValue,
    password : securityPasswordValue
  }
  localStorage.setItem("signupData", JSON.stringify(updatedData))

}

const profileForm = document.querySelector("#profileForm")
const historyBtn = document.querySelector("#historyBtn")
const profileTable = document.querySelector("#profileTable")

historyBtn.addEventListener("click", (e) => {
  e.preventDefault()

  profileForm.style.display = "none"
  profileTable.style.display = "flex"

  const td1 = document.querySelector("#td1");
  const td2 = document.querySelector("#td2");
  const td3 = document.querySelector("#td3");
  const td4 = document.querySelector("#td4");
  const td5 = document.querySelector("#td5");

  

  
  const approve = document.createElement("span");
  approve.textContent = "Approved";
  approve.style.color = "green";

  td1.textContent = `${loggedUser.lastname} ${loggedUser.firstname}`;
  td2.textContent = loggedUser.profileEmail ;
  td3.textContent = loggedUser.location ;
  td4.textContent = "$35";

  td5.textContent = approve; 
  td5.appendChild(approve);

  

  
}) 



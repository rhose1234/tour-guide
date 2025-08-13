document.addEventListener("DOMContentLoaded",  () => {

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

const subscribeForm = document.querySelector("#subscribeForm")
const userEmail = document.querySelector("#userEmail")
const errorMsg = document.querySelector("#errorMsg")


errorMsg.textContent = ""
errorMsg.style.color = "red"
errorMsg.style.fontSize = "14px"
errorMsg.style.marginBottom = "10px"
errorMsg.style.textAlign = "center"


subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const userEmailValue = userEmail.value.trim()

  if(userEmailValue === ""){
   errorMsg.textContent = "Please Enter Your Email Address to subscribe"
  }
  else{
    errorMsg.style.color = "green"
    errorMsg.textContent = "Thank You For Subscribing 😇, Flex on"

    setTimeout(()=> {
      errorMsg.textContent = ""
    }, 2000)
  }

  subscribeForm.reset()
})

})
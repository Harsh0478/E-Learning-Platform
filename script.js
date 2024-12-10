// Login Page 
const login = document.querySelector(".main-container");
const productpage = document.querySelector(".wrapper");
const loginbtn = document.querySelector("#login-btn");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");



login.classList.add("active");
if(sessionStorage.getItem('login')=== 'true'){
    login.classList.remove("active");
    productpage.classList.add("active");
}

loginbtn.addEventListener('click', ()=>{
    event.preventDefault();
    if (email.value === "harshrathod7798@gmail.com" && pass.value === "Pass@123") {
        sessionStorage.setItem('login',true);
        login.classList.remove("active");
        productpage.classList.add("active");
        console.log("okk");
    }

    else if(email.value != "harshrathod7798@gmail.com" && pass.value != "Pass@123"){
        alert("Email And Password is Incorrect");
    }
    
    else if(email.value === "" && pass.value === ""){
        alert("Please Enter Your Email And Password");
    }
 
})





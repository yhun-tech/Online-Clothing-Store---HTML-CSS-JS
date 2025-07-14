
const signupBtn = document.getElementById("fp-signup-link");
const case_lgn_btn = document.getElementById("case_login_btn");
const case_register_btn = document.getElementById("case_register_btn");

const signupForm = document.getElementById("signup_wrapper");
const signupBd = document.querySelector(".backdrop_sgn_wrapper");

const loginForm = document.getElementById("login_wrapper");
const loginBd = document.querySelector(".backdrop_login_wrapper");

signupBtn.addEventListener("click", () => {

    signupBtn.classList.add("active-btn");
    signupForm.classList.add("show-form");
    signupBd.classList.add("show-form");


    loginForm.classList.add("hide-form");
    loginBd.classList.add("hide-form");

});

case_register_btn.addEventListener("click", () => {

    signupBtn.classList.add("active-btn");
    signupForm.classList.add("show-form");
    signupBd.classList.add("show-form");


    loginForm.classList.add("hide-form");
    loginBd.classList.add("hide-form");


});

case_lgn_btn.addEventListener("click", () => {

    signupBtn.classList.remove("active-btn");
    signupForm.classList.remove("show-form");
    signupBd.classList.remove("show-form");


    loginForm.classList.remove("hide-form");
    loginBd.classList.remove("hide-form");
    
    

});




// BACK END PART


   const validEmail  = "user";
   const validPassword = "12345";

  
   document.getElementById("login_form").addEventListener("submit", function(event) {
       event.preventDefault();
      
       const email = document.getElementById("lg_email_inp").value.trim();
       const password = document.getElementById("lg_password_inp").value;

       
       if (email === validEmail && password === validPassword) {
           alert("Login successful!");

           window.location.href = "../../OCS_Feed/OCS_Feed_HTML/feed.html"; 

       } else {

           const errorElement = document.querySelector(".error_div");
           errorElement.innerHTML = 
           
            `<p class="error_text">
            
             Invalid username or password. Please try again. 
           

                <span class="erro_remove_btn">x</span>

            </p>`
           error_design();
       }



   });




function error_design(){


const error_css = document.createElement("style");

error_css.textContent =  `


    .error_div{

     padding:1rem;
      margin-top: 2rem;
      width: 100%;
      background-color: var(--most-pink-p2-fad);
      border-radius:var(--border-radius_10--);
      border: 2px solid var(--danger-in-p2-f4);
                                                   
    }

    .error_text{
        word-break:break-all;
        text-align:center;
        font-size:0.8rem;
        color:red;
    }


`;


document.head.appendChild(error_css);

}



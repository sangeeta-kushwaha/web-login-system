document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("btn");
    const usernameInput =document.getElementById("username");
    const RememberMeCheckBox = document.getElementById("RememberMe");
    const passwordInput = document.getElementById("password")


    let savedUsername = localStorage.getItem("savedUsername") || sessionStorage.getItem("savedUsername");
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    

    button.addEventListener("click",function(){
        let userName = usernameInput.value.trim();
        let password = passwordInput.value.trim()
        let RememberMe = RememberMeCheckBox.checked;


        if(userName === "" || password === ""){
            alert("Please enter both username and password!");
                    return;
        }

           
        if(RememberMe){
             localStorage.setItem("savedUsername", userName);
    
          }else{
             sessionStorage.setItem("savedUsername",userName);
                }
          alert("login successfully")
     });

            document.getElementById("loginForm").reset()

           
  
        
    });







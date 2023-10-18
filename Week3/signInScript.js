
         
         const form = document.getElementById("form");
    
    
         form.addEventListener("submitButton", function (event) {
       
            let valid = true;
        
            const emptyFields = [];
    
       
            // Username validation
       
            const username = document.getElementById("username");
       
            const usernameError = document.getElementById("usernameError");
       
            if (username.value.trim() === "") {
           
                emptyFields.push("Username");
           
                usernameError.textContent = "Username is required";
           
                username.classList.remove("valid");
           
                valid = false;
       
        } else {
           
            usernameError.textContent = "";
           
            username.classList.add("valid");
        
        }
    
        
        // Email validation
       
        const email = document.getElementById("email");
       
        const emailError = document.getElementById("emailError");
        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        if (!emailPattern.test(email.value)) {
           
            emailError.textContent = "Invalid email address";
           
            email.classList.remove("valid");
          
            valid = false;
       
        } else {
           
            emailError.textContent = "";
           
            email.classList.add("valid");
       
        }
    
       
        // Password validation
        
        const password = document.getElementById("password");
       
        const passwordError = document.getElementById("passwordError");
       
        if (password.value.length < 8) {
        
            passwordError.textContent = "Password must be at least 8 characters";
        
            password.classList.remove("valid");
       
            valid = false;
       
        } else {
        
            passwordError.textContent = "";
        
            password.classList.add("valid");
        
        }
    
       
        // Confirm Password validation
       
        const confirmPassword = document.getElementById("confirmPassword");
       
        const confirmPasswordError = document.getElementById("confirmPasswordError");
       
        if (confirmPassword.value !== password.value) {
       
            confirmPasswordError.textContent = "Passwords do not match";
       
            confirmPassword.classList.remove("valid");
       
            valid = false;
       
        } else {
       
            confirmPasswordError.textContent = "";
       
            confirmPassword.classList.add("valid");
       
        }
    
        if (emptyFields.length > 0) {
         
            alert("The following fields are required: " + emptyFields.join(", "));
          
            valid = false;
       
        }
    
        if (!valid) {
        
            event.preventDefault(); 
            
        }});

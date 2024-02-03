function validateEmail(email) {
    // Regular expression for a basic email validation
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


document.addEventListener("DOMContentLoaded", ()=>{
    var form = document.querySelector(".card__form");
    var email = document.querySelector(".form__body .form__input")
    var error = document.querySelector(".form__header .error-message")
    var dismiss = document.querySelector(".success .form__input");
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        
        if(validateEmail(email.value)){
            error.classList.remove("error-text");
           
            error.classList.add("hidden")
            email.classList.remove("email-error");

       
            email.value = ""
            var wrapper = document.querySelector(".wrapper")
            wrapper.style="display:none;"
            var success  = document.querySelector(".success")
            success.classList.toggle("hidden")

            dismiss.addEventListener("click", ()=>{
                wrapper.style = "display:flex;";
                success.classList.add("hidden")
            })
           
        }else{
            error.classList.remove("hidden")
            error.classList.add("error-text");
            email.classList.add("email-error")
            let temp  = email.value
            email.value=''
            email.value=temp
            error.innerHTML = "valid email required"
         
        }
    })

    
})


function back(e){
    
}
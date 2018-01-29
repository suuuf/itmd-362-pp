$("#contact-form").on("submit",
    function (e) {
        var valid = [];
    
        //Validate Email
        var email = $("#email").val();
        if(/.@/.test(email)){
           valid.push(1); 
        }
        else {
            valid.push(0);
            if(!$("#email-section").find("li").hasClass("error")){
                $("#email-section").append("<li class='error'>Invalid email address.</li>");
            }
        }
    
        //Validate Phone
        var phone = $("#phone").val();
        if(/.d{10}/.test(phone)){
           valid.push(1); 
        }
        else {
            valid.push(0);
            if(!$("#phone-section").find("li").hasClass("error")){
                $("#phone-section").append("<li class='error'>Invalid phone number.</li>");
            }
        }
    }
);

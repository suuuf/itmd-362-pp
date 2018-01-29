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
    
        //Validate Age
        var current = new Date();
        var dob = new Date($("#birthday").val());
        if(current.getFullYear - dob.getFullYear > 18){
            valid.push(1);
        }
        else if(current.getFullYear - dob.getFullYear == 18){
            
        }
        else{
            valid.push(0);
            if(!$("#birthday-section").find("li").hasClass("error")){
                $("#birthday-section").append("<li class='error'>Sorry you are under 18.</li>");
            }
        }
    }
);

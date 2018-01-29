$("#contact-form").on("submit",
    function (e) {
        e.preventDefault();
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
        if(phone.length == 10){
           valid.push(1);
            if($("#phone-section").find("li").hasClass("error")){
                $("#phone-section").find(".error").remove();
            }
        }
        else {
            valid.push(0);
            if(!$("#phone-section").find("li").hasClass("error")){
                $("#phone-section").append("<li class='error'>Invalid phone number.</li>");
            }
        }
    
        //Validate Age 18+
        var current = new Date();
        var dob = new Date($("#birthday").val());
        if(current.getFullYear() - dob.getFullYear() > 18){
            valid.push(1);
            if($("#birthday-section").find("li").hasClass("error")){
                $("#birthday-section").find(".error").remove();
            }

        }
        else if(current.getFullYear() - dob.getFullYear() == 18){
            if(dob.getMonth() > current.getMonth()){
                valid.push(0);
                if(!$("#birthday-section").find("li").hasClass("error")){
                    $("#birthday-section").append("<li class='error'>Sorry you are under 18.</li>");
                }
            }
            else if(dob.getMonth() == current.getMonth()){
                if(dob.getDate() > current.getDate()){
                    valid.push(0);
                    if(!$("#birthday-section").find("li").hasClass("error")){
                        $("#birthday-section").append("<li class='error'>Sorry you are under 18.</li>");
                    }
                }
                else{
                    valid.push(1);
                    if($("#birthday-section").find("li").hasClass("error")){
                        $("#birthday-section").find(".error").remove();
                    }
                }
            }
            else{
                valid.push(1);
                if($("#birthday-section").find("li").hasClass("error")){
                    $("#birthday-section").find(".error").remove();
                }
            }
        }
        else{
            valid.push(0);
            if(!$("#birthday-section").find("li").hasClass("error")){
                $("#birthday-section").append("<li class='error'>Sorry you are under 18.</li>");
            }
        }
    }
);

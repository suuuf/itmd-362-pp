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
            $("#email-section").append("<li class='error'>Invalid email address.</li>");
        }   
    }
);

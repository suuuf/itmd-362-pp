$("#contact-form").on("submit",
  function (e) {
    var valid = [];
    var current = new Date();

    // Get All input values
    var email = $("#email").val();
    var phone = $("#phone").val();
    var dob = new Date($("#birthday").val());
    e.preventDefault();

    // Validate Email
    if (/.@/.test(email)) {
      valid.push(1);
      if ($("#email-section").find("li").hasClass("error")) {
        $("#email-section").find(".error").remove();
      }
    } else {
      valid.push(0);
      if (!$("#email-section").find("li").hasClass("error")) {
        $("#email-section").append("<li class='error'>Invalid email address.</li>");
      }
    }

    // Validate Phone
    if (phone.length === 10) {
      valid.push(1);
      if ($("#phone-section").find("li").hasClass("error")) {
        $("#phone-section").find(".error").remove();
      }
    } else {
      valid.push(0);
      if (!$("#phone-section").find("li").hasClass("error")) {
        $("#phone-section").append("<li class='error'>Invalid phone number.</li>");
      }
    }

    // Validate Age 18+
    if (current.getFullYear() - dob.getFullYear() > 18) {
      valid.push(1);
      if ($("#birthday-section").find("li").hasClass("error")) {
        $("#birthday-section").find(".error").remove();
      }

    } else if (current.getFullYear() - dob.getFullYear() === 18) {
      if (dob.getMonth() > current.getMonth()) {
        valid.push(0);
        if (!$("#birthday-section").find("li").hasClass("error")) {
          $("#birthday-section").append("<li class='error'>Sorry you are under 18.</li>");
        }
      } else if (dob.getMonth() === current.getMonth()) {
        if (dob.getDate() > current.getDate()) {
          valid.push(0);
          if (!$("#birthday-section").find("li").hasClass("error")) {
            $("#birthday-section").append("<li class='error'>Sorry you are under 18.</li>");
          }
        } else {
          valid.push(1);
          if ($("#birthday-section").find("li").hasClass("error")) {
            $("#birthday-section").find(".error").remove();
          }
        }
      } else {
        valid.push(1);
        if ($("#birthday-section").find("li").hasClass("error")) {
          $("#birthday-section").find(".error").remove();
        }
      }
    } else {
      valid.push(0);
      if (!$("#birthday-section").find("li").hasClass("error")) {
        $("#birthday-section").append("<li class='error'>Sorry you are under 18.</li>");
      }
    }

    // Submit if all valid
    if (!valid.includes(0)) {
      if (!$("#contact-form").find("li").hasClass("success")) {
        $("#contact-form").find("ul").append("<li class='success'><p>Form Submitted Successfully!</p></li>");
      }
    } else {
      if ($("#contact-form").find("li").hasClass("success")) {
        $("#contact-form").find(".success").remove();
      }
    }
  }
);

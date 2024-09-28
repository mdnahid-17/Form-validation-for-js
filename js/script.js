
// jquery code start


$(function () {
    $("#click").click(function () {
        $('img').toggle("slow")

    })
})
//add
$(function () {
    $("#more").click(function () {
        $(".demo").toggle()
        $("#button").click(function () {
            $("p").css("font-size", "20px")
            $(".add").show()

        })
    })
})
// add+remove
$(function () {
    $(".remove").click(function () {
        $(".demo").remove()
    })
})

// jquery code end



//form validation code

var contact_name = document.getElementById('username');
var username_err = document.getElementById('user-err');
var email = document.getElementById('email');
var email_err = document.getElementById('email-err');
var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var password = document.getElementById('password');
var password_err = document.getElementById('password-err');
var password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var confirm_password = document.getElementById('confirm-password');
var confirm_err = document.getElementById('confirm-err');
var phone = document.getElementById('phone');
var phone_err = document.getElementById('phone-err');
var phone_regex = /^[0-9]{11}$/;


function signIn() {

    if (contact_name.value == "") {
        username_err.innerHTML = 'user name is required'

    }
    if (contact_name.value !== "") {
        username_err.innerHTML = '<i class="fa solid fa-check"></i>'

    }
    if (email.value == "") {
        email_err.innerHTML = "user email is required"
        return false;
    }
    if (!email_regex.test(email.value)) {
        email_err.innerHTML = 'enter your proper email id'
        return false;
    }
    if (email.value !== "") {
        email_err.innerHTML = '<i class="fa solid fa-check"></i>'
    }
    if (password.value == "") {
        password_err.innerHTML = "your password is required"
        return false;
    }
    if (!password_regex.test(password.value)) {
        password_err.innerHTML = "password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters";
        password_err.style.width = "450px"
        return false;
    }
    if (password.value !== "") {
        password_err.innerHTML = '<i class="fa solid fa-check"></i>';
        password_err.style.width = "15px"
        //return false;
    }
    if (confirm_password.value == "") {
        confirm_err.innerHTML = "confirm password is required"
        return false;
    }
    if (password.value !== confirm_password.value) {
        confirm_err.innerHTML = 'confirm password dose not match';
        return false;
    }

    if (confirm_password.value !== "") {
        confirm_err.innerHTML = '<i class="fa solid fa-check"></i>'

    }
    if (phone.value == "") {
        phone_err.innerHTML = "phone is required"
        return false;
    }
    if (!phone_regex.test(phone.value)) {
        phone_err.innerHTML = "phone no should on 11 digits"
        return false;
    }
    if (phone.value !== "") {
        phone_err.innerHTML = '<i class="fa solid fa-check"></i>';
        alert('Registration success')
    }
}



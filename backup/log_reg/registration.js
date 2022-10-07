function reg() {

    var fname = document.getElementById("fname").value;
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var pnum = document.getElementById("pnum").value;
    var passw = document.getElementById("passw").value;
    var cpassw = document.getElementById("cpassw").value;

    //expression code
    var passwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var number = /^\+?6?(?:01[0-46-9]\d{7,8}|0\d{8})$/;

    if (fname == '') {
        alert('Please enter your full name');
    }
    else if (!letters.test(fname)) {
        alert('Name field required only alphabet characters');
    }


    else if (uname == '') {
        alert('Please enter your username');
    }
    else if (!letters.test(uname)) {
        alert('Username field required only alphabet characters');
    }


    else if (email == '') {
        alert('Please enter the email.');
    }
    else if (!filter.test(email)) {
        alert('Invalid email');
    }



    else if (pnum == '') {
        alert('Please enter your contact number.');
    }
    else if (!number.test(pnum)) {
        alert('Invalid phone number');
    }


    else if (passw == '') {
        alert('Please enter password');
    }
    else if (cpassw == '') {
        alert('Please confirm your password');
    }
    else if (!passwd.test(passw)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password field');
    }
    else if (cpassw != passw) {
        alert('Password not match');
    }
    else if (document.getElementById("passw").value.length < 6) {
        alert('Password minimum length is 6');
    }
    else if (document.getElementById("passw").value.length > 12) {
        alert('Password max length is 12');
    }
    sessionStorage.setItem("userName", email);
    sessionStorage.setItem("password", passw);
}

function clearFunc() {
    document.getElementById("fname").value;
    document.getElementById("uname").value = "";
    document.getElementById("email").value;
    document.getElementById("pnum").value = "";
    document.getElementById("passw").value = "";
    document.getElementById("cpassw").value = "";
}
function checkInput() {
    var username = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    if (username == "") {
        alert("Please enter a valid username");
        document.getElementById("userName").focus();
        return false;
    }
    if (email == "") {
        alert("Please input a proper email address.");
        document.getElementById("userEmail").focus();
        return false;
    }
    alert("Your inquiry has been submited");
    return (true);
}
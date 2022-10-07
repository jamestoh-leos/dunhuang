function checkForm() {
    var userN = document.getElementById("userN").value;
    var pW = document.getElementById("pW").value;

    if (userN == "") {
        alert("Please enter your user id !");
        document.getElementById("userN").focus();
    }
    else if (pW == "") {
        alert("Please enter your password !");
        document.getElementById("pW").focus();
    }
    if (pW != sessionStorage.getItem("password") || userN != sessionStorage.getItem("userName")) {
        alert("Incorrect password or email. Try again.");
        console.log(userN + " " + pW + " " + sessionStorage.getItem("userName") + " " + sessionStorage.getItem("password"));
    } else {
        window.location.href = "shoppingcart.html";
    }
}

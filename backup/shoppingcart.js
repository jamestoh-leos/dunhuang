function display(obj, num) {
    var price = document.getElementById("price" + num);
    var amount = "amount" + num;
    if (obj.value <= 0) {
        document.getElementById(amount).value = "0.00";
    } else {
        document.getElementById(amount).value = price.value * obj.value;
    }
    calculate();
}

function calculate() {
    var total = 0;
    var multiAmount = document.getElementsByClassName("multiAmount");
    for (var i = 0; i < multiAmount.length; i++) {
        total = total + Number(multiAmount[i].value);
    }
    document.getElementById("totalAmount").value = total;
    sessionStorage.setItem("totalPrice", document.getElementById("totalAmount").value);
}
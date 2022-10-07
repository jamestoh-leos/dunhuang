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

    function cancelorder(){
        if(confirm("Are you sure you want to cancel this order?")==1){
            document.food.reset();
            window.location.reload();
        }
    }

    function submitorder() /*initialise*/{
    
        document.forms[0].onsubmit = function(){
    /*this keyword, mean->referring back to your own element*/
            if(this.checkValidity()){
                if(document.getElementById('totalAmount').value>0){
                    if(confirm("Are you sure you want to submit order?")==1){
    
                        alert("Your order has been successfully submitted.\n")
    
                        return true;
                    }else{
                        /*user confirm to cancel the order*/
                        /*remain on the same page*/
                    }  
                }else{
                    /*amount<0*/
                    alert("Total amount must be more than 0.");
                    return false;
                }
        }
    }
    }
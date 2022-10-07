function startform() {
    document.getElementById('date').value = todaytxt();
    document.getElementById("totalAmount").value = sessionStorage.getItem("totalPrice");
    document.getElementById("total").value = sessionStorage.getItem("totalPrice");
    document.order.product.focus();
}

function todaytxt() {
    var Today = new Date();
    return Today.getDate() + "/" + (Today.getMonth() + 1) + "/" + Today.getFullYear();
}

function del_price(num) {
    document.getElementById("sub3").value = num;
    total_price();
}

function total_price() {
    var s1 = document.getElementById("totalAmount").value;
    var s2 = document.getElementById("sub3").value;
    total = Number(s1) + Number(s2);
    document.getElementById("total").value = total;
}

function copy_shipping() {
    if (document.order.billcb.checked) {
        document.order.bname.value = document.order.sname.value;
        document.order.bstreet.value = document.order.sstreet.value;
        document.order.bcity.value = document.order.scity.value;
        document.order.bstate.selectedIndex = document.order.sstate.selectedIndex;
        document.order.bzip.value = document.order.szip.value;
    }
}

function checkform() {

    shipping_ok = true;
    if (document.order.sname.value == "") shipping_ok = false;
    if (document.order.sstreet.value == "") shipping_ok = false;
    if (document.order.scity.value == "") shipping_ok = false;
    if (document.order.szip.value == "") shipping_ok = false;

    billing_ok = true;
    if (document.order.bname.value == "") billing_ok = false;
    if (document.order.bstreet.value == "") billing_ok = false;
    if (document.order.bcity.value == "") billing_ok = false;
    if (document.order.bzip.value == "") billing_ok = false;

    credit_ok = true;
    if (document.order.cname.value == "") credit_ok = false;
    if (document.order.cnumber.value == "") credit_ok = false;
    cardchecked = false;
    for (i = 0; i < 5; i++) {
        if (document.order.ccard.checked) cardchecked = true;

    }
    if (cardchecked = false) credit_ok = false;

    payment_ok = (credit_ok || billing_ok);
    form_ok = (product_ok && shipping_ok && payment_ok);

    if (form_ok) {
        alert("Your order has been submitted");
        return true;
    }
    else {
        if (product_ok == false) alert("Select a product, quantity and shipping method");
        if (shipping_ok == false) alert("Enter a shipping address ");
        if (payment_ok == false) alert("Enter a billing address and credit card");
        return false;
    }

   
}

function pay(){
    var sname= document.getElementById("sname").value;
    var sstreet= document.getElementById("sstreet").value;
    var sarea= document.getElementById("sarea").value;

    var letters = /^[A-Za-z]+$/;

    if(sname=='')
	{
		alert('Please enter your shipping name');
        return false;
	}
	else if(!letters.test(sname))
	{
		alert('Name field required only alphabet characters');
        return false;
	}

    else if(sstreet=='')
	{
		alert('Please enter your street address');
        return false;
	}
	else if(!letters.test(sstreet))
	{
		alert('Username field required only alphabet characters');
        return false;
	}

    else if(sarea=='')
	{
		alert('Please select your area');
        return false;
	}



}

function myFunction(){
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var userMonth = document.getElementById("month").value;
    var userYear = document.getElementById("year").value;
    var userCvc = document.getElementById("cvc").value;
    //this displays the inputs onto the card
    document.getElementById("userName").innerHTML = name;
    document.getElementById("cardNums").innerHTML = cardNumber;
    document.getElementById("userMonth").innerHTML = userMonth;
    document.getElementById("userYear").innerHTML = userYear;
    document.getElementById("userCvc").innerHTML = userCvc;
    //this puts an alert if the user does not enter his credit card information
    if (name.length === 0) {
        alert("Please enter your name"); 
    }
    if (cardNumber.length === 0) {
        alert("Please enter your credit card number");
    }
    if (userMonth.length === 0) {
        alert("Please enter your credit card expiration date"); 
    }
    if (userYear.length === 0) {
        alert("Please enter your credit card expiration date"); 
    }
    if (userCvc.length === 0) {
        alert("Please enter your credit card cvc number"); 
    }
}
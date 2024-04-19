function myFunction() {
  var name = document.getElementById("name").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var userMonth = document.getElementById("month").value;
  var userYear = document.getElementById("year").value;
  var userCvc = document.getElementById("cvc").value;

  //   let errorMsg = "";
  if (name.length === 0) {
    // errorMsg += "Please enter your name. ";
    alert("Please enter your name");
    return;
  } else {
    document.getElementById("userName").innerHTML = name;
  }

  if (cardNumber.length === 0) {
    alert("Please enter your credit card number");
    return;
  } else {
    document.getElementById("cardNums").innerHTML = cardNumber;
  }

  if (userMonth.length === 0) {
    alert("Please enter your credit card expiration date");
    return;
  } else {
    document.getElementById("userMonth").innerHTML = userMonth;
  }

  if (userYear.length === 0) {
    alert("Please enter your credit card expiration date");
    return;
  } else {
    document.getElementById("userYear").innerHTML = userYear;
  }

  if (userCvc.length === 0) {
    alert("Please enter your credit card cvc number");
    return;
  } else {
    document.getElementById("userCvc").innerHTML = userCvc;
  }
}

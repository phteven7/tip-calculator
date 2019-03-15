function taxCalc() {
    //Implement Conversion of use input to decimal.
    var bill = Number(document.getElementById("bill").value);
    var tip = Number(document.getElementById("tip").value);
    var split = Number(document.getElementById("split").value);
    //Converts tip to percentage
    var tipPercentage = tip / 100;
    //the unary operator "+" converts decTotal to a number without it is a string//
    var totalTip = +(bill * tipPercentage).toFixed(2);
    var totalBill = (bill + totalTip).toFixed(2);
    var perPerson = (totalBill / split).toFixed(2);

    document.getElementById("totalTip").innerHTML = "$" + totalTip;
    document.getElementById("totalBill").innerHTML = "$" + totalBill;
    document.getElementById("perPerson").innerHTML = "$" + perPerson;
}


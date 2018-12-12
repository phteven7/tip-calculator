function taxCalc() {
    //Implement Conversion of use input to decimal.
    var bill = Number(document.getElementById("bill").value);
    var tip = Number(document.getElementById("tip").value);
    
    //the unary operator "+" converts decTotal to a number without it is a string//
    var tipTotal = +(bill * tip).toFixed(2);
    var billTotal = bill + tipTotal;

    document.getElementById("tipDisplay").innerHTML = tipTotal;
    document.getElementById("totalDisplay").innerHTML = billTotal;
}
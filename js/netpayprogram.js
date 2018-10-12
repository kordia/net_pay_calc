
function NetPayProgram(){

    var output = document.getElementById ("output");

    var GrossPay = parseInt(document.getElementById("GrossPay").value);

    var AdditionalDeductions = parseInt(document.getElementById("AdditionalDeductions").value);
    
    var FedTax = GrossPay * .15;

    var StateTax = GrossPay * .05;
    
    var FICA=  GrossPay * .0762;
    
    var netPay = GrossPay  - (FedTax + StateTax + FICA + AdditionalDeductions)
    
    output.innerHTML = "$" + netPay;
}


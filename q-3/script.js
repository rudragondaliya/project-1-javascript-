// Simple Interest

let principalAmt = prompt("Enter the Number:");
let rateOfinterest;
let years = prompt("Enter the Years");

rateOfinterest = principalAmt>=500000 ? 12/100 :
                 principalAmt>=350000 ? 9/100  :
                 principalAmt>=250000 ? 6/100  :
                 3/100;

let simpleInterest = (principalAmt * rateOfinterest * years);
console.log("Principal Amount is: ",principalAmt);
console.log("Rate of interest is:",rateOfinterest);
console.log("Number of years is: ",years);
console.log("Simple Interest:",simpleInterest);





                  
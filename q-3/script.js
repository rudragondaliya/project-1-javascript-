// Simple Interest

let principalAmt = prompt("Enter the Number:"); // Taking user input for Amount.
let rateOfinterest; // declare variable
let years = prompt("Enter the Years"); // Taking user input for years

// calcuation of interest
rateOfinterest = principalAmt>=500000 ? 12/100 :
                 principalAmt>=350000 ? 9/100  :
                 principalAmt>=250000 ? 6/100  :
                 3/100;

// Simple Interest Calculation
let simpleInterest = (principalAmt * rateOfinterest * years);

//Print the Message.
console.log("Principal Amount is: ",principalAmt);
console.log("Rate of interest is:",rateOfinterest);
console.log("Number of years is: ",years);
console.log("Simple Interest:",simpleInterest);





                  
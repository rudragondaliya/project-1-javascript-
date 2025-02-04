// Grade Calculator

// taking input from the user
let average = parseFloat(prompt("Enter the Average score")); //declare variable
let score; //declare variable

// it decide the grade according to marks
score = average>=90 ? "A" :
        average>=80 ? "B" :
        average>=70 ? "C" :
        average>=60 ? "D" :
        average>=40 ? "E" :
        "Fail";
    
// Print the message.
console.log("average is",average); 
 console.log("Grade is",score);
        

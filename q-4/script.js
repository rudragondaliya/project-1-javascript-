
let Emp_name = "Rocky"; //Employee name
let role = "Developer"; //Employee Role
let BaseSalary = parseFloat(prompt("Enter the Base Salary:")); //taking user input
let HRA = 0.5;   // House Rent Allowance
let MA  = 0.15;  // Medical Allowance
let TA =  0.08;  // Traveling Allowance
let DA =  0.08;  // Dearness Allowance

let PF = 0.12;  // Provident Fund
let PT = 200;   // Professional Tax
let TDS = 0.1;  // Tax Deducted at source
let experience = prompt("enter the Experience:"); //taking user input for years of experience
let BonusSalary; // Bonus

// Gross Salary Calculation
let grossSalary = BaseSalary + (BaseSalary * HRA) + (BaseSalary * MA) + (BaseSalary * TA) + (BaseSalary * DA);

// Total Salary Calculation
let totalSalary = grossSalary - (grossSalary * PF) - PT - (grossSalary * TDS);

// Bonus Calculation
let Bonus = (totalSalary >= 25000 && experience >= 5) ? 0.50 :
            (totalSalary >= 20000 && experience >= 3) ? 0.35 :
            (totalSalary >= 15000 && experience >= 2) ? 0.20 : 0.10;

BonusSalary = totalSalary * Bonus;

// print the Message.
console.log("Employee name:",Emp_name);
console.log("Employee Role:",role);
console.log("House Rent Allowance:",HRA);
console.log("Medical Allowance:",MA);
console.log("Travelling Allowance:",TA);
console.log("Dearness Allowance:",DA);
console.log("Provident fund:",PF);
console.log("Professional tax:",PT);
console.log("Tax Deducted at source:",TDS);
console.log("Gross Salary:", grossSalary);
console.log("Total Salary", totalSalary);
console.log("Bonus Salary:",BonusSalary);


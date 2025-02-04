let productName = "Perfume" // Product name
let productPrice = 500; //product price
let ProductQty = prompt("Enter the Quantity:"); //product Qty
let Total = productPrice*ProductQty; //product Total

//calculate discount
let discount = Total>=1500 ? 15/100 :
               Total>=1000 ? 10/100 : 
               Total>=800 ? 8/100 
               :null;       
                  
let netTotal = Total - (Total*discount); // net total

// print the message.
console.log("Product Name:",productName);
console.log("Product Price:",productPrice);
console.log("Product Quantity:",ProductQty);
console.log("Total:",Total);
console.log("Discount:",discount);
console.log("Net Total:",netTotal);

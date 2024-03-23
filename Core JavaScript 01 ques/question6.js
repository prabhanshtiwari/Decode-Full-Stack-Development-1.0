/*
Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", "paypal") as input and uses a switch statement to determine and print the 
processig fee associated with each payment method. For example, "credit" may have a processing fee of 
2%, "debit" 1.5 and "paypal" 3%.
*/

// Choose anyone payment method ("credit", "debit", "paypal")
var payment_method = "credit";
var processing_fee;

switch(payment_method){
    case "credit":
        processing_fee = 0.02;
        break;
    case "debit":
        processing_fee = 0.015;
        break;
    case "paypal":
        processing_fee = 0.03;
        break;
    default:
        console.log("Please select a valid payment method");
}

console.log("Payment method :", payment_method);
console.log("Processing fee :", processing_fee);
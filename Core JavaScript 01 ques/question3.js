/*
Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
"positive" if the number is positive and similarly for negative and zero also.
*/
number = -54;

result = (number === 0) ? ("Zero") : 
(number > 0) ? ("Positive") :
(number < 0) ? ("Negative") :
("Please Enter a Valid number");

console.log("Nummber :", number);
console.log("Result :", result);

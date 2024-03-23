/*
Q2. Generate numbers between any 2 given numbers.
Ex.

Const num1 = 10;
Const num2 = 25;

Output : 11, 12, 13, ...., 25
*/

var num1 = 10;
var num2 = 25;

console.log("num1 =", num1)
console.log("num2 =", num2)
process.stdout.write("Output: ");

while(num1 < num2){
    num1++;
    //console.log(num1);
    process.stdout.write(num1 + ', ');
    
}


  
/*
You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the 
given number. 
*/

var num = 10;   // input
var sum = 0;

console.log("num :", num);
process.stdout.write("Sum of all numbers from 1 to num = ");

do{
    sum = sum + num;
    num--;
}
while(num > 0);

console.log(sum);


/*
Q1. Write a program that grades students based om their marks.
If greater than 90 then A Grade
If between 70 and 90 then a B grade
If between 50 and 70 then a C grade
Below 50 then a F grade
*/

var marks = 90;
var grade;

if (marks > 90){
    grade = "A";
}else if (70 < marks <= 90){
    grade = "B";
}else if (50 < marks <=70){
    grade = "C";
}else if (marks < 50){
    grade = "F";
}

console.log("Marks Obtained :", marks);
console.log("Grade :", grade);

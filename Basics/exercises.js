// 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

// const fname = "Christina";
// const lname = "Headley";
// console.log(fname + " " + lname);
// LS solution:
// > 'John' + ' ' + 'Doe'
// = 'John Doe'
// 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6
let number = 4936;
let ones = number % 10;
let tens = ((number - ones) % 100) / 10;
let hundreds = (((number - ones) % 1000) / 10 - tens) / 10;
let thousands = (number - ones - tens * 10 - hundreds * 100) / 1000;

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);

// LS solution:
// let number = 4936
// > let ones = number % 10
// > ones
// = 6

// > number = (number - ones) / 10
// = 493

// > let tens = number % 10
// > tens
// = 3

// > number = (number - tens) / 10
// = 49

// > let hundreds = number % 10
// > hundreds
// = 9

// > let thousands = (number - hundreds) / 10
// > thousands
// = 4

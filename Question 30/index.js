"use strict";
// Tests for equality and inequality with strings
let personName = 'Rehan';
console.log(`Is name equal to 'Rehan'? I predict true.`);
console.log(personName == 'Rehan');
let city = 'Paris';
console.log(`Is city not equal to 'paris'? I predict true.`);
console.log(city != 'paris');
// Tests using the lower case function
let fruit = 'Apple';
console.log(`Is the lowercase version of fruit equal to 'apple'? I predict true.`);
console.log(fruit.toLowerCase() == 'apple');
let animal = 'Elephant';
console.log(`Is the lowercase version of animal not equal to 'elephant'? I predict true.`);
console.log(animal.toLowerCase() != 'elephant');
// Numerical tests
let x = 10;
let y = 20;
console.log(`Is x greater than y? I predict false.`);
console.log(x > y);
console.log(`Is y greater than or equal to x? I predict true.`);
console.log(y >= x);
console.log(`Is x less than or equal to y? I predict true.`);
console.log(x <= y);
console.log(`Is x equal to y? I predict false.`);
console.log(x == y);
// Tests using "and" and "or" operators
let num1 = 5;
let num2 = 10;
let num3 = 15;
console.log(`Is num1 less than num2 and num3? I predict true.`);
console.log(num1 < num2 && num1 < num3);
console.log(`Is num1 greater than or equal to num2 or num3? I predict false.`);
console.log(num1 >= num2 || num1 >= num3);
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log(`Is 'banana' in the fruits array? I predict true.`);
console.log('banana' in fruits);
console.log(`Is 'grape' not in the fruits array? I predict true.`);
console.log(!('grape' in fruits));

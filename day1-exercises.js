
// Question 1

// This is a single-line comment

/*
  This is a multi-line comment
  It can span multiple lines
  Used for longer explanations
*/

console.log("Exercise 1: Comments added above");


// Question 2
let myName = "John";
let myAge = 25;
let myCity = "New York";

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("City:", myCity);


// Question 3
const PI = 3.14159;
const MAX_USERS = 100;
const APP_NAME = "MyApp";

console.log("PI:", PI);
console.log("MAX_USERS:", MAX_USERS);
console.log("APP_NAME:", APP_NAME);


// Question 4
let stringVar = "Hello";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;
let nullVar = null;

console.log("typeof stringVar:", typeof stringVar);
console.log("typeof numberVar:", typeof numberVar);
console.log("typeof booleanVar:", typeof booleanVar);
console.log("typeof undefinedVar:", typeof undefinedVar);
console.log("typeof nullVar:", typeof nullVar);


// Question 5
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let greeting = `Hello, ${fullName}! Welcome to JavaScript.`;

console.log("Full Name:", fullName);
console.log("Greeting:", greeting);
console.log("String length:", fullName.length);


// Question 6
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;


console.log(`${num1} + ${num2} =`, sum);
console.log(`${num1} - ${num2} =`, difference);
console.log(`${num1} * ${num2} =`, product);
console.log(`${num1} / ${num2} =`, quotient);
console.log(`${num1} % ${num2} =`, remainder);


// Question 7
let isJavaScriptFun = true;
let isRaining = false;
let isAdult = myAge >= 18;


console.log("Is JavaScript fun?", isJavaScriptFun);
console.log("Is it raining?", isRaining);
console.log("Is adult?", isAdult);
console.log("Logical AND:", isJavaScriptFun && isAdult);
console.log("Logical OR:", isJavaScriptFun || isRaining);
console.log("Logical NOT:", !isRaining);


//Question 8
let notAssigned;
let emptyValue = null;

console.log("notAssigned value:", notAssigned);
console.log("notAssigned type:", typeof notAssigned);
console.log("emptyValue value:", emptyValue);
console.log("emptyValue type:", typeof emptyValue);
console.log("Are they equal (==)?", notAssigned == emptyValue);
console.log("Are they strictly equal (===)?", notAssigned === emptyValue);


// Question 9
let testString = "JavaScript";
let testNumber = 2024;
let testBoolean = false;
let testUndefined;
let testNull = null;
let testObject = { name: "Test" };
let testArray = [1, 2, 3];

console.log("typeof 'JavaScript':", typeof testString);
console.log("typeof 2024:", typeof testNumber);
console.log("typeof false:", typeof testBoolean);
console.log("typeof undefined:", typeof testUndefined);
console.log("typeof null:", typeof testNull); // Note: this returns "object" (JavaScript quirk)
console.log("typeof { name: 'Test' }:", typeof testObject);
console.log("typeof [1, 2, 3]:", typeof testArray); // Arrays are objects

//Question 10
console.log("Simple message");
console.log("Multiple", "arguments", "in", "one", "log");
console.log("Number:", 100, "String:", "test", "Boolean:", true);

let debugVariable = "Debugging value";
console.log("Debug info:", debugVariable);



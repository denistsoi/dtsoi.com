---
prev: /en/
next: false
sidebar: auto
layout: "detail"
---

# Lesson 01 - Functions + Math

## Overview

### Things we have covered

- Math!
- alert/prompts
- variables
- booleans

### Topics we shall cover

- Chrome Developer Tools (inspector)
- Functions
- Conditional Logic (if else)
- Math functions
- Loops
- Data Types (arrays / objects)
- jQuery
- DOM manipulation / events
- Classes / Prototypes

### Lesson Overview

- Chrome Developer Tools (inspector)
- Functions
- Conditional Logic (if else)
- Math functions

## Chrome Developer Tools

Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser.

> `CMD + OPT + I` for mac  
> `F12 or Control+Shift+I` for Windows/Linux

As developers, we use DevTools to find why something doesn't operate as intended.

---

## Functions

![function](/assets/images/function.png)

---

#### Example

```js
function functionName(arg1) {
	// body of function
	// some code
}
```

- keyword _function_
- function name: functionName
- inputs: arg1
- body of function

---

### Example

```js
function functionName(arg1) {
	// body of function
	return returnValue;
}
```

- keyword _function_
- function name: functionName
- inputs: arg1
- body of function
- return value: returnValue

---

### Real world example

```js
function addNumber(number1, number2) {
	return number1 + number2;
}
```

---

### Expression vs declaration

```js
foo(); // foo isn't loaded
var foo = function() {
	return 1;
};
```

```js
foo(); // declarations are loaded before any code is run
function foo() {
	return 1;
}
```

---

Why? - `Hoisting`

`Javascript only hoists declarations, not initialisations`

```js
console.log(num); // Returns undefined
var num;
num = 6;
```

```js
num = 6;
console.log(num); // returns 6
var num;
```

> How to Solve

```js
var foo = function() {
	return 1;
};
foo(); // returns 1
```

---

### Anonymous function

```js
var addNumber = function(number1, number2) {
	return number1 + number2;
};
```

We are missing the `functionName`... why?  
An anonymous function `function (input) {}` is a shortcut
to write functions without any functionName

---

## Conditions

```js
if (age > 18) {
	console.log("You are an adult");
}
```

if age is greater than 18,  
then console.log('you are an adult');

---

```js
if (conditional) {
	// some code
}
```

```js
if (condition is true) {
  // Do cool stuff
} else {
  // Do other cool stuff
}
```

---

### Conditional extended

```js
var topic = "JS";
if (topic == "JS") {
	console.log("You're learning JavaScript");
} else if (topic == "JavaScript") {
	console.log("You're still learning JavaScript");
} else {
	console.log("You're learning something else");
}
```

---

### Multiple conditions

```js
if (name == "refugeek" && skill == "awesome") {
	// of course I am!
}
```

`&&` AND  
`||` OR

---

## Math functions

### Math.random

```
Math.random() // pick a number from 0 to 1 (decimal)
```

---

### Math.ceil

```
Math.ceil(number) // round number to upper whole number
Math.ceil(0.8) // returns 1
```

---

### Math.floor

```
Math.floor(number)  // round number to lower whole number
Math.floor(0.8) // returns 0
```

---

## Tasks / Challenge:

### Rock paper scissors assignment

[Assignment](challenge.md)

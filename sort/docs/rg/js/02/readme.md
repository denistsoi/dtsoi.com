---
prev: /en/
next: false
sidebar: auto
layout: "detail"
---

# Lesson 02 - Loops + Arrays

## Overview

### what we have covered

- Chrome Developer Tools (inspector)
- Functions
- Conditional Logic (if else)
- Math functions

### what we will cover

- Loops (for loop)
- Arrays

## Loops

### Basic Loop

```js
for (variable declaration; condition; variable increment) {
  // some code
}
```

---

### Example

```js
for (var i = 0; i < 5; i++) {
	console.log("Printing number " + i);
}
```

---

### Challenge

- write a `for loop` that prints numbers 1-10
- write a `for loop` that prints even or odd number

---

### for loop 1-10

`console.log() 1 to 10`

```js
for (var i = 1; i <= 10; i++) {
	// code here
}
```

---

### for loop 1-10 (answer)

```js
for (var counter = 1; counter <= 10; counter++) {
	// code here
	console.log(counter);
}
```

---

### for loop even/odd

```js
for (var i = 1; i <= 10; i++) {
	// code here
	// remember to use the % (modulus symbol)
}
```

---

### for loop 1 to 100

```js
for (var i = 1; i <= 100; i++) {
	// code here
	console.log(i);
}
```

---

Logical Steps

1. for
2. initialize some var (as counter);
3. find condition before entering loop
4. execute code inside for loop
5. add counter

---

### for loop even/odd

```js
for (var i = 1; i <= 10; i++) {
	// code here
	if (i % 2 == 0) {
		// print out even
	} else {
		// print out odd
	}
}
```

---

### review

- loops (counting 0 -> 10)
- loops (counting 0 -> 100)
- loops (counting 0 -> 15)
- loops (odd and even)
- loops (assignment) : counting backwards (decrement);

---

## Data Types (Arrays)

![array](/assets/images/array.png)

> arrays are like boxes where we can store an unlimited amount of data

---

### Array addressing (index)

```js
var refugeek = ['Alice', 'Bambi', 'Claire'];

refugeek[0] // 'Alice'
refugeek[1] // 'Bambi'
refugeek[2] // 'Claire'

...old way
refugeek1 = 'Alice';
refugeek2 = 'Bambi';
... etc etc

arr.length // returns 3; ...3 elements are in the array
```

## Array methods

```
.slice    // shallow copy array

.unshift  // add new element to start of array
.shift    // get first element and mutate array

.push     // add new element to end of array
.pop      // get last element and mutate array

.indexOf  // find index of array with content
.splice   // remove parts of an array
```

---

### slice

---

### .slice (example)

```js
var arr = ["bread", "cheese"];
var copy = arr.slice();

console.log(copy); // ['bread', 'cheese'];
```

---

#### .slice(startIndex, endIndex)

```js
var arr = ["bread", "cheese", "fruit", "milk"];
var copy = arr.slice(1, 3);

console.log(copy); // ['cheese', 'fruit']
```

---

### push

```
.push     // add new element to end of array
```

---

### push (example)

```js
var colors = ["red", "orange", "yellow"];
colors.push("green");

// ["red", "orange", "yellow", "green"]
```

---

### pop

```
.pop      // get last element and mutate array
```

---

### pop (example)

```js
var colors = ["red", "orange", "yellow"];
colors.pop(); //["red", "orange"]

// pop() returns the removed element
var col = colors.pop(); // orange
```

---

### unshift

```
.unshift  // add new element to start of array
```

---

### unshift (example)

```js
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");
console.log(colors);
// ["infrared", "red", "orange", "yellow"]
```

---

### shift

```
.shift    // get first element and mutate array
```

---

### shift (example)

```js
var colors = ["red", "orange", "yellow"];
colors.shift(); // "red"

// shift() returns the removed element
console.log(colors); // ["orange", "yellow"];
```

---

### .indexOf

```
.indexOf   // find index of array with content
```

---

### .indexOf (example)

```js
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
//returns the first index
// at which a given element can be found

friends.indexOf("David"); // 2
friends.indexOf("Liz"); // 1, not 4

//returns -1 if the element is not present.
friends.indexOf("Hagrid"); //-1
```

---

### .splice

```
.splice(startIndex, howMany)  // remove parts of an array
```

---

### .splice (example)

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// use splice to remove 'Orange' from the array
// specify index of the element to be removed and
// how many elements should be removed from that index

fruits.splice(1, 1); // returns: ["Orange"]

console.log(fruits); // prints: ["Banana", "Lemon", "Apple", "Mango"]
```

---

### array methods overview

```
.slice    // shallow copy array

.unshift  // add new element to start of array
.shift    // get first element and mutate array

.push     // add new element to end of array
.pop      // get last element and mutate array

.indexOf  // find index of array with content
.splice   // remove parts of an array
```

---

### challenge

- create an array with some data (e.g. height)

```js
var heights = [];

// heights
// [172, 123, 167]
// use heights.push(???);

console.log(heights);
```

---

### challenge (answer)

```js
var heights = [];
height[0] = 175; // 175
height[1] = 123; // 123
height[2] = 165; // 165
console.log(heights); // [175, 123, 165]
```

---

### challenge (without index);

```js
var animals = [???, ???, ???];
console.log(animals); // ['elephant', 'chicken', 'cow']

```

---

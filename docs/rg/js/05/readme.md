---
prev: /en/
next: false
sidebar: auto
---

# Lesson 5 - Recap

### Lets build a calculator

### how do we attach a javascript function to html
``` html
<body>
  <button onclick="add()">increment</button>
  <span>Total<span id="count"></span></span>
</body>
```

``` js
let counter = 0;

function add () {
  counter = counter ++;
}
```

### add input element
``` html
<body>
  <button onclick="add()">increment</button>

  <input id="userInput" type="number" />
  <span>Total<span id="count"></span></span>

</body>
```

### get user input into javascript

``` js
let counter = 0;

function add () {
  counter = counter + parseInt(userInput.value);
}
```

* we `parseInt` as `userInput.value` is of type `string`;



### add minus, multiply and divide buttons

``` html
<body>
  <button onclick="add()">increment</button>
  <button onclick="minus()">decrement</button>
  <button onclick="multiply()">multiply</button>
  <button onclick="divide()">divide</button>

  <input id="userInput" type="number" />
  <span>Total<span id="count"></span></span>

</body>
```



### write minus,  multiply and divide functions


``` js
let counter = 0;

function add () {
  counter = counter + parseInt(userInput.value);
}

function minus () {
 
}

function multiply () {
 
}

function divide () {
 
}
```

### (answer)


``` js
let counter = 0;

function add () {
  counter = counter + parseInt(userInput.value);
}

function minus () {
  counter = counter - parseInt(userInput.value);
}

function multiply () {
  counter = counter * parseInt(userInput.value);
}

function divide () {
  counter = counter / parseInt(userInput.value);
}
```
---
prev: /en/
next: false
sidebar: auto
---

# Everything is an object in Javascript

## Objects

### Data Types (Objects)

``` js
var something = {}
```

an object is a dictionary / hashtable

an object can store any standard data, including arrays and other objects

``` js
var myObj = {
  str: 'Hello',
  none: undefined,
  num: 54.3,
  bool: true
};

console.log(myObj["str"]);  // prints Hello
console.log(myObj["none"]); // prints undefined
console.log(myObj["num"]);  // prints 54.3
console.log(myObj["bool"]); // prints true
```

---
### When to use arrays over objects

arrays have natural orders (0,1,2...)  
objects have a key/name that you want to use as an index to store a collection of items  

### Objects - dot notation

``` js
var fruit1 = {};

fruit1['name']  = 'Apple';
fruit1['qty']   = 2;
fruit1['value'] = 1;

fruit1.name === fruit1['name']  // 'Apple' 

// note: if there is a space in the key, 
//   dot-notation may not be appropriate
```

---

## OOP in Javascript

### Prototype

``` js
function Person (params) {
  this.name  = params.name;
  this.age   = params.age;
  this.likes = params.likes || [];
}

Person.prototype.sayHi = function () {
  var greet = 'Hi my name is ' + this.name;
  console.log(greet);
}

var Denis = new Person({ 
  name: "Denis", 
  age: 30, 
  likes: ['computers', 'books'] 
});

console.log(Denis);
Denis.sayHi();
```

::: tip Extra Reading - Prototypical Extend
- [Extends/Inheritence](./extras/Prototype-Inheritence.md)
:::

::: tip Extra Reading - Classes
- [Classes](./extras/Classes.md)
:::

::: warning Extra Reading - 
- [JS Extra](./extras/Call-Apply-Bind.md)
:::


## Task
![screenshot](http://d2vlcm61l7u1fs.cloudfront.net/media%2F3cb%2F3cbf459b-a521-46d3-95f2-520a8573d11f%2FphpzePNil.png)  

- [reference](https://codepen.io/denistsoi/pen/ELvyoo)  

## homework

- [setup](./challange.md)  
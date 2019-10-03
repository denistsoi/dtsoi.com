### Extends / Inheritence

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

```

### Extending prototype
``` js
function Programmer(params) {
  Person.call(this, params); // <== here is where programmer inherits from Person
  this.languages = params.languages;
}

Programmer.prototype = Object.create(Person.prototype);

var Denis = new Programmer({ 
  name: "Denis", 
  age: 30, 
  likes: ['computers', 'books'],
  languages: ['js']
})

Denis.sayHi()
console.log(Denis);
```
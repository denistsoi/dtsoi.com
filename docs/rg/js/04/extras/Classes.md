## Class Version ES6

``` js
class Person {
  constructor(params) {
    this.name  = params.name;
    this.age   = params.age;
    this.likes = params.likes || [];
  }

  sayHi () {
    var greet = 'Hi my name is ' + this.name;
    console.log(greet);
  }
}

var Denis = new Person({ name: "Denis", age: 30, likes: ['computers', 'books'] });
console.log(Denis);
Denis.sayHi();
```
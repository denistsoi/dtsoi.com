## call
``` js
let add = function (c) {
  console.log(this.a + this.b + c);
}

let obj = { a: 1, b: 2};
add.call(obj, c);


## borrowing prototypes from array
let argsToArray = function () {
  [].slice.call(arguments);
}

argsToArray(1,2,3)
```

## apply

``` js
let numArray = [1,2,3]
Math.min.apply(null, numArray)
```

## bind
``` js
let obj = {
  asyncGet(cb) {
    cb()
  },
  parse() {
    console.log()
  },
  render() {
    // throws undefined
    this.asyncGet(function() {
      this.parse();
    })
    
    // that = this;
    // this.asyncGet(function() {
    //   that.parse();
    // })

    // this.asyncGet(function() {
    //   this.parse();  
    // }.bind(this))

    // this.asyncGet(() => {
    //   this.parse();
    // })
  }
}

myObj.render();
```
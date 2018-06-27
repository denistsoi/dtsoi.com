Question:

Write fibonacci sequence.

``` js
function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(1))
console.log(fib(2))
console.log(fib(5)) // 1 1 2 3 5

```

mem'd
``` js
function fib(n) {
  let mem = {};
  
  if (mem[n] != null) {
    return mem[n];
  }
  if (n === 1 || n === 2) {
    return 1;
  } else {
    mem[n] = fib(n - 1) + fib(n - 2);
  }
  return mem[n];
}

console.log(fib(30)) // ... 832040

console.log(fib(1))
console.log(fib(5))  // 1 1 2 3 5
console.log(fib(30)) // ... 832040
```

``` js
function fib(n, memo) {
  if (n === 1 || n === 2) {
    return 1
  }

  if (memo[n] > 0) return memo[n];

  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  console.log(n, memo[n - 1]);
  return memo[n];
}

function getFib(n) {
  return fib(n, {});
}

console.log(getFib(10)) // ... 832040

console.log(fib(1))
console.log(fib(5))  // 1 1 2 3 5
console.log(fib(30)) // ... 832040
```

``` js

let mem = {};

function fib(n) {
  if (mem[n] != null) {
    return mem[n];
  }

  if (n === 1 || n === 2) {
    return 1;
  }
  mem[n] = fib(n - 1) + fib(n - 2);
  return mem[n];
}

console.log(fib(5))  // 1 1 2 3 5
console.log(fib(1))
console.log(fib(30)) // ... 832040
```

bottom-up
``` js
function fib(n) {
  const arr = [];
  if (n === 1 || n === 2) {
    return 1;
  }  
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 1;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i -1] + arr[i-2];
  }
  return arr[n];
}

console.log(fib(1))
console.log(fib(30))


```
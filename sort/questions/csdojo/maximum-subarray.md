find the maximum sum of a subarray in the given array 
[1,-3,1,2,-1], dismiss non-positive numbers

```js 
// kadane algorithm
function findMaximum(array) {
  let global_maximum = array[0];
  let current_maximum = array[0];
  
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    current_maximum = current < 0 ? 0 : Math.max(current, current_maximum + current);
    global_maximum = Math.max(current_maximum, global_maximum);
  }
  
  return global_maximum;
}

console.log(findMaximum([1, -3, 1, 2, -1]));
console.log(findMaximum([1, 3, 4, 2, -1, 4, 10, -12, 9, 2]));
```
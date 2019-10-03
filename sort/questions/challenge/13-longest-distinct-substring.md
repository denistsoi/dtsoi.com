```js

// This problem was asked by Amazon.

// Given an integer k and a string s, 
// find the length of the longest substring that contains at most k distinct characters.
// For example, given s = "abcba" and k = 2, 
// the longest substring with k distinct characters is "bcb".

// - abaac             // abaa
// - caba              // aba
// - abababacbcbcbcbcb // cbcbcbcbcb
// - accmm 

const checkCurrent = (char, arr) => arr.some(c => char === c);

const findLongest = (string, distinct) => {
  const arr = string.split('');

  let save = [];
  let saveIndex;

  for (let i = 0; i < arr.length; i++) {
    if (!checkCurrent(arr[i], save)) {
      if (save.length < distinct) {
        save.push(arr[i]);
        saveIndex = i;
      } 
    }
  }

  let submax = arr.slice(0, saveIndex - 1).join('');

  let max = submax;

  if (string.length < distinct) {
    return string;
  }
  
  for (let i = distinct; i < arr.length; i++) {
    if (checkCurrent(arr[i], save)) {
      submax += arr[i];
      if (max.length < submax.length) {
        max = submax 
      }
    } else {
      submax = save.join('');
    }
  }

  return max;
}

findLongest('accmm', 3); //?
findLongest('abaacmm', 3) //?
findLongest('aaabc', 3); //?
findLongest('abcbal', 3); //?
findLongest('abaac', 2); //?
findLongest('caba', 2);  //?
findLongest('abababacbcbcbcbcb', 2); //?
```
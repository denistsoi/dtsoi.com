Palindrome Permuation

Can the string be permutated to form a palindrome?

``` js
function isPalindrome(inputString) {
  const cleanString = inputString.replace(/\s/g, '');
  const hashMap = {};
  for (let i = 0; i < cleanString.length; i++) {
    if (hashMap[cleanString[i]]) {
      hashMap[cleanString[i]] += 1;
    } else {
      hashMap[cleanString[i]] = 1;
    }
  }

  if (cleanString.length % 2 === 0) {
    // all char count must be even
    for (let char in hashMap) {
      if (hashMap[char] % 2 !== 0) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    let count = 0;
    // only one odd
    for (let char in hashMap) {
      if (hashMap[char] % 2 !== 0) {
        count++;
      } 
    }

    if (count === 1) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPalindrome('appa'));
console.log(isPalindrome('cappac'));
console.log(isPalindrome('hpalahp'));

```  
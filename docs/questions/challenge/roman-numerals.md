``` js
/**
having this kind of map

	I:  1,
	IV: 4,
	V:  5,
	IX: 9,
	X:  10,
	XL: 40,
	L:  50,
	XC: 90,
	C:  100,
	CD: 400,
	D:  500,
	CM: 900,
	M:	1000

build a arabic to roman numerals converter in bounds [1, 3999]
*/
```

```js


// assumption
// 9  ->  10 minus 1  -> IX
// 90 -> 100 minus 10 -> XC
// 99 -> ...???       -> XCIX

/**
 * thoughts:
 * we could split the number into an array
 * and assign the characters into their respective index
 */


// beacause we resolve reach index with their respective 0-9 for that digit
// e.g. 
//  d -> [0,0,0,d] 
// => d would use characters I,V,X
//
// cd -> [0,0,c,d] 
// => c would have characters X,L,C
//
// etc...
// such that
// abcd -> [a,b,c,d]
// => 
// -> a M (such that MMM === 3000) , but M or (MV | Iↁ)
// -> b C,D,M
// -> c X,L,C
// -> d I,V,X 


// first we need to resolve any number under 1000,

```

``` js
function rn(num) {
  if (num < 1 || num >= 4000) {
    return "number is out of bounds";
  }

  const array = []; //?
  
  const n = num.toString().split(''); //?
  const length = n.length;

  let number;

  // normalise
  if (length < 4) {
    for(let i = 0; i < 4 - length ; i++) {
      array[i] = '0';
    }
    number = [...array, ...n] //?
  } else {
    number = n;
  }

  // convert back to numbers
  number = number.map(n => Number(n))

  // set chars
  const chars = [
    ["M", "MM", "MMM"],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  ];

  let string = '';
  for (let i = 0; i < 4; i++) {
    if (number[i] !== 0) {
      string += chars[i][number[i] -1] //?
    } 
  }

  return string;
}

rn(1);    //?
rn(4);    //?
rn(888);  //?
rn(777);  //?
rn(666);  //?
rn(555);  //?
rn(444);  //?
rn(999);  //?
rn(3999); //?
```

### alternate solution
``` js
function rn(num) {
  if (num < 1 || num >= 4000) {
    return "number is out of bounds";
  }

  if (parseInt(num) === NaN) {
    return "Input is not a Number";
  }

  const numberToArray = Array.from(num.toString()).map(n => Number(n));
  let length = numberToArray.length;

  if (length < 4) {
    for (let i = 0; i < 4 - length; i++) {
      numberToArray.unshift(0);
    }
  }

  const chars = [
    ["M", "MM", "MMM"],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  ];

  length = numberToArray.length;
  let string = '';
  for (let i = 0; i < length; i++) {
    if (numberToArray[i] !== 0) {
      string += chars[i][numberToArray[i] -1];
    }
  }
  return string;
}

rn(1);    //?
rn(4);    //?
rn(888);  //?
rn(777);  //?
rn(666);  //?
rn(555);  //?
rn(444);  //?
rn(999);  //?
rn(3999); //?
```
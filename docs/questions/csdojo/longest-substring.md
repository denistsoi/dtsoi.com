given 'aabcddbbbea' find the longest substring such that b:3 is returned.

``` js
function findlongest(string) {
  let max_count = 1;
  let max_char;
  let count = 1;
  
  for (let i = 1; i < string.length - 1; i++) {
    if (string[i-1] === string[i]) {
      count++;
    }

    if (max_count < count) {
      max_count = count;
      max_char  = string[i];
      count = 1;
    }
  }

  const answer = { max_char, max_count };
  return answer;
}

findlongest('aabcddbbbeaccccdedaa');
findlongest('absbdbcnabsbdnwneaasdsnand');
```
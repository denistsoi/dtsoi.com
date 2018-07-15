Given a collection of intervals, merge all overlapping intervals.

Example 1:
```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

Example 2:
```
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
```

``` js
function mergeIntervals(input) {
  if (input.length === 1) {
    return input;
  }

  const output = [];
  let temp = { start: 0, end: 0 };

  for (let i = 1; i < input.length; i++) {
    let present = {
      start: input[i][0],
      end:   input[i][1]
    };
    let past = {
      start: input[i-1][0],
      end:   input[i-1][1]
    }

    if (past.end >= present.start) {
      // merge
      temp.start = past.start; 
      temp.end   = present.end;
    } else {
      // temp = past;
      // output.push([ temp.start, temp.end ]);
      output.push([ past.start, past.end ]);
    }

    if (temp.start > 0 && temp.end > 0) {
      temp = { start: 0, end: 0 };
    };
  }
  
  return output;
}

console.log(mergeIntervals([[1,8], [4,6], [8, 10], [9,18]])) // expect [[1,18]]
console.log(mergeIntervals([[1,4], [5,6]] ));                // expect [[1,5]]
console.log(mergeIntervals([[1,3], [2,6], [8,10], [15,18]])) // expect [[1,6],[8,10],[15,18]]
```
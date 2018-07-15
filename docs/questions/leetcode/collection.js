function mergeIntervals(input) {
  const output = [input[0]];

  for (let i = 1; i < input.length; i++) {
    if (input[i][0] <= output[output.length -1][1]) {
      output[output.length -1][1] = Math.max(input[i][1], output[output.length -1][1]);
    } else {
      output.push(input[i]);
    }
  }
  return output;
}

mergeIntervals([[1,4], [5,6]]) //? 
mergeIntervals([[1,8], [4,6]]) //? 
mergeIntervals([[1,8], [4,6], [8, 10], [ 6,18]]) //? 
mergeIntervals([[1,3], [2,6], [8, 10], [15,18]]) //? 
mergeIntervals([[1,8],[3,6],[9,15],[10,12]]); //?

// expect [[1, 4] , [5, 6]]
// expect [[1, 8]]
// expect [[1,18]]
// expect [[1, 6] , [8,10] , [15,18]]
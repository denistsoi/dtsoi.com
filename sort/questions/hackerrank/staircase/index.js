const jump = (n) => {
  const array = new Array(n + 1);
  array[0] = 1;
  array[1] = 1;
  array[2] = 2;
  for (let i = 3; i <= array.length - 1; i++) {
    array[i] = array[i-1] + array[i-2] + array[i-3];
  }
  return array[array.length - 1];
}
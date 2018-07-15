const isStringBalanced = (string) => {
  if (string.length % 2 !== 0) { return "NO"; }
  
  let stack = [];
  for (let char of string) {
    switch (char) {
      case '{':
      case '(':
      case '[':
        stack.push(char);
        break;
      case '}':
        if (stack.length === 0 || stack[stack.length-1] !== '{') {
          return "NO";
        }
        stack.pop();
        break;
      case ')':
        if (stack.length === 0 || stack[stack.length-1] !== '(') {
          return "NO";
        }
        stack.pop();
        break; 
      case ']':
        if (stack.length === 0 || stack[stack.length-1] !== '[') {
          return "NO";
        }
        stack.pop();
        break;      
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

require('fs').readFile('./inputs/01.txt', 'utf-8', (err, data) => {
  const inputs = data.replace(/\s*$/, '').split('\n').map(str => str.replace(/\s*$/, ''));
  const count  = inputs.shift();

  inputs.map(string => console.log(isStringBalanced(string)));
});
---
prev: /en/js/01/challenge.md
next: /en/
---

## Solution

``` js
// Rock paper scissors
// constants
var Rock = 0;
var Paper = 1;
var Scissors = 2;

function validate(name, value) {
  if (typeof value != 'number') {
    throw new Error('value is not a number, ' + name + ' chose: ' + value);
  }
  if (value > 2 || value < 0) {
    throw new Error('value is not 0, 1 or 2, ' + name + ' chose: ' + value);
  }
}

/**
 * game function
 * @description 
 * @param {Number} p1 
 * @param {Number} p2 
 * @return {String} resulf of who wins
 */
var game = function(p1, p2) {
  // if p1 or p2 !== 0,1,2, return error 
  validate('player1', p1);
  validate('player2', p2);

  // return draw if p1 is same as p2
  if (p1 === p2) {
    console.log('draw');
    return 'draw';
  }

  // player1 wins
  if (
    p1 === Rock     && p2 === Scissors ||
    p1 === Paper    && p2 === Rock || 
    p1 === Scissors && p2 === Paper
  ) {
    console.log('p1 wins, p1 picked: ' + p1 + ' p2 picked: ' + p2);
    return 'player 1 wins';
  }

  console.log('p2 wins, p2 picked: ' + p2 + ' p1 picked: ' + p1);
  return 'player 2 wins';
}

// game(0, -1) // should throw error
// game('srgin', -1) // should throw error
game(0, 2); // who wins? // player1 
game(0, 2); // player1
game(1, 2); // should return player 2
```
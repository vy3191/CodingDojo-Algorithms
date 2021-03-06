/*This is based on "Flexible Countdown".  The parameter names are not as helpful
but the problem is essentially identicalf; don't be thrown off!!!
Given 4 parameters (param1, param2, param3, param4), print the multiples
of param1, starting at param2 and extending to param3.
One exeption: if multiple is equal to param4, then skip (don't print) that one.
Do this using a while loop.
Example: Given (3,5,17,19), print 6,12,15 (which are all the multiples of 3)*/

function finalCount(param1, param2, param3, param4) {
  if (param2 <= param3) {
    for (var i = param2; i <= param3; i++) {
      if (i == param4) {
        continue;
      }
      if (i % param1 == 0) {
        console.log(i);
      }
    }
  } else {
    for (var i = param2; i >= param3; i--) {
      if (i == param4) {
        continue;
      }
      if (i % param1 == 0) {
        console.log(i);
      }
    }
  }
}

console.log('Test Case 1');
finalCount(3, 5, 17, 9);
console.log('********************');
console.log('Test Case 2');
finalCount(3, 52, 3, 12);
console.log('********************');

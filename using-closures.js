/*
var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)
*/


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var i = -1;

  return function() {
    /* your code here */

    i += 1;

//    console.log("i: " + i);
//    console.log("list[i]: " + list[i]);
    return list[i];
  }
}

var rollLoadedDie = makeLoadedDie();
/*
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
*/

var countdownGenerator = function (x) {
  /* your code here */

  var num = x;

  return function () {
    if (num < 0) {
      console.log("Rockets already gone, bub!");
    } else {
      if (num === 0) {
        console.log("Blast Off!");
      } else {
        console.log("T-minus " + num + "...");
      }
    }
    num -= 1;
  }
};

var countdown = countdownGenerator(3);
console.log(countdown);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!






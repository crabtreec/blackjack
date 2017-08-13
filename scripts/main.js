/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let CardValues = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ];


function handValue(hand) {

let aces = [];
let total = 0;
for (let i = 0; i < hand.length; i++) {
  if (hand[i] === "J" || hand[i] === "K" || hand[i] === "Q") {
  total += 10;
} else if (hand[i] === "1" || hand[i] === "2" || hand[i] === "3" || hand[i] === "4" || hand[i] === "5" || hand[i] === "6" ||
    hand[i] === "7" || hand[i] === "8" || hand[i] === "9" || hand[i] === "10" ) {
    total += parseInt(hand[i]);
  } else if (hand[i] === "A"){
    aces.push(hand[i]);
  }
}

for (let j = 0; j < aces.length; j++) {
  if(total > 10){
    total += 1;
  }
  else {
    total += 11;
  }
}
console.log(total);
return total;
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

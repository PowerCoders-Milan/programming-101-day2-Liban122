//insert your pseudocode below
/*
1.create two variable one for the prompt and the second for the random numbers from 1-100
2. create a while "while the random number Not equal to prompt number".
3.1 inside the loop we insert our condition if the random numbers "1-100" greater than the entered number prompt reply High
here
3.2else if the its smaller prompt reply Low.
4. else if its equal prompt reply Done.
5. Print

*/

//insert your code below
var x, number;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


x = Number(window.prompt('Write Your Number'));
number = mathRandomInt(1, 100);
while (number != x) {
  if (number > x) {
    x = Number(window.prompt('high'));
  }
  if (number < x) {
    number = window.prompt('low');
  }
}
window.alert('Done');
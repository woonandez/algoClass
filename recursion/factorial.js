/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function computeFactorial(num) {
   if (num === 1) {
    return num;
  } else {
    return num * computeFactorial(num - 1);
  }
}
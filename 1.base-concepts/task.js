"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - (4 * a * c);
  let x1, x2;
  
if (D > 0) {
  console.log("Дискриминант: " + D + " > 0, => 2 корня: ");
  x1 = (-b + Math.sqrt(D)) / (2 * a);
  x2 = (-b - Math.sqrt(D)) / (2 * a);
  arr.push(+x1.toFixed(0));
  arr.push(+x2.toFixed(0));
  console.log(arr);

} else if (D===0) {
  console.log("Дискриминант: " + D + " = 0, => 1 корень: ");
  x1 = (-b) / (2 * a);
  arr.push(+x1.toFixed(0));
  console.log(parseInt(arr[0]));

} else {
  console.log("Дискриминант: " + D + " < 0, => корней нет: ");
  console.log(arr);
}
return arr;
};
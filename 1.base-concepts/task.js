"use strict";

console.log ("Задание №1");

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - (4 * a * c);
  let x1, x2;
  
if (D > 0) {
  console.log("Дискриминант: " + D + " > 0, => 2 корня: ");
  x1 = (-b + Math.sqrt(D)) / (2 * a);
  x2 = (-b - Math.sqrt(D)) / (2 * a);
  arr.push(x1.toFixed(0));
  arr.push(x2.toFixed(0));
  console.log(arr);
} else if (D==0) {
  console.log("Дискриминант: " + D + " = 0, => 1 корень: ");
  x1 = (-b) / (2 * a);
  arr.push(x1.toFixed(0));
  console.log(parseInt(arr[0]));
} else {
  console.log("Дискриминант: " + D + " < 0, => корней нет: ");
  console.log(arr);
}
};

return arr;




/*  if(D < 0)
  return false;

  if(D == 0)
      arr = (-b/(2*a));

  else if(D > 0){
      let tmp = [];
      tmp.push((-b + Math.sqrt(d) )/(2*a));
      tmp.push((-b - Math.sqrt(d) )/(2*a));
      arr = tmp;
  }
  

  // код для задачи №1 писать здесь
  return arr; // array
}




/*let quadraticEquation = (a, b, c) => {
  if(a == 0)
      return false;
  let res = {};
  let D = b * b - 4 * a * c;
  console.log('D = ' + D);
  if(D < 0)
      return false;
  res['discriminant'] = D;
  if(D == 0)
      res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
  else if(D > 0){
      let tmp = [];
      tmp.push((-b + Math.sqrt(D)) / (2 * a));
      tmp.push((-b - Math.sqrt(D)) / (2 * a));
      res["quadratic roots"] = tmp;
  }
  return res;
}
console.log(quadraticEquation(1,12,36));


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;

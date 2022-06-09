// Задание 1
function getArrayParams(arr) {

  let min = arr.length, minimum = Infinity;
  let max = arr.length, maximum = -Infinity;

  for (min--) 
    if (Number(arr[min]) < min) 
      minimum = Number(arr[min]);
    


  for (max--) {
    if (Number(arr[max]) > max) 
      maximum = Number(arr[max]);
      
  }


return { min: minimum, max: maximum, avg: avg };
}

getArrayParams([-99, 99, 10])




/* function arrayMin(arr) {
  var len = arr.length, min = Infinity;
  while (len--) {
    if (Number(arr[len]) < min) {
      min = Number(arr[len]);
    }
  }
  return min;
};

function arrayMax(arr) {
  var len = arr.length, max = -Infinity;
  while (len--) {
    if (Number(arr[len]) > max) {
      max = Number(arr[len]);
    }
  }
  return max;
}; */








// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}

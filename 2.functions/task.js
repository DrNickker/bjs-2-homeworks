// Задание 1
function getArrayParams(arr) {
<<<<<<< HEAD

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
=======
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;

	for (let i = 0; i < arr.length; i++) {

		if (max < arr[i]) {
			max = arr[i];
		};
		if (min > arr[i]) {
			min = arr[i];
		};
		sum += arr[i];
	}

	avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return { min, max, avg };
};

>>>>>>> f5fab45ebbcb2a66c48dc6c96aa3aed8537bd211

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
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
      let result = func(arrOfArr[i]);
      if (max < result) max = result;
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let min = max = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
          max = arr[i];
      }
      if (min > arr[i]) {
          min = arr[i];
      }
  }
  return max - min;
}

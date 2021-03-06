//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function countDown(n) {
  let num = n;
  while (num >= 0) {
    console.log(num);
    num += -1;
  }
}

//2. Next, try looping just like above except using recursion
function countDown(n) {
  if (n === 0) {
    return 0;
  } else {
    return countDown(n - 1);
  }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  let baseResult = base;
  while (expo) {
    baseResult = baseResult * base;
    expo += -1;
  }
  return baseResult;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function countDown(base, expo) {
  if (expo === 0) {
    return base;
  } else {
    return base * countDown(base, expo - 1);
  }
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  let index = 0;
  while (index < arr.length) {
    arr[index] = arr[index] * num;
    index++;
  }
  return arr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr, index = arr.length - 1) {
  if (index < 0) {
    return arr;
  } else {
    let array = [...arr];
    array.push(array[index]);
    array.splice(array[index - 1], 1);
    return recursiveReverse(array, index += -1);
  }
}






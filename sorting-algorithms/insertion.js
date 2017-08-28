/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/


function insertionSort(arr) {
  var result = [];
  const array = [...arr];
  array.forEach(v => {
    console.log(v);
  })
  // iterate through the original array one time all the way through
    // on the nested for loop
      // if length === 0 push
      // else if current Val from above is > nested val
        // then I need to slice the result array up to
  console.log(array)
  return result;
}

console.log(insertionSort([4,5,1,10,11,2,2, 40, 30]));


// [1, 6, 8, 2, 5];
// [1]
// [6, 8, 2, 5];
// [1, 6]
// [ 8, 2, 5];
// [1, 6, 8]
// [2, 5];
// [1, 2, 6, 8]
// [5]
// [1, 2 ] [6, 8]


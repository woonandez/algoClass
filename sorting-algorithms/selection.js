/*
SELECTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

*** Exercises

- Implement selection sort
- Identify time complexity

Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?

*/

function selectionSort(array, result = []) {
  let smallestVal = Math.min.apply(null, array);
  if (array.length === 0) {
    return result;
  } else {
    let newArray;
    [...array].forEach((val, key) => {
      if (val === smallestVal) {
        let sliceArray = array.slice(key);
        let origArray = array.slice(0, key);
        sliceArray.shift();
        newArray = origArray.concat(...sliceArray);
        result.push(val);
      }
    });
    return selectionSort(newArray, result);
  }
}


console.log(selectionSort([4,5,1,10,11,2,2, 40, 30]));










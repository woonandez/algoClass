/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

function merge(left, right) {
  var result = [];
  var iLeft = 0;
  var iRight = 0;
  while (result.length < (left.length + right.length)) {
    if (iLeft === left.length) result = result.concat(right.slice(iRight));
    else if (iRight === right.length) result = result.concat(left.slice(iLeft));
    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
    else result.push(right[iRight++]);
  }
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  var left = array.slice(0, array.length / 2);
  var right = array.slice(array.length / 2);
  var leftSorted = mergeSort(left);
  var rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}


mergeSort([82,6,2,1,3,7,8,10])
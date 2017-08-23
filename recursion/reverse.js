/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/
function reverse(str, index = str.length - 1) {
  if (index < 0) {
    return str;
  } else {
    let arr = str.split('');
    arr.push(arr[index]);
    arr.splice(index, 1)
    return reverse(arr.join(''), index - 1);
  }
}
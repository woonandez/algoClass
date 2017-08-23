/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
  return [...arr].reduce((res, val) => {
    if (Array.isArray(val)) {
      return res.concat(flatten(val));
    }
    return res.concat(val);
  }, []);
}
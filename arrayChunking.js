// Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

// Examples
// chunk([1,2,3,4],2) ==> [[1,2],[3,4]]
// chunk([1,2,3,4,5],2) ==> [[1,2],[3,4],[5]]
// chunk([1,2,3,4],4) ==> [[1,2, 3,4]]

function chunk(arr, size) {
  const result = [];

  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4));

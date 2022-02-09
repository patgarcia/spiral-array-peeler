/* PROBLEM

Write a function that takes an n*m array as input 
and returns a "spiral" path through the array, 
starting in the upper-left corner and moving clockwise.

example: 

input = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]

output = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]

*/

// "Peels" the array outter layer recursively
// to create a spiral path.
function arrayPeeler(array, result = []) {
  if (array.length === 1) return result.concat(array.pop());
  const [top, ...mid] = array;
  const bottom = mid.pop().reverse();
  const left = [];
  const right = [];
  if (mid.length > 0) {
    for (let row of mid) {
      right.push(row.pop());
      left.unshift(row.shift());
    }
  }
  result = [...result, ...top, ...right, ...bottom, ...left];
  if (!mid.length) return result;
  return arrayPeeler(mid, result);
}

// Testing arrays of different shapes
const arrayMxM1 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

const arrayMxM2 = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
];

const arrayMxM3 = [
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
];

const arrayMxN = [
  [1, 2, 3, 4, 5, 6, 7],
  [22, 23, 24, 25, 26, 27, 8],
  [21, 36, 37, 38, 39, 28, 9],
  [20, 35, 42, 41, 40, 29, 10],
  [19, 34, 33, 32, 31, 30, 11],
  [18, 17, 16, 15, 14, 13, 12],
];

console.log('Peeled arrayMxM1', arrayPeeler(arrayMxM1));
console.log('Peeled arrayMxM2', arrayPeeler(arrayMxM2));
console.log('Peeled arrayMxM3', arrayPeeler(arrayMxM3));
console.log('Peeled arrayMxN', arrayPeeler(arrayMxN));

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
function spiral(array, result = []) {
    if (!array.length) {
        return result
    } else if (array.length == 1) {
        return result.concat(array.pop())
    }
    let [start, ...middle] = array;
    let end = middle.pop();
    result = result.concat(start)
    let rightCol = [];
    let leftCol = [];
    for (row of middle) {
        rightCol.push(row.pop());
        leftCol.unshift(row.shift());
    }
    result = result.concat(rightCol)
    end.reverse()
    result = result.concat(end)
    result = result.concat(leftCol)

    return spiral(middle, result)
}

// Testing arrays of different shapes
array1 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]

array2 = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
]

array3 = [
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
]

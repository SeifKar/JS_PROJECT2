//Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers)); // Output: 5
console.log(findMin(numbers)); // Output: 1

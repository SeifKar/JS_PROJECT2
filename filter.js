//Filter Array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

const filtered = filterArray(numbers, num => num > 2);
console.log(filtered); // Output: [3, 4, 5]

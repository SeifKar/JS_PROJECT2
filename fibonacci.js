//Fibonacci Sequence
function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq.slice(0, n);
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

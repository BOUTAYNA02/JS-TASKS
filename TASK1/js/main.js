let N = 2024;
let result = (N % 4 === 0 && N % 100 !== 0) || (N % 400 === 0) ? "Leap Year" : "Not a Leap Year";

console.log(N , result);

const arr = [10, 2, 1, 5, 8, 12, 3, 7];

//===============================================>>>>

// Using Array methods
const evenNumbers = arr.filter(num => num % 2 === 0);
const oddNumbers = arr.filter(num => num % 2 !== 0);

console.log("Even Numbers (using array methods):", evenNumbers);
console.log("Odd Numbers (using array methods):", oddNumbers);

//===============================================>>>>

// Using for loops:
const evenNumbersForLoop = [];
const oddNumbersForLoop = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenNumbersForLoop.push(arr[i]);
  } else {
    oddNumbersForLoop.push(arr[i]);
  }
}

console.log("Even Numbers (using for loop):", evenNumbersForLoop);
console.log("Odd Numbers (using for loop):", oddNumbersForLoop);
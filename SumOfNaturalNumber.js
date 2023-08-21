// const inputNumber = prompt("Enter Number:");
// const n = parseInt(inputNumber);

const n=123;
let sum = 0;

for (let i = n; i > 0; i = Math.floor(i / 10)) {
    sum += i % 10;
    console.log(sum);
}

console.log(sum);

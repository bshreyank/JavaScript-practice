const input = prompt("Enter a Number:");
const n = parseInt(input);
let sum1 = n % 10;
let sum2 = 0;

let temp = Math.floor(n / 10);
while (temp > 9) {
    sum2 += temp % 10;
    temp = Math.floor(temp / 10);
}
sum1 += temp;

alert("First and Last Digit Addition: " + sum1);
alert("Rest of the digit Addition: " + sum2);

if (sum1 === sum2) {
    alert("True");
} else {
    alert("False");
}

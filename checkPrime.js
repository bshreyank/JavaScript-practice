/*const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

document.write("<h1>"+isPrime(4)+"</h1>")
*/

function isPrime(num) {     
        if (num <= 1) return false;       // negatives
        if (num % 2 == 0 && num > 2) return false;      // even numbers
      
        const square = Math.sqrt(num); // store the square to loop faster
      
        for (let i = 3; i <= square; i += 2) {   // start from 3, stop at the square, increment in twos
          if (num % i === 0) return false;    // modulo shows a divisor was found
        }
        return true;
      }
      
      document.write("<h1>"+isPrime(4)+"</h1>");

//=============================================================>>>
function isPrimeNumber(n) {
        for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
          if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
        }
        return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
      }
      
      console.log(isPrimeNumber(1));  // returns false
      console.log(isPrimeNumber(2));  // returns true
      console.log(isPrimeNumber(9));  // returns false
      console.log(isPrimeNumber(11)); // returns true
      console.log(isPrimeNumber(7)); // returns true
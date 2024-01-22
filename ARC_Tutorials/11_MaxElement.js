/*

Q. How to find maximum and minimum value in a numbered array?

• To find maximum and minimum value in a numbered array, we are implementing a
method which will find Max value, and find Min value.

• Inside the method, we are making use of the Array reduce method and
for each element, we will check if the value is greater than the previous
one.

*/

const NumberArray = [10, 4, 5, 65, 34, 23, 85, 10, 4, 5, 100]

function findMaxValue(arr) {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr
  })
}

function findMinValue(arr) {
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr
  })
}

console.log('Find Max Value: ', findMaxValue(NumberArray))
console.log('Find Min Value: ', findMinValue(NumberArray))

//==================================================>>>>
const NumArr = [1, 2, 3, 4, 5, 6, 7, 765, 4354]

const MaxNos = NumArr.reduce((a, b) => {
  return a > b ? a : b
})
console.log('MaxNos: ', MaxNos)

const MinNos = NumArr.reduce((a, b) => {
  return a < b ? a : b
})
console.log('MinNos: ', MaxNos)

//==================================================>>>>

const number = [5, 45, 154, 163, 87, 72, 98, 12, 10]
console.log("Math.max Method: ",Math.max(...number))

console.log("Math.min Method: ",Math.min(...number))

function removeNumbersFromString(inputString, substringsToRemove) {
  for (let i = 0; i < substringsToRemove.length; i++) {
    inputString = inputString.split(substringsToRemove[i]).join('')
  }

  // Remove any remaining numbers
  let resultString = ''
  for (let i = 0; i < inputString.length; i++) {
    //The isNaN(parseInt(inputString[i])) condition is used to check if the current character is not a number.
    // If it's not a number, it's added to the resultString.
    if (isNaN(parseInt(inputString[i]))) {
      resultString += inputString[i]
    }
  }

  return resultString
}

// Example usage
const inputString = 'Hello123 World456!'
const substringsToRemove = ['123', '456']

const result = removeNumbersFromString(inputString, substringsToRemove)

console.log(result)

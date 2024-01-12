function removeNumbersFromString(inputString, substringsToRemove) {
    substringsToRemove.forEach(substring => {
        inputString = inputString.split(substring).join('');
    });

    // Remove any remaining numbers
    inputString = inputString.replace(/\d+/g, '');

    return inputString;
}

// Example usage
const inputString = "Hello123 World456!";
const substringsToRemove = ["123", "456"];

const result = removeNumbersFromString(inputString, substringsToRemove);

console.log(result);

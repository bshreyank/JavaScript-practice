//Remove the numbers from string where an array of string is given

function removeNumbersFromString(inputString, substringsToRemove) {
    // Create a regular expression pattern based on the substrings to remove
    const pattern = new RegExp(substringsToRemove.join('|'), 'g');
    
    // Replace the matched substrings with an empty string
    const resultString = inputString.replace(pattern, '');
    
    return resultString;
}

// Example usage
const inputString = "Hello123 World456!";
const substringsToRemove = ["123", "456"];

const result = removeNumbersFromString(inputString, substringsToRemove);

console.log(result);

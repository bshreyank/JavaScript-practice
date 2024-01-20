// const inputString = "Hello World"
// let reversedString =''

// for (let i=inputString.length-1;i>=0;i--){
//   reversedString +=inputString[i]
// }
// // document.write("<h1>"+reversedString+"</h1>")
// console.log(reversedString)

//=======================================================>>>
//WITH FUNCTION

function reverseWords(input){
  const words = input.split(" ");

  const reverseWords = words.map((words)=>{
    return words.split("").reverse().join("");
  });

  return reverseWords.join(" ");
}

const inputString = "shryeank Bnsod"
const reversedString = reverseWords(inputString);
console.log(reversedString)

////////=================================================>>>
//WITHOUT FUNCTION



// function reverseWordsManually(input) {
//   let reversedString = '';
//   let currentWord = '';

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === ' ' || i === input.length - 1) {
//       if (i === input.length - 1) {
//         currentWord += input[i];
//       }
      
//       for (let j = currentWord.length - 1; j >= 0; j--) {
//         reversedString += currentWord[j];
//       }
      
//       if (input[i] === ' ') {
//         reversedString += ' ';
//       }
      
//       currentWord = '';
//     } else {
//       currentWord += input[i];
//     }
//   }

//   return reversedString;
// }

// const inputString = "Hello World";
// const reversedString = reverseWordsManually(inputString);
// document.write(reversedString);
// ==============================================================


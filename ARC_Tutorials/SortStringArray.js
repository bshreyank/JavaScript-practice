//How to sort a given wordsay of string?

const words = ['d','e','ab','ef','abc','g']

console.log(words.sort());
//[ 'ab', 'abc', 'd', 'e', 'ef', 'g' ]

////===============================================>>>>

// Bubble sort for sorting in ascending order
for (let i = 0; i < words.length - 1; i++) {
  for (let j = 0; j < words.length - 1 - i; j++) {
    if (words[j] > words[j + 1]) {
      // Swap elements if they are in the wrong order
      const temp = words[j];
      words[j] = words[j + 1];
      words[j + 1] = temp;
    }
  }
}

console.log("Sorted words (Ascending):", words);

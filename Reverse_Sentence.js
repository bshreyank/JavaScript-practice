function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}

function reverseSentence(sentence) {
    let reversedSentence = '';
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            currentWord = currentWord+sentence[i];
        } else {
            reversedSentence += reverseWord(currentWord) + ' ';
            currentWord = '';
        }
    }

    // Handling the last word in the sentence
    if (currentWord !== '') {
        reversedSentence =reversedSentence+reverseWord(currentWord);
    }

    return reversedSentence;
}

let originalSentence = "Hello World";
let reversedSentence = reverseSentence(originalSentence);

console.log(reversedSentence);

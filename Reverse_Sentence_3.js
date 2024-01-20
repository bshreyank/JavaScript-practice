var string = "Hello World";

function reverseBySeparator(string, sepatator){
    return string.split(sepatator).reverse().join(sepatator);
}

//dlroW olleH
var reverseEntireSentence = reverseBySeparator(string, "");

//olleH dlroW
var reverseEachWord = reverseBySeparator(reverseEntireSentence," ");

console.log(reverseEntireSentence);
console.log(reverseEachWord);


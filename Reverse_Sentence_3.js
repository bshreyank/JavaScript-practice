var string = "Hello World";

function reverseBySeparator(string, sepatator){
    return string.split(sepatator).reverse().join(sepatator);
}

//dlroW olleH
var reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence);

//olleH dlroW
var reverseEachWord = reverseBySeparator(reverseEntireSentence," ");
console.log(reverseEachWord);


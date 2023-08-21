// var input=“my name is jay”
// expected output = “ym eman si yaj”

function reverseString (input){
        const words = input.split(" ");

        const reverseWord = words.map((words)=>{
                words.reverse().split("").join("");
        })

        return reverseWord.join(" ");
}

const string = "my name is jay"
const output = reverseString(string)
console.log(output)

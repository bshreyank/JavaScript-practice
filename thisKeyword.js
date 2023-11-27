//console.log(this.find);

//===========================================>

// function myFunction() {
//     console.log(this);
//   }
  
//   myFunction(); // Outputs the global object (window in browsers)
//===========================================>
// function fetchData() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         const data = "Hello, world!";
//         resolve(data);
//       }, 2000);
//     });
//   }
  
//   function processData(data) {
//     console.log("Processed data:", data);
//   }
  
//   fetchData()
//     .then(processData)
//     .catch(function(error) {
//       console.log("Error:", error);
//     });
//===========================================>
  
//map 
const numbers = [1,2,3]

const double =  numbers.map((num)=>{
  return num*2;
})

console.log(double);
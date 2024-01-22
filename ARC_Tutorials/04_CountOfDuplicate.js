// How to find the count of duplicates in an array
// Occurence of a number in a code 

const months = ['May', 'Feb', 'Feb', 'April', 'June', 'May','Feb','July','December']

/*
const countOfDuplicates = months.reduce((obj,months)=>{
    if(obj[months]==undefined){
        obj[months]=1;
        return obj;
    }else{
        obj[months]++;
        return obj;
    }
},{});

console.log(countOfDuplicates);
*/

const count = {}
for (const element of months) {
  if (count[element]) {
    count[element] += 1
  } else {
    count[element] = 1
  }
}

console.log(count)
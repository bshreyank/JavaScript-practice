//Q9. How to find unique values in an array?

const Ids = [10,4,5,65,34,23,85,10,4,5];

const uniqueValues = Ids.filter((element,index,array)=>array.indexOf(element)==index);
console.log(uniqueValues);

//Q10. How to find unique values from an Array in sorted order?

const sortedUniqueValue = uniqueValues.sort((a,b)=>a-b);
console.log(sortedUniqueValue);
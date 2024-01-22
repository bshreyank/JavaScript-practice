const duplicatedArray = [14,23,6,6,14,25,65]

const duplicate = duplicatedArray.filter((element,index,array)=>array.indexOf(element)!==index);

console.log(duplicate);
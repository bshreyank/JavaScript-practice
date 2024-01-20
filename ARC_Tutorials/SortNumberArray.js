const arr = [10, 2, 1, 5, 8, 12, 3, 7];

// console.log(arr.sort()); // sorting alphabetically

const sortArr = arr.sort((a,b)=>{
    return a-b;
})

console.log(sortArr);


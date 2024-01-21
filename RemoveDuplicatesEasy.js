array = [1,10,4,4,6,2,7,1,2,9,10]
const uniqueArray=[...new Set(array)]
console.log(uniqueArray)
//////////////////////////////////////////////////
const arr = [1,2,3,4,1,2];
const b=[];
for(let i=0;i<arr.length;i++){
  if(b.indexOf(arr[i]) == -1){
    b.push(arr[i])
  }
}
console.log("removed array value",b)
////////////////////////////////////////////////////
const arr2 = [1,2,3,4,1,2];
const c=[];
arr.filter((dup)=>{
  if(c.indexOf(arr[dup]) == -1){
    c.push(arr[dup])
  }
})
console.log("removed array value",c);
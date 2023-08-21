// class minFromArray{
//         findMin(a){
//                 let min =a[0];
//                 for(let i=0 ;i<a.length;i++){
//                         if(min>a[i]){
//                                 min = a[i];
//                         }
//                 }
//         return min;
//         }
// }

// const a=[22,17,5,465,77];
// console.log(new minFromArray().findMin(a));

//====================================================>
//Using Arrow Function: 

const findMin=a=>{
        let min =a[0];
        for(let i=0;i<a.length;i++){
                if(min>=a[i]){
                        min=a[i];
                }
        }
        return min
};

const a=[22,55,10,6,87];
console.log(findMin(a));
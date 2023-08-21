const findMax=a=>{
        let max =a[0];
        for(let i=0;i<a.length;i++){
                if(max<=a[i]){
                        max=a[i];
                }
        }
        return max;
};

const a=[22,55,10,6,87];
console.log(findMax(a));
const findSecondMax = a =>{
        let FirstMax=a[0];
        let SecondMax=a[0];

        for(let i=0;i<a.length;i++){
                if(a[i]>FirstMax){
                        SecondMax = FirstMax;
                        FirstMax = a[i];
                }else if (a[i]>SecondMax && a[i] !==FirstMax){
                        SecondMax = a[i];
                }
        }
        return SecondMax;
};

const a = [1,2,3,4,5]
console.log(findSecondMax(a));
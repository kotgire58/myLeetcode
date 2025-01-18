function product(nums){
let result=[]
let prod
for(i=0;i<nums.length;i++){
        
    newarr=nums.filter((_,index)=>i!=index)
    result[i]=newarr.reduce((acc,num)=>acc*num,1)
    
}
return result
    

}

console.log(product([5,2,3]));

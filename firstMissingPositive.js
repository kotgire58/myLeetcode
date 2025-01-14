//lc 41

function firstMissing(nums){
    let value = 1;
    nums.sort((a,b)=>a-b);
    const numsSet= new Set(nums);
    const numArray = [...numsSet];

    console.log(numArray);
    let i=0
    while(numArray[i]>0){
        if(numArray[i]!=value){return value;
            
        }
        else{i++
            value++
        }
    }

}
console.log(firstMissing([1,2,3,4,4,3,2,-2,3]))
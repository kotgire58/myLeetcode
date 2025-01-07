
    function hasDuplicate(nums) {
        i=0
        j=1

        
        while(i<j&&j<nums.length){
            if(nums[i]==nums[j]){
                return true
            }
            i++
            j++

        }

        return false
        
       
        
    }


    console.log(undefined==undefined);









// nums.sort((a,b)=>a-b)
//         console.log(nums);
        
//         for(i=0,j=1;i<nums.length-1&&j<nums.length;i++,j++){
//             if(nums[i]==nums[j]){
//                 return true
//             }
//         }
//         return false
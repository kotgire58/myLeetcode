    var removeElement = function(nums, val) {
        let _ = "_"
        let k = 0
        for(i=0;i<nums.length;i++){
            if(nums[i]!==val){
                k++

            }
            
            
        }
        return k
    };
    console.log(removeElement([0,1,2,2,3,0,4,2],2))
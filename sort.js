function sorting(nums) {
    let nums1=[]
    max=0
    for(i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
        }
        nums.splice(i,1)

        nums1.push(max)

        max=0
    }
    console.log(nums1);
    
}

sorting([2,3,1,4,3])
var intersection = function(nums1, nums2) {
    numsfinal=[]
    for(i=0;i<nums1.length;i++){
            if(nums2.includes(nums1[i])&&!numsfinal.includes(nums1[i])){
                numsfinal.push(nums1[i])
                
            }
        
    }
    
    return numsfinal
};
console.log(intersection([4,9,5],[9,4,9,8,4]))
console.log(intersection([1,2,2,1],[2,2]))
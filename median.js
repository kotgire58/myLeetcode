/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3=[]

    nums3=[...nums1,...nums2]
    nums3=nums3.sort((a,b)=>a-b)
    console.log(nums3)

    if (nums3.length%2==0)
        return (nums3[(nums3.length/2)-1]+nums3[Math.floor((nums3.length)/2)])/2

    else{
        return nums3[Math.floor(nums3.length/2)]
    }

    

};
console.log(findMedianSortedArrays([1,2,3], [6,7,8,9,10]));  // Should return 5

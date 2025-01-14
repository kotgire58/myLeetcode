
// //leetcode  217

//     function hasDuplicate(nums) {
//         i=0
//         j=1

        
//         while(i<j&&j<nums.length){
//             if(nums[i]==nums[j]){
//                 return true
//             }
//             i++
//             j++

//         }

//         return false
        
       
        
//     }


// console.log(hasDuplicate([1,2,1,3,4,5]))







function Duplicate(arr){
    const arrSet = new Set(arr);
    return arrSet==arr


}
console.log(Duplicate([1,3,4,2]));

var largestNumber = function(nums) {
    nums.sort().reverse()
    str=nums.join('')
    return str

}
console.log(largestNumber([9,97]))
function maxSubarray(arr) {
    let global=-Infinity
    let local=0
    for(i=0;i<arr.length;i++){
        local=local+arr[i]
        global = Math.max(global,local)

        if(local<0){
            local=0
        }

       
 }
return global
}
console.log(maxSubarray([-2,-3,-4]))
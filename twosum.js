function twoSum(arr,target) {
    let result=[]

    for(i=0,j=arr.length-1;i<arr.length&&j<arr.length&&j>i;){
        if(arr[i]+arr[j]>target){
            j--
        }
        else if(arr[i]+arr[j]<target){
            i++
        }
        else if(arr[i]+arr[j]==target)
        {result=[i,j]
            break
            }
    }
    return(result)
}

console.log(twoSum([2,3,4],6));

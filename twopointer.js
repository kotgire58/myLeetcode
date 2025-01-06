function twopointer(arr,target){
    left=0
    right=arr.length-1
    
    result=[]
    while(left<right){
        if(arr[left]+arr[right]>target){
            right--
        }
        else if(arr[left]+arr[right]<target){
            left++
        }
        else {
            result.push(left,right)
            return result
        }
    }

}

console.log(twopointer([1,2,3,4,5,6],9));


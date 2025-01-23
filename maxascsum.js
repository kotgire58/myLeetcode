function maxascsum(arr){
    let num=arr[0]
    let max=0
    for(i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            num=num+arr[i+1]  
            max=Math.max(num,max)      
        }
        else if(arr[i]>arr[i+1]){
            num=arr[i+1]
        }
    }
    return max
    
}

console.log(maxascsum([10,20,30,5,10,50]))
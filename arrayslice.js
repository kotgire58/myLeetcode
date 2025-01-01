function arraySlice(arr,size) {
    let result=[]
    let index=0
    while (index<arr.length){
        result.push(arr.slice(index,index+size))
        index+=size
    
    }

    console.log(result)
}
arraySlice([0,1,2,3,4],2)
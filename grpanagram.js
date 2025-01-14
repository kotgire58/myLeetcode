
function anagram(s,t){
    s1=s.split('')
    t1=t.split('')
    s1.sort()
    t1.sort()
    s1=s1.join('')
    t1=t1.join('')
    return s1==t1    
}


function grpana(arr){
    result=[]
    ana={}
    
    for(i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++)
        if(anagram(arr[i],arr[j])){
            result.push([arr[i],arr[j]])     
             }
             
        
     }
     return result
}
console.log(grpana(["eat","tea","tan","ate","nat","bat"]

));

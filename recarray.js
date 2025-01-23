function recarr(n,m) {
    let arr=[]
    if(n>m){
        return []
    }
return arr=[n, ...recarr(n+1,m)] 
    
    
}
console.log(recarr(2,6))
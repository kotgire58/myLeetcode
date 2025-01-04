function alternating(nums) {
    let pos=[]
    let neg=[]
    let final =[]
    for(i=0;i<nums.length;i++){
        if(nums[i]>=0){
            pos.push(nums[i])}
        else{neg.push(nums[i])}
    }

    console.log(neg)
    console.log(pos)
    for(i=0;i<pos.length&&i<neg.length;i++){
        final.push(pos[i])
        final.push(neg[i])
        }
   
    
    console.log(final)
    
}
//This was my interview question in Tesla, and I was not prepared for the interview. 4 days after the interview, I now solved it in 10 mins.

alternating([-1,1,-2,2,-2,2,-2,3,-3,0])
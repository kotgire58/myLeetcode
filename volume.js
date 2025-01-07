var maxArea = function(height) {
    let maxheight=0
    let secondmaxheight=0
    for(i=0;i<height.length;i++){
        if(height[i]>maxheight){maxheight=height[i]}
    }
    for(j=0;j<height.length;j++){
        if(height[j]>secondmaxheight&&height[j]<maxheight){secondmaxheight=height[j]}

    }
    return maxheight
    

   
    
};
console.log(maxArea([1,2,3,4,5]))
function duplicate(num) {
    const num2 = []
    let i =0
    for (i = 0, j = 1; j < num.length; j++) {
        if (num[i] !== num[j]) {
            num2.push(num[i]);
            i = j;  
        }
    }
    
    num2.push(num[i]);  
    console.log(num2);
    return num2.length;
}

console.log(duplicate([1, 1, 2]));

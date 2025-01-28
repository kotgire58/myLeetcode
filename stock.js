function stock(prices) {
    max=0
    buy=0
    sell=1
    while(buy<prices.length){
        if(prices[sell]>prices[buy]){
            pro=prices[sell]-prices[buy]
            max=Math.max(max,pro)
    }else{
        buy=sell
    }
    sell++
    }
    return max

    
}

console.log(stock([2,1,3,2,4]))
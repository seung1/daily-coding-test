function solution(money) {
    var answer = 0;
    
    if(money.length===3){
        return Math.max(...money)
    }
    
    const dp1 = []
    dp1[0] = money[0]
    dp1[1] = Math.max(money[0], money[1])
    
    for(let i =2;i<money.length-1; i++){
        dp1[i] = Math.max(dp1[i-1],dp1[i-2]  + money[i])
    }
    
    const dp2 = []
    dp2[0] = money[1]
    dp2[1] = Math.max(money[1], money[2])
    
    for(let i =2;i<money.length-1; i++){
        dp2[i] = Math.max(dp2[i-1],dp2[i-2] + money[i+1])
    }
    
    return Math.max(dp1[dp1.length-1],dp2[dp2.length-1]);
}
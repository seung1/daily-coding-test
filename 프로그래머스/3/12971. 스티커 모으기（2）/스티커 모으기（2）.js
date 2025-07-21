function solution(sticker) {
    const dp1 = Array(sticker.length-1).fill(0)
    const dp2 = Array(sticker.length-1).fill(0)
    
    if(sticker.length < 4){
        return Math.max(...sticker)
    }
    
    // 0번째꺼 선택하는 경우
    dp1[0] = sticker[0]
    dp1[1] = Math.max(sticker[0], sticker[1])
    for(let i =2; i<sticker.length-1;i++){
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }
    
    // 1번째꺼 선택하는 경우
    dp2[0] = sticker[1]
    dp2[1] = Math.max(sticker[1], sticker[2])
    for(let i =2; i<sticker.length-1;i++){
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i+1]);
    }
    
    return Math.max(dp1[sticker.length-2], dp2[sticker.length-2])
}

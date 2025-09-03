function solution(sticker) {
    const dp1 = Array(sticker.length-1).fill(0)
    const dp2 = Array(sticker.length-1).fill(0)
    
    // 3개 이하인 경우
    if(sticker.length < 4){
        return Math.max(...sticker)
    }
    
    // 0번째꺼 선택하는 경우
    dp1[0] = sticker[0]
    dp1[1] = Math.max(sticker[0],sticker[1])
    for(let i =2;i<sticker.length-1;i++){
        dp1[i] = Math.max(dp1[i-1],dp1[i-2]+sticker[i])
    }
    
    // 1번째꺼 선택하는 경우
    dp2[0] = 0
    dp2[1] = sticker[1]
    dp2[2] = Math.max(sticker[1],sticker[2])
    for(let i =3;i<sticker.length;i++){
        dp2[i] = Math.max(dp2[i-1],dp2[i-2]+sticker[i])
    }

    return Math.max(dp1[dp1.length-1],dp2[dp2.length-1])
}

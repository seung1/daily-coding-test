function solution(w, h) {
    const total = w*h
    
    // 크기가 작은것이 a
    const [a,b] = [w,h].sort((a,b)=>a-b)
    
    let answer = 0
    for(let i =0; i<a;i++){
        // 경계의 y좌표를 기준으로 계산
        // 좌측 경계는 내림, 우측 경계는 올림
        // 차이를 더해가는 방식
        answer += Math.ceil((i+1)*b / a) - Math.floor(i* b /a)
    }
    
    return total - answer;
}
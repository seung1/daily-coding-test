function solution(n, m, x, y, r, c, k) {
    // 시작과 끝 좌표차이가 홀수인경우 || 짧은 경우 -> 불가능
    const distance = Math.abs(x-r) + Math.abs(y-c)
    if(((k - distance) % 2 ===1) || (distance > k)){
        return "impossible"
    }
    
    // d l r u 이거 순서대로 시도, 시도하면서 계속 가능한지 체크하기
    // 불가능하면 -> 다음꺼시도
    const dir = [[1,0], [0,-1], [0,1], [-1,0]]
    const dirStr = { 0:"d", 1:"l", 2:"r", 3:"u" } 
    
    // 현재 좌표, 남은 거리
    const checkPossible = (x,y,d)=>{
        if(x<0 || y<0 || x>=n || y>=m) return false
        
        const distance = Math.abs(x-(r-1)) + Math.abs(y-(c-1))
        return d >= distance
    }
    
    const f = (start, d) => {
        let visited = ""
        let remain = d
        let x = start[0]
        let y = start[1]
        
        while(remain > 0) {
            for(let i = 0; i< dir.length; i++){
                const [dx,dy] = dir[i]
                const newX = x+dx
                const newY = y+dy
                
                // 범위에 안벗어나고 가능한지 체크
                const isPossible = checkPossible(newX,newY,remain)
                if(isPossible){
                    remain -= 1
                    visited += dirStr[i]
                    x = newX
                    y = newY
                    break
                }
            }
        }
        
        return visited
    } 
    
    return f([x-1,y-1],k);
}
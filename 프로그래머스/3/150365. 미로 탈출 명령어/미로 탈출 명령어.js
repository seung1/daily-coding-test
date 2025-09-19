function solution(n, m, x, y, r, c, k) {
    var answer = '';
    
    // 도착까지 거리가 충분한지, 도착까지거리하고나서 짝수개가 남았는지
    const remain = Math.abs(x-r) + Math.abs(y-c)
    if(remain > k || (k-remain) %2 !==0){
        return "impossible"
    }
    
    // 0부터 인덱싱하기 때문에 1 빼기
    const sx = x-1
    const sy = y-1
    const dx = r-1
    const dy = c-1
    
    // 현재 위치에서, 도착할수 있는지 체크하는 함수
    const checkImpossible = (a,b,d)=>{
        const innerXY = a < n && a >=0 && b < m && b>=0
        const remain = Math.abs(dx-a) + Math.abs(dy-b)
        return innerXY && remain <=d
    }
    
    // d l r u
    const dir = [[1,0], [0,-1], [0,1], [-1,0]]
    const dirStr = ["d","l","r","u"]
    
    // 순회하면서, 가능하면 그걸로 이동해서 계속 진행하기
    const explore = (a,b,d) => {
        let remainD = d
        let curX = a
        let curY = b
        
        while(remainD > 0){
            for(let i = 0 ; i<dir.length; i++){
                const [x,y] = dir[i]
                const newX = curX+x
                const newY = curY+y
                if(checkImpossible(newX,newY,remainD-1)){
                    curX = newX
                    curY = newY
                    remainD -= 1
                    answer += dirStr[i]
                    break
                }
            }
        }
    }
    explore(sx,sy,k)
    
    return answer;
}
function solution(n, s, a, b, fares) {
    var answer = Infinity
    
    // 모든 지점에 대해서, 최단거리 탐색하기
    // 시작지점에서, 각지점을 하나씩 분기점으로 잡아서 계산해나가기
    
    const cache = [] // 최소 비용 저장
    const value = [] // 가중치
    const map = {} // 갈수 있는지 맵
    for(let i = 0; i<=n; i++){
        let temp = Array.from({length:n+1},(_)=>Infinity)
        let temp2 = Array.from({length:n+1},(_)=>Infinity)
        cache.push(temp)
        value.push(temp2)
        if(i>0){
            map[i] = []
        }
    }
    
    // 가중치와 맵정보 기록
    fares.forEach((el)=>{
        const [start,end,dist] = el
        value[start][end] = dist
        value [end][start] = dist
        
        map[start].push(end)
        map[end].push(start)
    })
    
    // 시간 복잡도를 줄이기 위한 deque
    let deque = []
    let index = 0
    const shift = () => {
        const result = deque[index]
        index += 1
        return result
    }
    const length = () =>{
        return deque.length - index
    }
    
    const bfs = (start) => {
        deque = []
        index = 0
        deque.push([start,0])
        cache[start][start] = 0
        
        while(length()>0){
            const [node,dist] = shift()
            map[node].forEach((el)=>{
                const newDist = dist + value[node][el]
                if(cache[start][el] > newDist) {
                    cache[start][el] = newDist
                    cache[el][start] = newDist
                    deque.push([el,newDist])
                }
            })
        }
    }
    
    // s,a,b에 대해서만 bfs
    bfs(s)
    bfs(a)
    bfs(b)
    
    // 자 이제 병목 지점을 1부터 n으로 지정하고 
    // s부터 병목까지 + 병목부터 a + 병목부터 b
    for(let i =1; i<=n; i++){
        answer = Math.min(answer, cache[s][i]+cache[i][a]+cache[i][b])
    }
    
    return answer;
}
function solution(n, edge) {
    // graph 구성하기
    const graph = {}
    for (let i = 1; i<= n ; i++){
        graph[i] = []
    }
    
    edge.forEach((el)=>{
        const [x,y] = el
        graph[x].push(y)
        graph[y].push(x)
    })

    let answer = 0
    
    const dist = { 1:0 }
    
    const bfs = () => {
        const visited = new Set();
        visited.add(1);
        let needVisit = []
        
        // 각 원소에 노드와 거리 저장
        needVisit.push(1)
        
        while ( needVisit.length> 0) {
            const node = needVisit.shift()
            
            // 다음 거리에 있는 노드리스트
            const nextNodes = graph[node]
            nextNodes.forEach((el)=>{
                if(!visited.has(el)) {
                    
                    dist[el] = dist[node]+1
                    
                    // 다음 순회할 노드 추가
                    visited.add(el)
                    needVisit.push(el)
                }
            })
        }
    }
    
    bfs()
    
    const valueList = Object.values(dist)
    const maxValue = Math.max(...valueList)
    
    valueList.forEach((el)=>{
        if(el === maxValue){
            answer += 1
        }
    })
    
    return answer
}
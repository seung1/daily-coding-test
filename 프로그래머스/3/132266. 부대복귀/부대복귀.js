function solution(n, roads, sources, destination) {
    var answer = [];
    
    const map = {}
    for(let i=1; i<=n ; i++){
        map[i] = []
    }
    roads.forEach((road)=>{
        const [start,end] = road
        map[start].push(end)
        map[end].push(start)
    })
    
    const result = {}
    
    const bfs = () =>{
        const visited = new Set();
        let needVisit = []
        
        needVisit.push(destination)
        visited.add(destination)
        result[destination] = 0
        
        while (needVisit.length > 0){   
            const currentNode = needVisit.shift()
            
            const nextNodes = map[currentNode]
            nextNodes.forEach((nextNode)=>{
                // 방문한 적이없다면 방문리스트에 추가하고, 경로 계산
                if(!visited.has(nextNode)) {
                    needVisit.push(nextNode)
                    visited.add(nextNode)
                    result[nextNode] = result[currentNode] + 1
                }
            })
        }
    }
    
    bfs()
    
    sources.forEach((el)=>{
        answer.push(result[el] === undefined ? -1 : result[el])
    })
    
    return answer;
}
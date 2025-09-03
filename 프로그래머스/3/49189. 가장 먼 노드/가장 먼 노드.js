function solution(n, edge) {
    var answer = 0;
    
    const map = {}
    edge.forEach((el)=>{
        const [start, end] = el
        if(map[start]===undefined) map[start]=[]
        if(map[end]===undefined) map[end]=[]
        
        map[start].push(end)
        map[end].push(start)
    })
    
    const d = Array(n+1).fill(Infinity)
    d[0] = 0
    
    const bfs = (start)=>{
        const visited = new Set()
        const needVisit = []
        
        visited.add(start)
        needVisit.push({
            node : start,
            distance : 0
        })
        
        while(needVisit.length>0){
            const {node, distance} = needVisit.shift()
            const nextNodes = map[node]
            
            if(d[node] > distance){
                d[node] = distance
            }
            
            nextNodes.forEach((node)=>{
                if(!visited.has(node)){
                    visited.add(node)
                    needVisit.push({
                        node:node,
                        distance: distance+1
                    })
                }
            })
        }
    }
    
    bfs(1)
    
    const maxDistance = Math.max(...d)
    d.forEach((el)=>{
        if(el===maxDistance){
            answer+=1
        }
    })
    
    return answer;
}
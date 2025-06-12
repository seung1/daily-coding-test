function solution(N, road, K) {
    var answer = 0;

    // 각 노드까지 최단거리를 저장하는 배열
    const min = Array(N).fill(5000001)
    
    // 각 노드에서 갈수 있는 다른 노드 리스트
    const map = {} // "0": [1,2,3]
    const dist = {} // "0-1" : 3
    
    for(let i = 0; i<N;i++){
        map[i+1] = []
    }
    
    road.forEach((el)=>{
        const [start,end,d] = el
        if(!map[start].includes(end)) map[start].push(end)
        if(!map[end].includes(start)) map[end].push(start)
        dist[`${start}-${end}`] = dist[`${start}-${end}`] === undefined? d:Math.min(dist[`${start}-${end}`],d)
        dist[`${end}-${start}`] = dist[`${end}-${start}`] === undefined? d:Math.min(dist[`${end}-${start}`],d)
    })
    
    // bfs로 탐색하면서 최단거리 업데이트
    const bfs = () =>{
        let needVisit = []
        needVisit.push({ node:1, cost:0 })
        min[0] = 0
        
        while (needVisit.length>0){
             const {node, cost} = needVisit.shift()
             const nextNodes = map[node]
             
             nextNodes.forEach((el)=>{
                 const nextCost = cost + dist[`${node}-${el}`]
                 if(nextCost < min[el-1]){
                     min[el-1] = Math.min(min[el-1],nextCost)
                     needVisit.push({
                         node:el,
                         cost:nextCost
                     })
                 }
             })
        }
    }
    bfs()
    
    // 마지막은 배열순회하면서 K보다 같거나 작은 것의 개수 찾기
    min.forEach((el)=>{
        if(el<=K){
            answer+=1
        }
    })

    return answer;
}
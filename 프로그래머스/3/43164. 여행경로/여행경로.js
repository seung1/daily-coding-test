function solution(tickets) {
    // 티켓 리스트를 통해서 graph 만들기
    const graph = {}
    tickets.forEach((ticket)=>{
        const [start, end] = ticket
        if(!graph[start]){
            graph[start] = []
        }
        graph[start].push(end)
    })
    
    let result = []
    // 방문할 노드, 방문한 경로, 티켓그래프
    const bfs = (node,visitedList,graph) =>{
        const newVisitedList = [...visitedList,node]
        
        // 모든 티켓을 소모했을경우 리턴
        if(visitedList.length === tickets.length){
            result.push(newVisitedList)
            return
        }
        
        // 방문할 노드에서 이동할 경로가 남아있는 경우
        if(graph[node] && graph[node].length!==0){
            // 티켓을 순회하면서 bfs 재귀실행 + 티켓그래프에서 제거하기
            graph[node].forEach((el)=>{
                
                const newList = [...graph[node]]
                const idx = newList.indexOf(el);
                newList.splice(idx, 1);
              
                const newGraph = {...graph, [node]: newList}
                bfs(el,newVisitedList,newGraph)
            })
        }
    }
    
    bfs("ICN",[],graph)
    
    result = result.sort()
    return result[0];
}
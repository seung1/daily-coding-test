function solution(n, computers) {
    var answer = 0;
    
    // computers로 그래프를 만들기
    const graph = {}
    computers.forEach((com,index)=>{
        const list = com.map((e,index)=>e===1?index+1 : 0).filter((e)=>e!==0)
        graph[index+1] = list
    })
    
    // 전체 노드번호 리스트
    let numList =[] // [1,2,3,4,5]
    for(let i = 0; i<n ; i++){
        numList.push(i+1)
    }
    
    let visited = []
    let needVisit = []
    while(numList.length !== 0){
        answer += 1
        
        // 탐색안한 노드에 대해서 탐색 진행
        needVisit.push(numList[0])

        // bfs로 탐색
        while(needVisit.length !== 0){
            let node = needVisit.shift()
        
            if(!visited.includes(node)){
                visited.push(node)
                needVisit = [...needVisit, ...graph[String(node)]]
            }     
        }
        
        // 모든 탐색이 종료후 탐색한 노드를 제거하기
        numList = numList.filter((num)=>!visited.includes(num))
    }
    return answer;
}
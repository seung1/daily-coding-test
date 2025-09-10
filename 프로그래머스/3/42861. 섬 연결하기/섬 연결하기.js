function solution(n, costs) {
    var answer = 0;
    
    // 코스트 오름차순 정렬
    costs = costs.sort((a,b)=>a[2]-b[2])
    
    // 코스트를 하나씩 순회하면서, 각각이 다른 그룹에 속해져있을 경우 연결하기
    let list = []
    for(let i = 0; i < n; i++){
        list.push([i])
    }
    
    for(let i = 0; i<costs.length; i++){
        const [start, end, cost] = costs[i]
        
        const sIndex = list.findIndex((el)=>el.includes(start))
        const eIndex = list.findIndex((el)=>el.includes(end))
        
        if(sIndex!==eIndex){
            list[sIndex] = [...list[sIndex], ...list[eIndex]]
            list = [...list.slice(0,eIndex), ...list.slice(eIndex+1)]
            answer += cost
            
            // 그룹이 하나가 되면 (= 하나로 연결되면) 끝내기
            if(list.length===1){
                break
            }
        }
    }
    
    return answer;
}
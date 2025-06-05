function solution(n, costs) {
    var answer = 0;
    
    // 최소비용의 다리부터 건설해나가기
    const sortedCosts = costs.sort((a,b)=>a[2]-b[2])
    
    let bridge = Array(n).fill().map((_,index)=>[index])
    
    while(sortedCosts.length>0){
        const [start, end, cost] = sortedCosts.shift()
        
        // 연결된 다리인지 체크
        let target1 = []
        let target2 = []
        let startI = 0
        let endI = 0
        for(let i =0; i<bridge.length; i++){
            if(bridge[i].includes(start)){
                target1 = bridge[i]
                startI = i
            }
            if(bridge[i].includes(end)){
                target2 = bridge[i]
                endI = i
            }
            if(target1.length!==0 && target2.length!==0){
                break
            }
        }
        
        // 안연결된거면
        if(startI !== endI){
            // 코스트 추가
            answer += cost
            
            // 연결하기
            bridge[startI] = [...bridge[startI], ...bridge[endI]]
            bridge.splice(endI,1)
        }
        
        // 모든 섬이 연결됐으면 빠져나오기
        if(bridge.length===1){
            break
        }
    }
    
    return answer;
}
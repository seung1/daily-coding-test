function solution(n, wires) {
    var answer = n;
    
    // wires를 순회하면서, 현재 wire를 제외시킨 배열 구하기
    
    // 1~n을 하나의 원소로 갖는 배열을 갖는 배열 만들기 n=2 [[1],[2]] 
    // 위에서 구한 배열 순회하면서 연결되었다면 두 배열을 합치기
    
    // 모두 순회하고나서 결과적으로 남은 두개의 배열.

    // 그 다음 두 배열의 개수 차이를 answer과 비교해서 더 작은 값인경우 answer에 저장
    
    let list =[]
    for (let i = 1;i<=n;i++){
        list.push([i])
    }
    const initList = list
    
    wires.forEach((wire)=>{
        const currentWires = wires.filter((e)=>e!==wire)
        
        list = initList
        
        currentWires.forEach((e)=>{
            const [start,end] = e
            const startList = list.filter((e)=>e.includes(start))
            const endList = list.filter((e)=>e.includes(end))
            
            if(JSON.stringify(startList)!==JSON.stringify(endList)){
                const listWithoutSE = list.filter((e)=>(JSON.stringify(e)!==JSON.stringify(startList[0]))&&(JSON.stringify(e)!==JSON.stringify(endList[0])))
                const newElement = [...startList[0], ...endList[0]]
                list = [...listWithoutSE,newElement]    
            }
        })
        
        if(Math.abs(list[0].length - list[1].length) < answer){
            answer = Math.abs(list[0].length - list[1].length)
        }
    })
    
    
    return answer;
}
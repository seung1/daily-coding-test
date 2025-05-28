function solution(begin, target, words) {
    var answer = 0;
    
    // 단어목록에 타겟이 없을 경우 리턴
    if (!words.includes(target)) return answer
    
    // 다른 부분이 한캐릭터인지 검사하는 함수
    const isDiffOneChar = (x,y) =>{
        const word_len = x.length
        let diffCnt = 0
        for (let i = 0; i< word_len ; i++){
            if(x[i] !== y[i]){
                diffCnt +=1
            }
        }
        return diffCnt === 1
    }
    
    const graph = {}
    const newList = [begin, ...words]
    newList.forEach((el)=>{
        graph[el] = []
    })
    
    // begin부터 시작하기
    // graph를 만들어서 비긴부터시작해서 하나만 차이 나는지 체크해서
    // 그래프 객체를 완성하기
    const words_len = newList.length
    for(let i = 0 ; i<words_len ; i++){
        for(let j = 0 ;j<words_len; j ++){
            if(isDiffOneChar(newList[i],newList[j])){
                graph[newList[i]].push(newList[j])
            }
        }
    }
    
    let visited = []
    let needVisit = []
    
    needVisit.push([begin,0])
    
    // bfs를 통해서 target이 완성되는지 체크하기
    while (needVisit.length !== 0){
        const [node,step] = needVisit.shift()
        if(node === target){
            answer = step
            break
        }
            
        if(!visited.includes(node)) {
            visited.push(node)
            const newList = graph[node].map((el)=>[el,step+1])
            needVisit = [...needVisit, ...newList]
        }
    }
    
    return answer;
}
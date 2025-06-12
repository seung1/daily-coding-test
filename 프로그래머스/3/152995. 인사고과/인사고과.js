function solution(scores) {
    var answer = 0;
    
    // 완호 정보
    const original = [...scores[0]]
    
    // 일단 완호보다 합이 큰거만 필터링
    const sum = original[0] + original[1]
    scores = scores.filter((el)=>el[0]+el[1]>=sum)
    
    // 1단계 첫번째걸로 오름차순, 만약 같다면 두번째는 내림차순
    scores = scores.sort((a,b)=>{
        if(a[0]===b[0]){
            return b[1]-a[1]
        }
        return a[0]-b[0]
    })
    
    // 순회하면서 배제되는거 체크하기
    answer = scores.length
    const stack = []
    scores.forEach((el)=>{
        while (stack.length>0 && stack[stack.length-1][0] <el[0] && stack[stack.length-1][1] < el[1]){
            stack.pop()
            answer -= 1
        }
        stack.push(el)
    })
    
    // 마지막으로 본인이 있는지, 동석차 확인하기
    let exist = false
    let same = -1
    for(let i = 0 ; i< stack.length; i++){
        if(stack[i][0]===original[0] && stack[i][1]===original[1]){
            exist = true
        }
        if(stack[i][0] + stack[i][1] === sum){
            same += 1
        }
    }
    
    return exist ? answer-same : -1
}
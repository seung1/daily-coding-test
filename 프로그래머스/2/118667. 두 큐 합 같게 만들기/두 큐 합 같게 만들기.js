function solution(queue1, queue2) {
    // 하나로 연결된 배열
    // 누적합 배열 구하기
    // 투포인터로 절반이되는 구간 구하기
    
    const list = [...queue1, ...queue2, ...queue1, ...queue2]
    const listForSum = [...queue1, ...queue2]
    const sum = listForSum.reduce((a,c)=>a+c,0)
    if(sum % 2 === 1){
        return -1
    }
    
    // 누적합
    const sumList = [0]
    let temp = 0
    for(let el of list){
        temp += el
        sumList.push(temp)
    }
    
    let left = 0
    let right = 0
    let result = []
    while (left < sumList.length){
        const value = sumList[right] - sumList[left]
        if(value === sum/2){
            result.push([left,right-1])
            left += 1
        }
        else if(value < sum/2){
            right += 1
        }else{
            left += 1
        }
    }
    
    if(result.length === 0){
        return -1
    }
    
    // [start, end]
    // start 만큼 추가
    // 큐의 길이-1 와 end 비교
    // end가 더 큰 경우, -> end - 큐의 길이-1 더하기
    // end가 더 작은 경우 end+큐의길이
    
    result = result.filter((el)=>el[0] < queue1.length * 2 && el[1] < queue1.length * 2)
    
    const answerList = []
    result.forEach((el)=>{
        const [start, end] = el
        let answer = 0
        
        answer += start
        if(end > queue1.length-1){
            answer += end - (queue1.length-1)
        } else if(end < queue1.length-1) {
            answer += end + queue1.length
        }
        
        answerList.push(answer)
    })
    
    return Math.min(...answerList);
}
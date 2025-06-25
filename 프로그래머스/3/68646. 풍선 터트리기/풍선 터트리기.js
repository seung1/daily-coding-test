function solution(a) {
    var answer = 0;
    
    // 임의의 2개를 골라서 둘중하나를 골라가며 최종 남는 숫자 종류
    // 둘 중 "큰 수를 고르는건" 한번만 가능, 그 외엔 모두 작은 수만 골라야한다.
    
    // 풀이 전략
    // a를 순회하면서, 
    // 좌측배열중min, 현재값, 우측배열중min 이렇게 세개로 나누고
    
    // 현재값이 가장 큰수인 경우는 현재값을 마지막까지 남게할수 없다.
    // 두번째로 크거나 가장 작은 수인 경우는 마지막까지 남게할수 있다.
    
    let list = [...a]
    let reverseList = [...a.slice().reverse()]
    
    let leftMin = [1000000001]
    let rightMin = [1000000001]
    let minL = 1000000001
    let minR = 1000000001
    
    for(let i = 1 ; i<a.length; i++){
        minL = Math.min(minL,list[i-1])
        leftMin.push(minL)
        minR = Math.min(minR,reverseList[i-1])
        rightMin.push(minR)
    }
    rightMin = rightMin.reverse()
    
    a.forEach((el,i)=>{
        const temp = [leftMin[i], el, rightMin[i]]
        if(Math.max(...temp) !== el){
            answer += 1
        }
    })
    
    return answer;
}
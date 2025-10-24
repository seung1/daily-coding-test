function solution(arrayA, arrayB) {
    // 최대공약수를 구하고 다른 배열로 나눌수 없는지 체크하기
    
    // 최대공약수 구하는 함수
    const f = (a,b) => {
        if(a===b) return a
        if(a===1 || b===1) return 1
        
        let max = Math.max(a,b)
        let min = Math.min(a,b)
        let diff = max - min
        while(max % min !== 0) {
            max = Math.max(min,diff)
            min = Math.min(min,diff)
            diff = max - min
        }
        return min
    }
    
    let tempA = arrayA[0] // 최대공약수
    let checkA = true // B배열이 나눌수 없는지
    
    // A배열에 대해서 최대 공약수 구하기
    for(const el of arrayA){
        tempA = f(tempA,el)
        // 시간을 단축시키기 위해 최대공약수가 1이 되어버리면 빠져나오기
        if(tempA===1) break
    }
    
    // B배열을 순회하면서 A의 최대공약수가 나눌수 없는지 체크
    for(const el of arrayB){
        if(el % tempA === 0) checkA = false // 나눠진다면 false로 처리하고 빠져나오기
    }
    
    let tempB = arrayB[0]
    let checkB = true
    for(const el of arrayB){
        tempB = f(tempB,el)
        if(tempB===1) break
    }
    for(const el of arrayA){
        if(el % tempB === 0) checkB = false
    }
    
    let list = []
    if(checkA) {
        list.push(tempA)
    }
    if(checkB) {
        list.push(tempB)
    }
    
    if(list.length===0){
        return 0
    }
    
    return Math.max(...list);
}
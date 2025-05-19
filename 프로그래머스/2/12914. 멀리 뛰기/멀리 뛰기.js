function solution(n) {
    // dp로 풀기
    
    const result = []
    result.push(1)
    result.push(2)
    
    for(let i =2; i<n; i++){
        result[i] = (result[i-1] + result[i-2]) % 1234567
    }
    
    return result[n-1];
}
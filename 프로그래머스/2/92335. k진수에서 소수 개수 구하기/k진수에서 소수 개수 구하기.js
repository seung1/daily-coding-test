function solution(n, k) {
    var answer = 0;
    // k진수로 바꾸고 0으로 나눈 리스트
    const numList = n.toString(k).split("0").map(Number)
    
    // 소수인지 체크하는 함수
    const checkPrime = (num)=>{
        let result = true
        if(num <= 1){
            return false
        }
        
        const limit = num > 1000 ? Math.sqrt(num) : num
        for(let i =2; i<limit; i++){
            if(num%i===0){
                result = false
                break
            }
        }
        return result
    }
    
    // 순회하면서 소수인경우만 +1
    numList.forEach((el)=>{
        const isPrime = checkPrime(el)
        if(isPrime){
            answer += 1
        }
    })
    
    return answer;
}
function solution(n) {
    var answer = 0;
    // 간단하게 풀자면
    
    // n과 길이가 같고 1의 개수가 같은 숫자들을 모두 구하고
    // 그중에서 n보다 크면서 가장 작은수 구하기
    
    // n을 2진수로 만들었을때의 길이
    // 10...0 ~ 11...1 이중에서 1의 개수가 같은거 체크
    
    // num이 포함되고 길이가 같은 2진수 범위
    const getRange = (num)=>{
        let len = num.toString(2).length
        return [ 2**(len-1), 2**len-1]
    }
    
    // 2진수에서 1의 개수
    const getOneCount = (num) =>{
        let list = num.toString(2).split("")
        list = list.filter((el)=>el==="1")
        return list.length
    }
    
    // 주어진 n의 1의 개수
    const count = getOneCount(n)
    
    // n이 주어지면, n보다 크면서 같은 길이에서의 최소값
    const fn = (n) => {
        let [start,end] = getRange(n)
        let result = 0
        
        for(let i=Math.max(start,n+1); i<=end; i++){
            if(result===0 && getOneCount(i) === count){
                result = i
            }
            if(result!==0){
                break
            }
        }
        return result
    }
    
    answer = fn(n)
    
    // 만약 같은 길이에서의 최소값이 없을경우 -> 범위를 늘려서 한번더 구하기
    if(answer===0){
        let next = getRange(n)[1] + 1
        answer = fn(next)
    }
    
    return answer;
}
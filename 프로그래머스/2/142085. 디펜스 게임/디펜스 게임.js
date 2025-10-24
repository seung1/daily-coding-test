function solution(n, k, enemy) {
    var answer = 0;
    
    // n을 만족하는 슬라이딩 윈도우에서
    // 가장 작은 값
    
    // 결국 특정 i까지가는데 사용하는 최소 공격력을 구해야하는데
    
    // n을 소모하면서 전진, 그러다가 n이 부족해지면 k를 소모
    const check = (t) => {
        let list = enemy.slice(0,t) // 0~t 까지 
        list = list.sort((a,b)=>b-a) // 내림차순 정렬
        
        let result = true
        let remain = n
        
        for(let i = k; i<list.length; i++){
            // 남은거보다 현재적이 더 쎄고, 이게 마지막이 아닐경우
            if(remain < list[i]){
                result = false
                break
            }
            remain -= list[i]
        }
        return result
    }
    
    // 1. 이진탐색으로 풀기
    const bst = () => {
        let left = 0
        let right = enemy.length
        let mid = Math.floor((left + right) /2)
        let ans = mid
        
        while(left <= right) {
            mid = Math.floor((left + right) /2)
            const result = check(mid)
            
            if(result){
                ans = mid
                left = mid+1
            }
            else {
                right = mid -1
            }
        }
        
        return ans
    }
    
    answer = bst()
    
    // 2. 힙으로 풀기
    
    return answer;
}
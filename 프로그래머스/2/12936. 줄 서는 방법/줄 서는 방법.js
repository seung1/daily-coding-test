function solution(n, k) {
    var answer = [];
    
    // 첫번째 숫자가 바뀌려면 -> 남은 자리개수 2 -> 2!보다 큰경우

    // 맨 왼쪽숫자부터 정해나간다.
    // 예를들어 다섯자리수 -> 5 4 3 2 1
    // 그중 첫번째 숫자를 결정하는건 k가 남은 자리수인 4개 -> 4!인 24를 넘는지여부
    // 49 ->
    // 24가 두번들어가고 하나가 더 크므로 첫번째숫자는 3
    // 그리고 1이니까 3 1 2 4 5
    
    let remainNum = []
    for(let i =1;i<=n; i++){
        remainNum.push(i)
    }
    
    const fact = [1]
    for(let i = 1;i<=n;i++){
        fact.push(fact[i-1]*i)
    }
    
    let remain = k
    // n은 자릿수 n-i
    for(let i = 0; i< n ; i++){
        const temp = n-i-1
        let cur = 0
        while(remain > fact[temp]){
            remain -= fact[temp]
            cur += 1
        }
        
        answer.push(remainNum[cur])
        remainNum = [...remainNum.slice(0,cur),...remainNum.slice(cur+1)]
    }
    
    return answer;
}
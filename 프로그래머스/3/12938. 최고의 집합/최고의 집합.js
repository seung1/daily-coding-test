function solution(n, s) {
    var answer = [];
    
    // 전체 값보다 나누는 수가 더 큰 경우
    if(n>s){
        answer.push(-1)
        return answer
    }
    
    // 기준이 되는 값
    let num = Math.floor(s/n)
    // 나머지
    let remain = s%n
    
    for(let i = 0; i<n ; i++){
        if(i>= n - remain){
            answer.push(num+1)
        }
        else{
            answer.push(num)
        }
    }
    
    return answer;
}
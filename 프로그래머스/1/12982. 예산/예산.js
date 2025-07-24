function solution(d, budget) {
    var answer = 0;
    
    const sorted = d.sort((a,b)=>a-b)
    
    while(budget > 0){
        if(budget >= sorted[answer] ){
            budget -= sorted[answer]
            answer += 1
        }
        else {
            break
        }
    }
    return answer;
}
function solution(s) {
    var answer = '';
    
    const numList = s.split(" ").map(Number).sort((a,b)=>a-b)
    
    answer = answer + numList[0] + " " + numList[numList.length -1]
    
    return answer;
}
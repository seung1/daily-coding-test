function solution(A, B) {
    var answer = 0;
    
    // a를 정렬하고
    const sortedA = A.sort((a,b)=>a-b)
    const sortedB = B.sort((a,b)=>a-b)
    
    let ai = 0
    let bi = 0
    // a의 하나씩 포인터 삼아서 b를 순회하기
    while(bi<sortedA.length){
        if(sortedA[ai]<sortedB[bi]){
            answer+=1
            ai+=1
        }
        bi+=1
    }
    
    return answer;
}
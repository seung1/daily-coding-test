function solution(A, B) {
    // 순서는 중요하지 않다.
    // 둘다 오름차순으로 정렬
    
    // A와 B를 동시에 순회하면서
    // B가 이기는지 체크
    // 만약 B가 진다면, 이길때까지 넘어가기
    // B의 끝에 다다를때까지 반복하고 ai 리턴
    
    let sortedA = A.sort((a,b)=>a-b)
    let sortedB = B.sort((a,b)=>a-b)
    
    let ai = 0
    let bi = 0
    while(bi<B.length){
        if(A[ai]<B[bi]){
            ai+=1
            bi+=1
        }
        else {
            bi += 1
        }
    }
    
    return ai;
}
function solution(k, tangerine) {
    var answer = 0;
    
    // cnt 객체에 각 키값이 몇개 있는지 저장
    const cnt = {}
    tangerine.forEach((el)=>{
        if(cnt[el] === undefined){
            cnt[el] = 0
        }
        cnt[el] += 1
    })
    
    // 개수를 저장할 리스트
    let countList = []
    for(const key in cnt){
        countList.push(cnt[key])
    }
    
    // 오름차순으로 정렬
    countList = countList.sort((a,b)=>a-b)
    
    // k가 0보다 작아질때까지 pop해서 빼기
    let remain = k
    while (remain > 0){
        remain -= countList.pop()
        answer += 1
    }
    
    return answer;
}
function solution(weights) {
    var answer = 0;
    
    // 풀이1 정렬후 2개씩 모든수를 비교해서, 되는지 체크 - 브루트포스 / 시간초과
    
    // 풀이2
    // 각 몸무게가 몇개있는지 체크
    const map = {}
    weights.forEach((el)=>{
        if(map[el] === undefined){
            map[el] = 0
        }
        map[el] += 1
    })
    
    // 중복체크를 하지 않기 위해 순회할때 요소보다 큰 비율만 체크하기
    // 2:3 / 2:4 / 3:4 를 체크하고 큰수개수만 추가
    // 100 200 100 200 이런경우, 100 순회할때 200의 개수만 추가해서 결국 2*2를 계산
    weights.forEach((el)=>{
        if(map[el*1.5] !==undefined){
            answer += map[el*1.5]
        }
        if(map[el*2] !==undefined){
            answer += map[el*2]
        }
        if(map[(el/3)*4] !==undefined){
            answer += map[(el/3)*4]
        }
    })
    
    // 1:1 비율은 따로 계산
    weights.forEach((el)=>{
        if(map[el] !==1){
            answer += (map[el] * (map[el]-1))/2
            map[el] = 1
        }
    })
    
    return answer;
}
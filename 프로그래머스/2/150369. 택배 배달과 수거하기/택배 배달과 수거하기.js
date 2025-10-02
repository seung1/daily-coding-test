function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    
    // 먼곳부터 방문해나가기
    // 결국 배달할거나 수거할게 있으면 거기까지 이동해야하고 x2
    
    // 가장 먼곳에 있는게 배달이 아닌 수거라면?
    // 배달 용량만큼 실어서 -> 가는길에 놓아주고 수거 || 도착해서 놓아주고 오는 길에 수거
    
    // deliveries를 끝에서부터 순회하면서, cap로 나누었을때 인덱스를 저장
    // [ 2, 0, 4, 2, 1] 3 -> [4, 2, 2] 
    
    // pickups도 동일하게 계산
    // 두 배열을 비교하면서 큰수를 더해나가기
    
    // deliveries 기반으로 가장 먼곳의 indexList 만들기
    const getVisitList = (arr,k) => {
        let remain = 0
        const result = []
        
        // 시작할때마다 체크해야해
        for(let i = arr.length-1; i>=0;i--){
            let cur = arr[i]
            while(cur > 0){
                if(remain === 0){
                    result.push(i)
                    remain = k
                }
                if(cur >= remain){
                    cur -= remain
                    remain = 0
                }
                else {
                    remain -= cur
                    cur = 0
                }
            }
        }
        
        return result
    }
    
    
    const delList = getVisitList(deliveries, cap)
    const pickList = getVisitList(pickups, cap)
    const maxLen = Math.max(delList.length, pickList.length)
    
    for(let i = maxLen-1; i>=0 ; i--){
        const maxIndex = Math.max(delList[i]||0,pickList[i]||0)
        answer += (maxIndex+1) * 2
    }
    
    return answer;
}
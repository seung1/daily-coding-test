function solution(n, stations, w) {
    var answer = 0;

    // 초기 기지국 위치에 따른 범위 리스트 구하기 - 위치4, 너비2 2~6
    let rangeList = []
    stations.forEach((el)=>{
        const range = [Math.max(1,el-w),Math.min(n,el+w)]
        rangeList.push(range)
    })
    
    // 위에 범위리스트를 순회하면서 겹치는 부분 처리하여 "전파가 닿는 범위 리스트" 구하기
    let areaList = []
    let i =0
    while (i<rangeList.length){
        let currentArea = rangeList[i]
        
        i += 1
        while ( i<rangeList.length && currentArea[1] >= rangeList[i][0]){
            currentArea[1] = rangeList[i][1]
            i += 1
        }
        
        areaList.push(currentArea)
    }
    
    // 위에서 구한 범위를 "제외한 부분의 너비로 구성된 리스트" 구하기 - [1, 4]
    let index = 1
    let emptyWidthList = []
    areaList.forEach((el)=>{
        const [start,end] = el
        emptyWidthList.push(start - index)
        index = end + 1
    })
    if(index <= n){
        emptyWidthList.push(n+1 - index)
    }
    
    // 빈땅 너비에 대해서 순회하면서 w로 나누면 몇개가 들어가는지 올림으로 체크
    emptyWidthList.forEach((el)=>{
        answer += Math.ceil(el/(w*2+1))
    })
    
    return answer;
}
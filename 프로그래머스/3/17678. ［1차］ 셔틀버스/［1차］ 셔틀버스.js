function solution(n, t, m, timetable) {
    var answer = '';
    
    // 9시부터 n번 운행, t분 간격으로 m명씩

    // 시간을 정렬
    const sortedTime = timetable.sort((a,b)=>{
        const [ah,am] = a.split(":").map(Number)
        const [bh,bm] = b.split(":").map(Number)
        if(ah===bh){
            return am-bm
        }
        return ah-bh
    })
    
    const crewTime = sortedTime.map((el)=>el.split(":").map(Number))
    
    const timeToArr = (hour,min) => {
        let h = hour
        let m = min
        while(m>=60){
            m-=60
            h+=1
        }
        return [h,m]
    }
    
    const timeToString = (timeArr)=>{
        let hour = timeArr[0]
        let min = timeArr[1]
        
        if(min<0){
            min+=60
            hour-=1
        }
        
        return hour.toString().padStart(2,"0")+":"+min.toString().padStart(2,"0")
    }
    
    // 배차 시간 정렬
    const busTime = [[9,0]]
    let hour = 9
    let min = 0
    for(let i = 0 ; i<n-1;i++){
        let [h,m] = timeToArr(hour,min+t)
        hour = h
        min = m
        busTime.push([hour,min])
    }
    
    // [9,0] > [0,1]
    const isNotPassed = (base,compare) => {
        const [bH,bM] = base // 1tl 30qns
        const [cH,cM] = compare // 1tl 40qns
        
        if(cH>bH){
            return false
        }
        if(cH===bH && cM<=bM){
            return true
        }
        else if(cH<bH){
            return true
        }
        return false
    }
    
    
    let i = 0 // 현재까지 출근한 사람수
    const maxCrew = crewTime.length
    // 배차시간을 순회하면서, 크루 시간 체크해나가기
    busTime.forEach((el,index)=>{
        const isLastBus = index===busTime.length-1
        let count = 0 // 단순 카운트
        let thisBus = 0 // 이번버스 탄사람
        
        // 현재 시간을 지나지 않은 crewTime을 최대 m개 체크해서 넘기기
        while(count<m && i<maxCrew){
            if(isNotPassed(el, crewTime[i])){
                i+=1
                thisBus += 1
            }
            count+=1
        }
        
        if(isLastBus){
            if(thisBus ===m){
                // 가득찰경우 -> 마지막 탄사람의 시간-1
                const [lastH,lastM] = crewTime[i-1]
                answer = timeToString([lastH,lastM-1])
            }
            else {
                // 가득차지 않을 경우 -> 마지막 배차시간 저장
                answer = timeToString(el)
            }
        }
    })
    
    return answer;
}
function solution(fees, records) {
    var answer = [];
    
    // fees [기본시간, 기본가격, 단위시간, 단위요금]
    // records - 시간, id, 상태
    
    const [baseTime, basePrice, unitTime, unitPrice] = fees
    const obj = {} // 시간 저장
    const carList = new Set()
    const totalTime = {} // id:총 시간
    const charge = {}
    
    const calcTime = (start, end) => {
        const [sH,sM] = start.split(":").map(Number)
        const [eH,eM] = end.split(":").map(Number)
        return (eH - sH)*60 + (eM-sM)
    }
    
    // 차마다 시간 계산
    records.forEach((el)=>{
        const [time, id, state] = el.split(" ")
        
        if(state === "IN"){
            carList.add(id)
            obj[id] = time
        }
        else{
            carList.delete(id)
            if(totalTime[id]===undefined){
                totalTime[id] = 0
            }
            totalTime[id] += calcTime(obj[id], time)
        }
    })
    
    // carList를 탐색하며 나머지 시간 계산
    carList.forEach((id)=>{
        if(totalTime[id]===undefined){
                totalTime[id] = 0
        }
        totalTime[id] += calcTime(obj[id], "23:59")
    })
    
    for(const key in totalTime){
        let time = totalTime[key]
        let temp = 0
        if(time >= baseTime) {
            time -= baseTime
        }
        else{
            time = 0
        }
        temp += basePrice
        if(time > 0){
            temp += Math.ceil(time /unitTime) *unitPrice
        }
        answer.push([key, temp])
    }
    
    answer = answer.sort((a,b)=>a[0]-b[0]).map((el)=>el[1])
    
    return answer;
}
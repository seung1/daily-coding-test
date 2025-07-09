function solution(diffs, times, limit) {    
    // 현재 레벨에 따른 결과값을 리턴
    const calculateTime = (level)=>{         
        const result = diffs.map((diff,index)=>{
            if(index === 0) return times[index]
            if(diff <= level){
                return times[index]
            }
            if (diff > level){
                return (diff - level) * (times[index] + times[index-1]) + times[index]
            }
        })
        
        
        return result.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0); 
    }
    
    // 현재 레벨이 맞는 값인지 체크
    const checkLimit=(result)=>{
        if(result <= limit) return true
        else return false
    }
    
    let startPoint = 1;
    let endPoint = diffs.reduce((acc, cur) => Math.max(acc, cur), 1) // 4
    // 중간값
    let currentLevel = Math.floor((startPoint + endPoint) / 2)  // 2
    
    if(startPoint===endPoint) return startPoint
    
    while(startPoint <= endPoint) {
        let currentResult = checkLimit(calculateTime(currentLevel))
        
        if(currentResult){
            if(currentLevel===1 || checkLimit(calculateTime(currentLevel-1)) === false) break;
            
            endPoint = currentLevel-1;
        }else{
            startPoint = currentLevel+1;
        }
        
        currentLevel = Math.floor((startPoint+endPoint) / 2);
    }
    
    return currentLevel;
}
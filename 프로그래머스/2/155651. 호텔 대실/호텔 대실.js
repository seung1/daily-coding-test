function solution(book_time) {
    var answer = 0;
    
    // 시간을 숫자로 변경, 끝나는 시간+10분
    const convertTimeToNum = (arr)=>{
        const [start,end] = arr
        const [sh,sm] = start.split(":").map(Number)
        const [eh,em] = end.split(":").map(Number)
        
        const startNum = sh*60+sm
        const endNum = eh*60+em+9 // 청소시간 10분인데 9분으로 겹치지 않게
        return [startNum, endNum]
    }
    
    const time = Array(24*60+10).fill(0)
    
    // 시작시간이 빠른 순서대로 정렬
    const numTime = book_time.map(convertTimeToNum)
    
    numTime.forEach((el)=>{
        const [start,end] = el
        time[start] += 1
        time[end+1] -= 1
    })
    
    let max = 0
    let prev = 0
    time.forEach((el,index)=>{
        if(index === 0){
            prev = el
            max = el
        }
        else{
            prev += el
            max = Math.max(max,prev)
        }
    })
    
    return max;
}
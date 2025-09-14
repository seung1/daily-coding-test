function solution(book_time) {
    var answer = 0;
    
    // 시간을 숫자로 변경, 끝나는 시간+10분
    const convertTimeToNum = (arr)=>{
        const [start,end] = arr
        const [sh,sm] = start.split(":").map(Number)
        const [eh,em] = end.split(":").map(Number)
        
        const startNum = sh*60+sm
        const endNum = eh*60+em+9 // 청소시간 10분인데 9분을 추가해서 부등호로 비교
        return [startNum, endNum]
    }
    
    // 시작시간이 빠른 순서대로 정렬
    const numTime = book_time.map(convertTimeToNum)
    const sortedTime = numTime.sort((a,b)=>b[0]-a[0])
    
    // 순회하기
    for(let i = 0; i<sortedTime.length; i++){
        let count = 1 // 자기 자신 
        for(let j = i+1; j<sortedTime.length; j++){
            if(sortedTime[i][0]<=sortedTime[j][1]){
                count+=1
            }
        }
        answer = Math.max(answer, count)
    }
    
    return answer;
}
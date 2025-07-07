function solution(jobs) {
    let convertedJobs = jobs.map((j,index)=>{
        return [j[0],j[1],index]
    })
    let time = -1
    let queue = [] // [요청시간, 소요시간, 작업번호]
    let work = [] // [요청시간, 소요시간, 작업번호]
    let completed = [] // (time - 요청시간)
    
    while (completed.length !== jobs.length){
        time += 1
        
        // 현재 작업시간이 0이면 완료된 작업으로 이동
        if(work.length!==0 && work[1] === 0) {
            completed.push(time - work[0])
            work = []
        }
        
        // 현재 타임에 요청시간이 지난거 큐에 넣기
        const currentWork = convertedJobs.filter((job)=>job[0]===time)
        convertedJobs = convertedJobs.filter((job)=>job[0]!==time)
        queue = [...queue,...currentWork]
    
        // 현재 작업이 비어있는지 체크
        if(work.length === 0){
            // 현재 시작가능한 작업이 있는지 체크
            if(queue.length !== 0){
                // 우선순위에 따라 work에 추가하기 (1)소요시간이 짧은것 (2)요청시간이 빠른것 (3)작업의 번호가 작은것 순으로 work에 넣기
                if(queue.length > 1){
                    queue.sort((a,b)=>{
                        if(a[1]===b[1]){
                            if(a[0]===b[0]) return b[2]-a[2]
                            else return b[0]-a[0]         
                        }
                        else{
                            return b[1]-a[1]
                        }
                    })
                }
                work = queue.pop()
            }
        }
         // 현재 작업중인 일 시간 감소시키기
        if(work.length !== 0){
            work[1] -= 1
        }
    }
    
    const sum = completed.reduce((a,b)=>a+b)
    return Math.floor(sum / completed.length)
}
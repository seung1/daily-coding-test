function solution(play_time, adv_time, logs) {
    var answer = '';
    
    // 시간을 초로 바꾸는 함수
    const tiemToSec = (time)=>{
        const [h,m,s] = time.split(":").map(Number)
        return h*60*60 + m*60 + s
    }
    
    // 1   -1 로 모든 로그를 표시
    const total = tiemToSec(play_time)
    const logArr = Array(total+1).fill(0)
    
    logs.forEach((el)=>{
        const [start,end] = el.split("-").map(tiemToSec)
        logArr[start] += 1
        logArr[end] -= 1
    })
    
    // 누적합으로 계산
    let prev = logArr[0]
    for(let i = 1; i<logArr.length; i++){
        logArr[i] += prev
        prev = logArr[i]
    }
    logArr.pop()
    
    // 계산한걸 다시 누적합으로 계산
    const sum = [0]
    for(let i = 1; i<logArr.length+1; i++){
        sum.push(logArr[i-1] + sum[i-1])
    }
    
    // 정해진 길이 만큼 슬라이딩 윈도우로 순회하며 최대값일때 시작값 저장
    const targetTime = tiemToSec(adv_time)
    let i = 0
    let max = 0
    
    while(i+targetTime < sum.length){
        if(sum[i+targetTime] - sum[i] > max){
            max = sum[i+targetTime] - sum[i]
            answer = i
        }
        i+=1
    }
    
    const secToTime = (sec)=>{
        let time = sec
        const h = Math.floor(time/3600)
        time = time%3600
        const m = Math.floor(time/60)
        time = time % 60
        let list = [h,m,time]
        list = list.map((el)=>{
            const str = el.toString()
            return str.padStart(2,"0")
        })
        return list.join(":")
    }
    
    return secToTime(answer);
}
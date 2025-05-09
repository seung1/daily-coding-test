function solution(n, times) {
    // 특정시간이 주어졌을때 몇명이 완료한 상태인지 구하는 함수
    // 가장 작은 시간 * n이 최대시간
    const maxTime = Math.min(...times) * n
    const getN = (time) =>{
        let result = 0
        times.forEach((el)=>{
            result += Math.floor(time / el)
        })
        return result
    }
    
    // 구해야하는 지점이 n-1에서 n이 되는순간
    // 예외상황 딱 맞는 시간이 없을 경우. 59를 구해야하는데 arr[29]:58  arr[30]:60
    let start = 0
    let end = maxTime
    let mid = Math.floor((start+end)/2)
    while(!(getN(mid)>=n && getN(mid-1) <= n-1)){
        let midN = getN(mid)
        if(midN >= n) {
            end = mid
            mid = Math.floor((start+end)/2)
        }
        else {
            start = mid
            mid = Math.floor((start+end)/2)
        } 
    }
    
    return mid
}
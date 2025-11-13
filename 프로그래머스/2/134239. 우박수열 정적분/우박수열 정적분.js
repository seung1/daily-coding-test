function solution(k, ranges) {
    var answer = [];
    
    const xList = [k]
    let temp = k
    while(temp!==1){
        if(temp%2===0){
            temp /=2
        }
        else{
            temp = temp*3 + 1
        }
        xList.push(temp)
    }
    const n = xList.length-1
    
    const list = []
    for(let i = 1; i<=n; i++){
        list.push((xList[i-1]+xList[i]) / 2)
    }
    
    ranges.forEach((el)=>{
        const [start,end] = el
        let sum = 0
        if(start <= n+end){
            for(let i = start; i<n+end; i++){
                sum += list[i]
            }
        
            answer.push(sum)
        }
        else{
            answer.push(-1)
        }
    })
    return answer;
}
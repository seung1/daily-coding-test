function solution(sequence, k) {
    var answer = [];
    
    // 누적합
    const sum = [0]
    let partSum = 0
    sequence.forEach((el)=>{
        partSum += el
        sum.push(partSum)
    })
    
    let left = 0
    let right = 1
    while (right<sum.length){
        if(sum[right] - sum[left] === k){
            answer.push([right-1 - left, left, right-1])
            left += 1
        }
        if(sum[right] - sum[left] > k){
            left += 1
        }else{
            right += 1
        }
    }
    
    answer = answer.sort((a,b)=>a[0]-b[0])
    answer[0].shift()
    
    return answer[0];
}
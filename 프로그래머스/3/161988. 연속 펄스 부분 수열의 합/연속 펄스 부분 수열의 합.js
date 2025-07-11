function solution(sequence) {
    var answer = 0;
    
    let a = []
    let b = []
    
    for(let i = 0 ;i<sequence.length; i++){
        if(i%2===0){
            a.push(sequence[i])
            b.push(sequence[i]*-1)
        }
        else {
            a.push(sequence[i]*-1)
            b.push(sequence[i])
        }
    }
    
    const sumA = [0]
    const sumB = [0]
    
    for(let i = 0; i< sequence.length ; i++){
        sumA.push(sumA[i]+a[i])
        sumB.push(sumB[i]+b[i])
    }
    
    answer = sumA.reduce((a,c)=>Math.max(a,c),sumA[0]) - sumA.reduce((a,c)=>Math.min(a,c),sumA[0])
    
    return answer;
}
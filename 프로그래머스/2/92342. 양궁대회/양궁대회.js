function solution(n, info) {
    var answer = [];
    let scoreGap = 0
    
    const getNextList = (n, start) => {
        // start부터 시작해서 n으로 이길수있는 가장 작은 index 리턴
        let result = []
        for(let i =start; i<11; i++){
            if(info[i]<n){
                result.push(i)
            }
        }
        return result
    }
    
    const returnList = (list) => {
        for(let i = list.length-1; i>=0 ; i--){
            if(answer[i]!==list[i]){
                if(answer[i]<list[i]){
                    return list
                }
                else {
                    return answer
                }
            }
        }
    }
    
    const calcScore = (list) => {
        let score = 0
        for(let i = 0; i<11; i++){
            if(info[i]!==0 || list[i]!==0){
                if(info[i]>=list[i]){
                    score -= 10-i
                }
                else {
                    score += 10-i
                }
            }
        }
        return score
    }
    
    // 현재까지 완성된 arr하고 남은 n값
    const f = (arr, n) => {
        if(n === 0){
            for(let i = arr.length; i<11; i++){
                arr.push(0)
            }
                
            let score = calcScore(arr)
            if( score > scoreGap){
                scoreGap = score
                answer = arr
            }
            else if (score === scoreGap){
                answer = returnList(arr)
            }
            return
        }
        
        const nextList = getNextList(n,arr.length)
        if(nextList.length === 0){
            let newArr = [...arr]
            for(let i =arr.length; i<10; i++){
                newArr.push(0)
            }
            newArr.push(n)
            f(newArr,0)
        }
        
        nextList.forEach((el)=>{
            // el이 될때까지 0으로 채우기
            let newArr = [...arr]
            for(let i = arr.length; i<el; i++){
                newArr.push(0)
            }
            newArr.push(info[el]+1)
            f(newArr, n-info[el]-1)
        })
    }
    
    f([],n)
    
    return answer.length===0?[-1]:answer;
}
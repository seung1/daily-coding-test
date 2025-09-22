function solution(numbers) {
    var answer = [];
    
    // 이진수로 나타내고 2^n-1의 자릿수까지 0을 앞에 채우기
    const convert = (num) => {
        const bin = num.toString(2)
        const len = bin.length
        let temp = 0
        for(let i =0; true; i++){
            if( len <=  2**i -1){
                temp = 2**i -1
                break
            }
        }
        return bin.padStart(temp, "0")
    }
    
    // 4 -> 2,6 -> 1,3 5,6
    // 루트부터 탐색하는데, 0을 만났는데 계속 꼬리까지 탐색하는데 1을 만나면 false
    const checkBinTree = (num) => {
        // '0101010' -> [0,1,0,1,0,1,0]
        const binStr = convert(num)
        const binList = binStr.split("").map(Number)
        const n = binList.length
        let result = true
        
        const checkSubTree = (prevFlag, start, end) => {
            const cur = (start + end) /2
            const curValue = binList[cur-1]
            if(prevFlag === 0 && curValue === 1){
                result = false
                return
            }
            
            if(end- cur ===1) return
            
            checkSubTree(curValue, start, cur)
            checkSubTree(curValue, cur, end)
        }
        checkSubTree(binList[(n+1)/2 -1], 0, n+1)
        return result
    }
    
    numbers.forEach((num)=>{
        const res = checkBinTree(num)
        answer.push(res ? 1 : 0)
    })
    
    return answer;
}
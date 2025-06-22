function solution(s) {
    var answer = [0,0];
    let x = s
    
    const getCountOne = (str) => {
        let list = str.split("")
        list = list.filter((el)=>el==="1")
        return list.length
    }
    
    const convertBinary = (num) => {
        let result = []
        let temp = num
        
        while(temp>1){
            result.push(temp%2)
            temp = Math.floor(temp /2)
        }
        result.push(temp)
        
        return result.reverse().join("")
    }
    
    while (x !== "1"){
        let fullCount = x.length
        let oneCount = getCountOne(x)
        answer[1] += x.length - getCountOne(x)
        answer[0] += 1
        x = convertBinary(oneCount)
    }
    
    return answer;
}
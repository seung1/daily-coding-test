function solution(s) {
    var answer = [];
    
    const convert = (str) => {
        const stack = []
        let count = 0
        for(let i = 0; i<str.length; i++){
            
            // "110"을 발견한 경우 카운트업 & 스택에서 빼내기
            if(i>1 && str[i] ==="0" && stack.length>=2 && stack[stack.length-1] === "1" && stack[stack.length-2] === "1"){
                stack.pop()
                stack.pop()
                count += 1
            }
            else{
                stack.push(str[i])
            }
        }
        
        // "110"쌍을 제외한 문자열과 개수 리턴
        return [stack.join(""),count]
    }
    
    const joinStr = ([str,count]) => {
        // 처음으로 1이 연달아 나오는 부분앞에
        let oneCount = 0
        let find = false
        let check= str.length
        
        // 연속된 1이 등장하면 그앞부분
        // 마지막이 1로 끝난다면 그 앞부분
        for(let i = 0; i<str.length; i++){
            if(str[i] === "1"){
                oneCount += 1
            }
            else{
                oneCount = 0
            }
            
            if(oneCount === 2){
                check = i-1
                find = true
                break
            }
        }
        
        if(!find && oneCount >0){
            check -= 1
        }
        
        return str.slice(0,check) + "110".repeat(count) + str.slice(check)
    }
    
    s.forEach((el)=>{
        const convertedStr = joinStr(convert(el))
        answer.push(convertedStr)
    })
    
    return answer
}
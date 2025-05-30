function solution(p) {
    // 빈문자열 -> 빈문자열 반환
    
    // u와 v로 분리
    // u는 분리할수없는 균형잡힌 괄호
    
    // u가 올바르다면 v에 대해 다시 분리
    
    // 올바르지 않다면
    // ( 에다가 v를 재귀실행 )

    // u의 첫과 막을 제거, 나머지를 뒤집어 붙이기
    
    const divide = (str)=>{
        // 문자열의 첫시작이 (인지 )인지에 따라 경우를 나눠서 진행
        const stack = []
        const list = str.split("")
        let u = ""
        let v = ""
        
        const isReverse = str[0] === ")"
        const open = isReverse ? ")" : "("
        const close = isReverse ? "(" : ")"
        
        if(str === ""){
            return {
                isCorrect: false,
                u,
                v
            }
        }
        
        let i = 0
        stack.push(str[i])
        u+=str[i]
        i+=1
        while(stack.length > 0){
            const cur = str[i]
            if(cur === open){
                stack.push(cur)
            }
            else{
                stack.pop()
            }
            u+=str[i]
            i+=1
        }
        v = list.slice(i).join("")
        return {
            isCorrect: !isReverse,
            u,
            v
        }
    }
    
    const reverseStr = (str)=>{        
        const list = str.split("")
        return list.map((el)=>{
            return el === ")" ? "(" : ")"
        }).join("")
    }
    
    const removeFEandR = (str) =>{
        const removedStr = str.split("").slice(1,str.length-1).join("")
        return reverseStr(removedStr)
    }
    
    const fn = (str) =>{
        let result = ""
        
        if(str===""){
            return ""
        }
        
        if(divide(str).isCorrect){
            return divide(str).u + fn(divide(str).v)
        }
        else{
            return "(" + fn(divide(str).v) + ")" + removeFEandR(divide(str).u)
        }
    }
    
    return fn(p);
}
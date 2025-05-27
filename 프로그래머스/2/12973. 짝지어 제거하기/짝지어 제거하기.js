function solution(s) {
    const stack = []
    const charList = s.split("")
    
    charList.forEach((el)=>{
        if(stack.length>0 && stack[stack.length-1] === el){
            stack.pop()
        }
        else{
            stack.push(el)   
        }
    })

    return stack.length === 0 ? 1 : 0;
}
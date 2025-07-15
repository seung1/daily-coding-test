function solution(topping) {
    var answer = 0;
    
    const totalCount = (new Set(topping)).size
    
    const left = new Set()
    const right = new Set()
    
    const leftList = [0]
    let rightList = [0]
    
    const reverseTopping = topping.slice().reverse()
    for(let i = 0 ; i<topping.length; i++){
        left.add(topping[i])
        right.add(reverseTopping[i])
        leftList.push(left.size)
        rightList.push(right.size)
    }
    rightList = rightList.reverse()
    
    for(let i = 0 ; i<topping.length; i++){
        if(leftList[i] === rightList[i]){
            answer+=1
        }
    }
    
    return answer;
}
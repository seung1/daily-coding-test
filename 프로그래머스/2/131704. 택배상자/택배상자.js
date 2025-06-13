function solution(order) {    
    // 메인 스택 5 4 3 2 1
    let main = Array.from({length:order.length},(_,i)=>i+1).reverse()
    
    // 서버 스택 
    let sub = []
    
    let result = []
    let i = 0
    while(result.length !== order.length){
        i = result.length
        let mainTop = main[main.length-1]
        let subTop = sub[sub.length-1]
        
        // 메인 탑보다 값이 큰경우 -> 서브로 이동
        if(order[i] > mainTop){
            sub.push(main.pop())
        }
        // 메인 탑이랑 같은 경우 -> 결과로 이동
        else if (order[i] === mainTop){
            result.push(main.pop())
        }
        // 메인 탑보다 작으면서 서브탑이랑 같은 경우 -> 결과로 이동
        else if ( order[i] === sub[sub.length-1]) {
            result.push(sub.pop())
        }
        // 나머지 -> 불가능
        else {
            break
        }
    }
    
    return result.length;
}
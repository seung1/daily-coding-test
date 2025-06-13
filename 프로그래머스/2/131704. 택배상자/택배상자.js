function solution(order) {    
    // 메인 스택 5 4 3 2 1
    let main = Array.from({length:order.length},(_,i)=>order.length - i)
    
    // 서브 스택 
    let sub = []
    
    let answer = 0
    while(answer !== order.length){
        let mainTop = main[main.length-1]
        let subTop = sub[sub.length-1]
        let currentValue = order[answer]
        
        // 메인 탑보다 값이 큰경우 -> 서브로 이동
        if(currentValue > mainTop){
            sub.push(main.pop())
        }
        // 메인 탑이랑 같은 경우 -> 결과로 이동
        else if (currentValue === mainTop){
            main.pop()
            answer += 1
        }
        // 메인 탑보다 작으면서 서브탑이랑 같은 경우 -> 결과로 이동
        else if (currentValue === subTop) {
            sub.pop()
            answer += 1
        }
        // 나머지 -> 불가능
        else {
            break
        }
    }
    
    return answer;
}
function solution(n, k, cmd) {
    var answer = '';
    
    // 총 개수 n, 처음 위치 k -> 삭제여부를 문자열로 리턴
    const deleteStack = [] // 삭제명령어 관리
    let cur = k
    const obj = []
    
    // 양방향 연결리스트
    const up = [-1]
    const down = []
    
    for(let i = 0; i<n;i++){
        obj.push("O")
        if(i>0) up.push(i-1)
        if(i<n-1) down.push(i+1)
    }
    down.push(-1)
    
    const move=(cur, step, dir) => {
        let remain = Number(step)
        let i = cur
        while(remain>0){
            if(dir==="U"){
                if(up[i] === -1){
                    break
                }
                i = up[i]
            }
            else {
                if(down[i] === -1){
                    break
                }
                i = down[i]
            }
            remain -= 1
        }
        return i
    }
    
    // 실제로 삭제하지는 말고, X처리만 한뒤에, 이동시 X처리된건 카운팅하지 말고 넘어가기
    cmd.forEach((el)=>{
        const [keyword, unit] = el.split(" ")
        if(keyword==="U" || keyword==="D"){
            cur = move(cur,unit, keyword)
        }else if(keyword==="C"){
            const prev = cur
            obj[prev] = "X"
            
            // 스택에 추가
            deleteStack.push([cur,up[cur],down[cur]])
            
            // 연결 끊기
            let upIndex = up[cur]
            let downIndex = down[cur]
            
            up[downIndex] = upIndex
            down[upIndex] = downIndex
            
            // index 위로 올리기 -> 맨위인경우는 다시 아래로 내려가기
            cur = move(cur,1, "D")
            if(prev===cur){
                cur = move(cur,1, "U")
            }
        }else{
            const [index,upIndex,downIndex] = deleteStack.pop()
            obj[index] = "O"
            
            // 연결하기
            up[downIndex] = index
            down[upIndex] = index
        }
    })
    answer = obj.join("")
    
    return answer;
}
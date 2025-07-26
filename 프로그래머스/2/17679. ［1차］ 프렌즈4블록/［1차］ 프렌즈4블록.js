function solution(m, n, board) {
    var answer = 0;
    
    // 함수 돌려서 체크 -> 내리기 -> 체크 -> 반복
    
    const copyed = [] // 복사
    board.forEach((el)=>{
        const list = el.split("")
        copyed.push(list)
    })
    
    const checkSquare = (i,j)=>{
        let cur = board[i][j]
        if(cur === "#") return [false]
        let result = [[i,j]]
        
        // 우측 체크
        if(board[i][j+1] !== cur){
            return [false]
        }
        result.push([i,j+1])
        
        // 아래 체크
        if(board[i+1][j] !== cur){
            return [false]
        }
        result.push([i+1,j])
        
        // 대각선 체크
        if(board[i+1][j+1] !== cur){
            return [false]
        }
        result.push([i+1,j+1])
        
        return [true, result]
    }
    
    // 내리기
    const move = () => {
        // 세로로 한줄씩 봐서, 재배치
        for(let i =0; i<copyed[0].length; i++){
            const list = copyed.map((el)=>el[i]).filter((el)=>el!=="#").join("")
            const newWord = "#".repeat(copyed.length-list.length)+list
            for(let j = 0 ; j<copyed.length; j++){
                copyed[j][i] = newWord[j]
            }
        }
    }
    
    const explore = () => {
        let count = 0
        for(let i = 0; i<board.length-1;i++){
            for(let j =0 ; j<board[0].length-1; j++){
                const [isTrue, markList] = checkSquare(i,j)
                
                if(isTrue){
                    markList.forEach((el)=>{
                        const [x,y] = el
                        if(copyed[x][y] !== "#"){
                            copyed[x][y] = "#"
                            count += 1
                        }
                    })
                }
            }
        }
        
        move()
        
        board = JSON.parse(JSON.stringify(copyed));
        return count
    }
    
    let count = explore()
    answer += count
    
    while(count!==0){
        count = explore()
        answer += count
    }
    
    return answer;
}
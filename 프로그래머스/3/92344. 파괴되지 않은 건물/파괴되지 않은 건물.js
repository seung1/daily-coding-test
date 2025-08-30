function solution(board, skill) {
    var answer = 0;
    
    const n = board.length
    const m = board[0].length
    const map = Array.from({length:n+1},()=>Array(m+1).fill(0)) 
    
    // 순회하면서 적용하기
    const apply = (arr)=>{
        const [type,sx,sy,ex,ey,deg] = arr
        const value = type === 1? -1* deg : deg
        // !! 대입아니고 누적
        // map[sx][sy] = value
        map[sx][sy] += value 
        map[sx][ey+1] += -1*value
        map[ex+1][sy] += -1*value
        map[ex+1][ey+1] += value
    }
    
    skill.forEach((el)=>{
        apply(el)
    })
    
    // 누적합 연산하기
    for(let i = 0; i<map.length ; i++){
        for(let j =1; j<map[0].length;j++){
            map[i][j] += map[i][j-1]
        }
    }
    for(let i = 1; i<map.length ; i++){
        for(let j =0; j<map[0].length;j++){
            map[i][j] += map[i-1][j]
        }
    }
    
    // 기존 board랑 합치기
    for(let i =0; i<board.length; i++){
        for(let j = 0; j<board[0].length; j++){
            board[i][j] += map[i][j]
            // 0 넘는거 체크하기
            if(board[i][j]>0){
                answer+=1
            }
        }
    }
    
    return answer;
}
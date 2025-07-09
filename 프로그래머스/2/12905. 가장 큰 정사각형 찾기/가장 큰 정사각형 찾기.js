function solution(board)
{
    let answer = 0
    const mem = Array.from({length:board.length},()=>Array(board[0].length).fill(0))
    
    for(let i =0;i<board.length;i++){
        for(let j = 0; j<board[0].length; j ++){
            if(board[i][j]){
                if(i===0 || j ===0){
                    mem[i][j] = 1
                }
                else {
                    mem[i][j] = Math.min(mem[i-1][j],mem[i][j-1],mem[i-1][j-1]) + 1
                }
                answer = Math.max(answer,mem[i][j])
            }
        }
    }

    return answer ** 2;
}
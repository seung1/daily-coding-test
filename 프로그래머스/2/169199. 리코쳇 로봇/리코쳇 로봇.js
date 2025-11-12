function solution(board) {
    var answer = Infinity
    
    const dir = [[1,0],[-1,0],[0,1],[0,-1]]
    const maxX = board.length
    const maxY = board[0].length
    
    // R과 G의 위치를 찾는 함수
    const find = (goal) => {
        let x = 0
        let y = 0
        for(let i = 0 ; i< maxX; i++){
            for(let j =0; j< maxY; j++){
                if(board[i][j] === goal){
                    x=i
                    y=j
                    break
                }
            }
        }
        return [x,y]
    }
    const [gx,gy] = find("G")
    
    // x,y 기반으로 동서남북 갈수있는 좌표리스트
    const getNextMove = ([x,y]) => {
        let result = []
        
        dir.forEach((el)=>{
            let newX = x+el[0]
            let newY = y+el[1]
            
            // 새 좌표가 보드판 안에 있고 D가아닌 경우 반복
            while(newX >= 0 && newX <maxX && newY >=0 && newY<maxY
                 && board[newX][newY] !=="D"){
                newX += el[0]
                newY += el[1]
            }
            newX -= el[0]
            newY -= el[1]
            
            result.push([newX,newY])
        })
        
        // 처음좌표랑 동일한 경우 제외
        result = result.filter((el)=>{
            return !(el[0] ===x && el[1] ===y)
        })
        
        return result
    }
    
    const convertXY = ([x,y]) => `${x}-${y}`
    
    const bfs = (start) => {
        const visited = []
        let needVisit = []
        
        // 현재 위치, 이동횟수
        needVisit.push({
            cur: start,
            count: 0
        })
        
        visited.push(convertXY(start))
        
        while(needVisit.length>0){
            const {cur, count} = needVisit.shift()
            
            // 목적지에 도달한 경우 횟수 카운트
            if(cur[0] === gx && cur[1] === gy){
                answer = Math.min(answer,count)
            }
            else{
                const nextSteps = getNextMove(cur)
                nextSteps.forEach((step)=>{
                    if(!visited.includes(convertXY(step))){
                        visited.push(convertXY(step))
                        needVisit.push({
                            cur:step,
                            count: count+1
                        })
                    }
                })
            }
        }
    }
    
    const [rx,ry] = find("R")
    bfs([rx,ry])
    
    if(answer === Infinity){
        answer = -1
    }
    
    return answer;
}
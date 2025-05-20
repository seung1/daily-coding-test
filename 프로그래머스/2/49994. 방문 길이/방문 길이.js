function solution(dirs) {
    var answer = 0;
    
    // 경로를 저장하는데, 좌표에서 어느방향으로 이동했는지를 기록
    const map = {} // { '0,0' : ['U','L'] }
    let currentPoint = [0,0]
    
    const checkValidMove = (cmd) =>{
        if((currentPoint[0] === -5 && cmd==='L')
          || (currentPoint[0] === 5 && cmd==='R')
          || (currentPoint[1] === -5 && cmd==='D')
          || (currentPoint[1] === 5 && cmd==='U')
          ) return false
        return true
    }
    
    const move = (cmd) => {
        switch (cmd) {
            case 'L':
                currentPoint[0] -= 1 
                break
            case 'R':
                currentPoint[0] += 1 
                break
            case 'U':
                currentPoint[1] += 1 
                break
            case 'D':
                currentPoint[1] -= 1 
                break
        }
    }
    
    const reverseCmd = (cmd) =>{
        if(cmd === "L")
            return "R"
        if(cmd === "R")
            return "L"
        if(cmd === "U")
            return "D"
        if(cmd === "D")
            return "U"
    }
    
    const visit = (cmd) =>{
        let pointStr = currentPoint.join(',')
        if(map[pointStr]===undefined){
            map[pointStr] = []
        }
        if(!map[pointStr].includes(cmd)){
            map[pointStr].push(cmd)
            return true
        }
        return false
    }
    
    dirs.split("").forEach((el)=>{
        // 유효한 이동인지 체크
        if(checkValidMove(el)) {
            // 기존에 이동한 적이 없을때만 +1하고 기록
            const isFirstVisit = visit(el)
            if (isFirstVisit) {
                answer += 1
            }
            
            // 좌표 이동
            move(el)
            
            // 이동한 쪽 좌표에서 반대로 이동하는 경우 추가하기
            visit(reverseCmd(el))
        }
    })
    
    return answer;
}
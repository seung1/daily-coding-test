function solution(maps) {
    let sToL = 0;
    let lToE = 0
    
    let startX = 0
    let startY = 0
    const dir = [[0,1],[1,0],[0,-1],[-1,0]]
    
    // S위치 찾기
    for(let i =0;i<maps.length; i++){
        if(maps[i].includes("S")){
            startX = i
            const wordList = maps[i].split("")
            startY = wordList.findIndex((e)=>e==="S")
            break
        }
    }
    
    let deque = []
    let index = 0
    const shift = () => {
        const result = deque[index]
        index += 1
        return result
    }
    const length = () => {
        return deque.length - index
    }
    
    // [startX,startY] -> des까지
    const bfs = (des) => {
        const visited = new Set()
        deque.push(`${startX}-${startY}-${0}`)
        visited.add(`${startX}-${startY}`)
        
        while(length() > 0){
            const node = shift()
            const [x,y,count] = node.split("-").map(Number)
            if(maps[x][y] === des) {
                
                if(des==="L"){
                    sToL += count
                }
                if(des==="E"){
                    lToE += count
                }
                startX = x
                startY = y
                break
            }
            
            dir.forEach((e)=>{
                const [dx,dy] = e
                const newX = dx+x
                const newY = dy+y
                
                if(newX >=0 && newX <maps.length 
                   && newY>=0 && newY<maps[0].length 
                   &&!visited.has(`${newX}-${newY}`) 
                   && maps[newX][newY] !== "X"
                  ){
                    visited.add(`${newX}-${newY}`)
                    deque.push(`${newX}-${newY}-${count+1}`)
                }
                    
            })
        }
    }
    
    bfs("L") // S -> L
    if(sToL === 0) {
        return -1
    }
    deque= []
    index = 0
    bfs("E") // L -> E
    
    if(lToE === 0) {
        return -1
    }
    return sToL + lToE;
}
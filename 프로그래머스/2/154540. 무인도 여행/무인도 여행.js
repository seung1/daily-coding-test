function solution(maps) {
    var answer = [];
    
    const map = []
    maps.forEach((el)=>{
        map.push(el.split(""))
    })
    
    // 2차원배열을 순회하다가 x가 아닌것을 만나면 bfs로 순회하면서 다 더하기
    const dir = [[0,-1],[-1,0],[1,0],[0,1]]
    
    const bfs = (x,y) => {
        let sum = 0
        let needVisit = []
        needVisit.push([x,y])
        
        while(needVisit.length> 0){
            const node = needVisit.shift()
            const [X,Y] = node
            
            if(map[X][Y] !== "X"){
                sum += Number(map[X][Y])
                map[X][Y] = "X"
            
            
            dir.forEach((el)=>{
                const [dx,dy] = el
                const newX = node[0]+dx
                const newY = node[1]+dy
                
                // 범위에 맞고, X가 아닌경우 -> 합하고 X로 변경
                if(newX >=0 && newX< map.length && newY >=0 && newY<map[0].length && map[newX][newY]!=="X"){
                    needVisit.push([newX,newY])
                }
            })
                
            }
        }
        return sum
    }
    
    for(let i = 0; i<map.length; i++){
        for(let j =0; j<map[0].length; j++){
            if(map[i][j]!=="X"){
                const result = bfs(i,j)
                answer.push(result)
            }
        }
    }
    
    if(answer.length === 0){
        return [-1]
    }
    
    answer = answer.sort((a,b)=>a-b)
    
    return answer;
}
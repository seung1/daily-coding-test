function solution(x, y, n) {
    const count = {}
    count[y] = 0
 
    const bfs = () => {
        const visited = []
        let needVisit = []
        needVisit.push(y)
        
        while(needVisit.length>0){
            const node = needVisit.shift()
            if(node === x){
                break
            }
            
            if(node - n >= x && !visited.includes(node-n)){
                count[node-n] = count[node] + 1
                visited.push(node-n)
                needVisit.push(node-n)
            }
            if(node % 2 === 0 && !visited.includes(node/2)){
                count[node/2] = count[node] + 1
                visited.push(node/2)
                needVisit.push(node/2)
            }
            if(node % 3 === 0 && !visited.includes(node/3)){
                count[node/3] = count[node] + 1
                visited.push(node/3)
                needVisit.push(node/3)
            }
        }
    }
    
    bfs()
    
    return count[x] ===undefined ? -1 : count[x]
}
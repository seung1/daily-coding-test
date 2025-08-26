function solution(n, results) {
    var answer = 0; 
    
    // 맵
    const map = {}
    
    // ->누적방문맵
    const toVisitMap = {}
    
    // 방문가능맵->
    const visitableMap = {}
    for(let i =1;i<=n;i++){
        map[i]=new Set()
        toVisitMap[i]=new Set()
        visitableMap[i]=new Set()
    }
    results.forEach((el)=>{
        const [a,b] = el
        map[a].add(b)
    })
    
    const check = (visited) => {
        const list = []
        visited.forEach((el)=>{
            list.forEach((e)=>{
                // list가 el에 도달가능하다
                toVisitMap[el].add(e)
                // list 에 있는 원소들이 el에 도달가능하다.
                visitableMap[e].add(el)
            })
            list.push(el)
        })
    }
    
    const dfs = (cur, visited) => {
        const nextNodes = map[cur]
        if(nextNodes.size === 0){
            check(visited)
            return
        }
        
        nextNodes.forEach((el)=>{
            if(!visited.has(el)){
                dfs(el, visited.add(el))
            }
        })
    }
    
    // for(let i =1;i<=n;i++){
    //     const temp = new Set()
    //     temp.add(i)
    //     dfs(i,temp)
    // }
    for (let s = 1; s <= n; s++) {
  const seen = new Set();
  const stack = [s];
  seen.add(s);
  while (stack.length) {
    const u = stack.pop();
    for (const v of map[u]) {
      if (!seen.has(v)) { seen.add(v); stack.push(v); }
    }
  }
  seen.delete(s);
  for (const v of seen) { visitableMap[s].add(v); toVisitMap[v].add(s); }
}
    
    for(let i =1;i<=n;i++){
        if(toVisitMap[i].size + visitableMap[i].size === n-1){
            answer+=1
        }
    }
    
    return answer;
}
function solution(commands) {
    var answer = [];
    
    const n = 51
    const size = n*n
    const id = (x,y)=>(Number(x)-1)*n+(Number(y)-1)
    
    const parent = Array.from({length:size},(_,i)=>i)
    const value = Array(size).fill("")
    
    // 조상알아내기
    // !! 경로 압축 꼭 하기
    // const find = (id)=>{ 
    //     let curId = id 
    //     while(curId !== parent[curId]){ 
    //         curId = parent[curId] 
    //     } 
    //     return curId 
    // }
    
    const find = (a) => (parent[a] === a ? a : (parent[a] = find(parent[a])));
    
    // 조상의 값
    const findValue = (id) => value[find(id)]
    
    const updateA = (x,y,v) => {
        value[find(id(x,y))] = v
    }
    
    const updateB = (prev,next)=>{
        for(let i = 0; i<size; i++){
            if(value[i]===prev){
                value[i] = next
            }
        }
    }
    
    const merge = (x1,y1,x2,y2) => {
        if(find(id(x1,y1)) === find(id(x2,y2))) return
        
        const value1 = findValue(id(x1,y1))
        const value2 = findValue(id(x2,y2))
        
        let content = value1 === ""? value2 : value1
        
        value[find(id(x2,y2))] = ""
        parent[find(id(x2,y2))] = find(id(x1,y1))
        value[find(id(x1,y1))] = content
    }
    
    const unmerge = (x,y)=>{
        const root = find(id(x,y))
        const rootValue = findValue(id(x,y))
        // !! 이걸 초기화하면서 가면, 뒤에 링크들이 깨지잖아...
        // for(let i = 0;i<size;i++){
        //     if(find(i)===root){
        //         parent[i] = i
        //         value[i] = ""
        //     }
        // }
        const resetList = []
        for(let i = 0;i<size;i++){
            if(find(i)===root)
                resetList.push(i)
        }
        
        resetList.forEach((el)=>{
            parent[el] = el
            value[el] = ""
        })
        value[id(x,y)] = rootValue
    }
    
    const print = (x,y)=>{
       const content = findValue(id(x,y))
       if(content===""){
            answer.push("EMPTY")
       }else{
            answer.push(content)
       }
    }
    
    commands.forEach((el)=>{
        const cmds = el.split(" ")
        const type = cmds[0]
        if(type==="UPDATE"){
            if(cmds.length ===4){
                updateA(cmds[1],cmds[2],cmds[3])
            }else{
                updateB(cmds[1],cmds[2])
            }
        }
        else if(type ==="MERGE"){
            merge(cmds[1],cmds[2],cmds[3],cmds[4])
        }
        else if(type==="UNMERGE"){
            unmerge(cmds[1],cmds[2])
        }
        else if(type ==="PRINT"){
            print(cmds[1],cmds[2])
        }
    })
    
    return answer;
}
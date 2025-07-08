function solution(relation) {
    var answer = 0;
    
    const colCount = relation[0].length
    const colList = Array.from({length:colCount},(_,i)=>i)
    
    // a가 b에 포함되어있는지 체크하는 함수
    const isSubArr = (a,b)=>{
        const setB = new Set(b)
        return a.every(e=>setB.has(e))
    }
    
    let graph = {}
    let combiList = []
    // arr에서 count개수만큼 선택하는 조합을 리턴
    const getCombi = (arr, count) => {
        if(count === 1) return arr.map((el)=>[el]);

        const results=[]
        
        arr.forEach((el,index,origin)=>{
            const rest = origin.slice(index+1)
            const combi = getCombi(rest,count-1)
            const attached = combi.map((e)=>[el,...e])
            results.push(...attached)
        })

        return results
    }
    
    // 테이블에서 indexList에 해당하는 원소를 각 row마다 골라서 하나의 스트링으로 만들어서 리턴
    // [0,1] 이면 relation[i][0]+relation[i][1] 이런식으로
    const getList = (indexList)=>{
        return relation.map((el)=>{
            return el.filter((_,index)=>indexList.includes(index)).join("")
        })
    }
    
    for(let i=1;i<=colCount;i++){
        const result = getCombi(colList,i)
        
        let temp = []
        // 구한 리스트와 중복제거했을때 리스트를 비교해서 개수가 같으면 후보키
        result.forEach((el)=>{
            const list = getList(el)
            const listWithoutDuplicate = [...new Set(list)]
            if(list.length === listWithoutDuplicate.length){
                temp.push(el)
            }
        })
        graph[i] = temp
    }
    
    // 그래프를 순회하면서 최소후보키 계산하기
    let totalList = []
    for(let i = 2; i<=colCount;i++) {
        totalList.push(...graph[i-1])
        const currentList = graph[i]
        
        let newList = []
        for(let j=0; j<currentList.length;j++){
            let isContain = false
            for(let k = 0; k<totalList.length; k++){
                isContain = isSubArr(totalList[k],currentList[j])
                if(isContain){
                    break
                }
            }
            if(!isContain){
                newList.push(currentList[j])
            }
        }
        graph[i] = newList
    }
    
    for(let i = 1; i<=colCount;i++){
        answer += graph[i].length || 0
    }
    
    return answer;
}
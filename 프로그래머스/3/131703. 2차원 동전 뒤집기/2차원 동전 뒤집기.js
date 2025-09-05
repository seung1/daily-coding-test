function solution(beginning, target) {
    // 불일치 여부를 저장하는 배열 만들기, boolean
    const map = []
    for(let i =0; i< beginning.length; i++){
        const temp = []
        for(let j=0;j<beginning[0].length; j++){
            temp.push(beginning[i][j] === target[i][j])
        }
        map.push(temp)
    }
    
    // 상하좌우 4개의 배열에서, 불일치하는 것의 index 저장 리스트 만들기
    const getList = (obj)=>{
        const top = obj[0]
        const down = obj[obj.length-1]
        const left = obj.map((el)=>el[0])
        const right = obj.map((el)=>el[el.length-1])
        
        return {top, down, left, right}
    }
    
    const checkAllTrue = (obj) => {
        for(let i =0; i<obj.length; i++){
            for(let j =0 ; j<obj[0].length; j++){
                if(obj[i][j]===false){
                    return false
                }
            }
        }
        return true
    }
    
    const colConvert = (arr,obj)=>{
        for(let i =0; i<obj.length; i++){
            arr.forEach((el)=>{
                obj[i][el] = obj[i][el] ? false:true
            })
        }
    }
    
    const rowConvert = (arr,obj)=>{
        arr.forEach((el)=>{
            for(let j =0;j<obj[0].length; j++){
                obj[el][j] = obj[el][j] ? false:true
            }
        })
    }
    
    const convertArr = (dirArr,obj) => {
        let count = 0
        dirArr.forEach((el)=>{
            const falseIndexList  = getList(obj)[el].map((el,index)=>el===false?index:el).filter((el)=>el!==true)
            
            if(el==="top" || el==="down"){
                colConvert(falseIndexList,obj)
            }
            else{
                rowConvert(falseIndexList,obj)
            }
            count += falseIndexList.length
        })
        return count
    }
    
    // 총 4번의 뒤집기 실행, 상/좌 상/우 하/좌 하/우
    const convert = (obj) =>{
        let result = []
        let temp = 0
        
        const cmds = [["top","left"],["left","top"],["down","right"],["right","down"]]
        cmds.forEach((el)=>{
            const map = obj.map(row => row.slice());
            temp = convertArr(el,map)
            if(checkAllTrue(map)) {
                result.push(temp)
            }
        })
            
        return result
    }
    
    const answer = convert(map)
    
    if(answer.length === 0){
        return -1
    }
    
    return Math.min(...answer)
}
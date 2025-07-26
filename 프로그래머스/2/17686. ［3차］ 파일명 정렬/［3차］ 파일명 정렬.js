function solution(files) {
    var answer = [];
    
    files = files.map((el)=>{
        const list = el.split("")
        let numS = 0
        let numE = 0
        const numStr = ["0","1","2","3","4","5","6","7","8","9"]
        
        // 숫자영역의 인덱스 저장
        for (let i =1; i<list.length; i++){
            if(!numStr.includes(list[i-1]) && numStr.includes(list[i])){
                numS = i
            }
            if(numStr.includes(list[i])){
                numE = i
            }
            if(numStr.includes(list[i-1]) && !numStr.includes(list[i])){
                break
            }
        }
        
        // [원본, 문자열부분, 숫자부분, 뒷부분]
        return [el, el.slice(0,numS).toLocaleLowerCase(),Number(el.slice(numS,numE+1)), el.slice(numE+1)]
    })
    
    // 정렬기준에 따라 정렬
    files = files.sort((a,b)=>{
        if(a[1]===b[1]){
            return a[2]-b[2]
        }
        return a[1].toLowerCase().localeCompare(b[1].toLowerCase())
    }).map((el)=>el[0])
    
    return files
}
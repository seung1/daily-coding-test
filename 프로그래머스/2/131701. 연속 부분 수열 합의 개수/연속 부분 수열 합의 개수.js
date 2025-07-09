function solution(elements) {
    // 두개를 이어붙인다음에 누적합을 구하고
    // 임의의 두개를 골라 뺀값을 추가하고 중복제거
    
    let newList = [...elements,...elements]
    let hap = []
    for(let i = 0 ; i<newList.length; i++){
        if(i===0){
            hap.push(newList[i])
        }
        else{
            hap.push(hap[i-1]+newList[i])
        }
    }
    
    let list = new Set()
    for(let i = 0;i<elements.length;i++){
        for (let j=i+1; j-i<=elements.length; j++){
            list.add(hap[j]-hap[i])
        }
    }
    
    return list.size;
}
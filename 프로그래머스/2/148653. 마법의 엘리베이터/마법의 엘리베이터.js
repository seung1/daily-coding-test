function solution(storey) {
    var answer = 0;
    const strList = storey.toString().split("").map(Number).slice().reverse()
    strList.push(0)

    let next = 0
    for(let i =0; i<strList.length; i++){
        if(i!==strList.length-1){
            next = strList[i+1]
        } 
        else{
            next =0
        }
        
        if(strList[i]<5){
            answer+= strList[i]
        }
        else if (strList[i]===5) {
            if(next<5){
                answer+= strList[i]
            }
            else {
                answer += 10-strList[i]
                strList[i+1] += 1
            }
        }
        else {
            answer += 10-strList[i]
            strList[i+1] += 1
        }
    }
    
    return answer;
}




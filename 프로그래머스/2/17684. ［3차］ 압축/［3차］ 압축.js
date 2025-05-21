function solution(msg) {
    var answer = [];
    
    const dic = {}
    for(let i = 65; i<=90; i++){
        dic[String.fromCharCode(i)] = i-64
    }
    
    let count = 27 // 단어 인덱스
    let start = 0
    let end = 1
    
    while (start < msg.length){
        let currentWord = msg.slice(start,end)
        
        // 등록되지 않는 단어를 찾을때까지 end 증가
        while (dic[currentWord]!==undefined && end <= msg.length){
            end +=1
            currentWord = msg.slice(start,end)
        }
        
        // 등록된 단어의 인덱스를 추가
        answer.push(dic[msg.slice(start,end-1)])
        // 등록안된 단어 사전에 등록
        dic[currentWord] = count
        
        count += 1
        start = end-1
        end += 1
    }
    
    return answer;
}
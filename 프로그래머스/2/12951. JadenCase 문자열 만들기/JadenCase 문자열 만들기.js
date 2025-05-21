function solution(s) {
    var answer = '';
    
    let wordList = s.toLocaleLowerCase().split(" ")
    
    let result = []
    wordList.forEach((el)=>{
        if(el[0]===" " || el.length === 0){
            result.push(el)
        }
        else {
            const newWord = el[0].toLocaleUpperCase() + el.slice(1)
            result.push(newWord)
        }
    })
    
    answer = result.join(" ")
    
    return answer;
}
function solution(numbers) {
    var answer = [];
    
    // 2진수로 바꾸었을때 0이 존재하는지?
    // 1. 0이 있다면 -> 가장 우측부터 시작해서 가장먼저 등장하는 0을 1로 바꾸고 그 다음 자리에 있는 1을 0으로 바꾸기? 
    // 2. 0이 없다면 -> 맨앞에 1을 붙이고 그다음숫자를 0으로 바꾸기
    
    // 풀이개선 -> 2진법으로 바꾸고 가장좌측에 0을 붙인다, 우측에서 가장먼저 등장하는 0을 1로 바꾸고 그 우측에 1을 0으로 바꾸기
    
    // 0 체크함수 num -> [우측부터시작해서 가장먼저 등장하는 index, 이진수리스트]
    const checkZero = (num) => {
        let list = num.toString(2).split("")
        list.unshift("0")
        
        let result = [0,list]
        for(let i = list.length-1; i>=0; i--){
            if(list[i] === "0"){
                result = [i,list]
                break
            }
        }
        return result
    }
    
    numbers.forEach((num)=>{
        const [index, list] = checkZero(num)
        let strList = list
        
        // 우측부터 시작해서 가장먼저 등장하는 0을 1로 바꾸고, 
        // 만약 바꾼값 우측에 1이 오면 0으로 바꿔 최솟값 만들기
        strList[index] = "1"
            
        if(index!== strList.length-1){
            strList[index+1] = "0"
        }
        
        const binary = strList.join("")
        answer.push(parseInt(binary,2))
    })
    
    return answer;
}

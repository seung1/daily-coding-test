function solution(numbers) {
    var answer = [];
    
    // 2진수로 바꾸었을때 0이 존재하는지?
    // 1. 0이 있다면 -> 가장 우측부터 시작해서 가장먼저 등장하는 0을 1로 바꾸고 그 다음 자리에 있는 1을 0으로 바꾸기? 
    // 2. 0이 없다면 -> 맨앞에 1을 붙이고 그다음숫자를 0으로 바꾸기
    
    // 0 체크함수 num -> [존재유무, 우측부터시작해서 가장먼저 등장하는 index, 이진수리스트]
    const checkZero = (num) => {
        let list = num.toString(2).split("")
        let result = [false,0,list]
        for(let i = list.length-1; i>=0; i--){
            if(list[i] === "0"){
                result = [true,i,list]
                break
            }
        }
        return result
    }
    
    numbers.forEach((num)=>{
        const [hasZero, index, list] = checkZero(num)
        let strList = list
        
        // 2진수에 0이 존재한다면
        // 우측부터 시작해서 가장먼저 등장하는 0을 1로 바꾸고, 
        // 만약 바꾼값 우측에 1이 오면 0으로 바꿔 최솟값 만들기
        if(hasZero){
            strList[index] = "1"
            
            if(index!== strList.length-1){
                strList[index+1] = "0"
            }
        }
        // 2진수가 모두 1로 이루어진 경우
        // 가장 좌측에 1을 추가하여 자릿수를 높이고
        // 그 바로 우측수를 0으로 바꾸어 최솟값 만들기
        else {
            strList[0] = "0"
            strList.unshift("1")
        }
        const binary = strList.join("")
        answer.push(parseInt(binary,2))
    })
    
    return answer;
}

function solution(n, left, right) {
    var answer = [];
    
    // 특정 index를 좌표로 바꾸는 로직필요
    
    // 0부터 시작하는 좌표기준 [x,y]가 주어지면 Math.max(x,y)+1 이게 해당 값
    
    // n으로 나눈 몫과 나머지
    // 2 -> 0,2 3
    // 3 -> 1,0 2
    // 4 -> 1,1 2
    // 5 -> 1,2 3
    
    for(let i = left;i<=right; i++){
        let x = Math.floor(i/n)
        let y = i%n
        answer.push(Math.max(x,y)+1)
    }
    
    return answer;
}
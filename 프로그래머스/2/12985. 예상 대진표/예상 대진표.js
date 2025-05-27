function solution(n,a,b)
{
    var answer = 0;
    
    const nextMatch = (num) => {
        return Math.ceil(num / 2)
    }
    
    let numA = a
    let numB = b
    
    while(numA!==numB) {
        numA = nextMatch(numA)
        numB = nextMatch(numB)
        answer += 1
    }

    return answer;
}
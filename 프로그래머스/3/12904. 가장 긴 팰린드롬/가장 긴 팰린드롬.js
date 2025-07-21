function solution(s)
{
    var answer = 1;
    
    // 홀수 길이 체크
    const checkMaxLength = (i) => {
        let len = 1
        let add = 1
        while (i+add < s.length && i-add>=0){
            if(s[i+add]!==s[i-add]){
                break
            }
            else{
                len+=2
            }
            add += 1
        }
        return len
    }
    
    // 짝수 길이 체크
    const checkMaxLength2 = (i) => {
        let len = 0
        let left = 0
        let right = 1
        while (i+right < s.length && i-left>=0){
            if(s[i+right]!==s[i-left]){
                break
            }
            else{
                len+=2
            }
            left += 1
            right += 1
        }
        return len
    }
    
    for(let i =0; i<s.length; i++){
        const len = checkMaxLength(i)
        const len2 = checkMaxLength2(i)
        answer = Math.max(len,len2, answer)
    }
    
    return answer;
}
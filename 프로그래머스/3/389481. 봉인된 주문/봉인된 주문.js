function solution(n, bans) {
    // 문자를 몇번째인지 바꾸는 함수
    const strToNum = (str) =>{
        const list  = str.split("")
        let result = 0
        list.forEach((el, index)=>{ 
            const num = el.charCodeAt(0) - 96
            result+= num * (26 ** (list.length - 1 - index))
            return num
        })
        
        return result
    }
    
    // 문자를 먼저 숫자로 바꾸고 미리 정렬 -> 숫자정렬이 더 빠르다
    bans = bans.map((el)=>strToNum(el))
    bans = bans.sort((a,b)=>a-b)
    
    // 숫자를 a-z 진법으로 바꾸는 함수
    const numToStr = (num) => {
        let out = "";
        while (num > 0) {
            const r = (num - 1) % 26;               // 0..25
            out = String.fromCharCode(97 + r) + out; // 97='a'
            num = Math.floor((num - 1) / 26);
        }
        return out;
    }
    
    let k = n
    let count = 0
    
    // 조건에 맞을경우 +1 아닐경우 빠져나오기
    for(const el of bans){
        if((el)<=k) k+=1
        else break
    }
    
    return numToStr(k)
}
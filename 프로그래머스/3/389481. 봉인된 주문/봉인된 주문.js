function solution(n, bans) {
    var answer = '';
    
    // bans을 순회하면서 
    // 각 문자열을 숫자로 바꾸는 함수
    // n보다 작을 경우는 n+=1
    // 최종 n에 맞는 문자를 리턴
    bans = bans.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length; // 1차: 길이 짧은 순
  }
  return a.localeCompare(b);   // 2차: 사전식 순
});
    
    
    const alphabet = [0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
                     "v","w","x","y","z"]
    
    const strToNum = (str) =>{
        const list  = str.split("")
        let result = 0
        list.forEach((el, index)=>{ 
            const num = alphabet.findIndex(e=>e===el)
            result+= num * (26 ** (list.length - 1 - index))
            return num
        })
        
        return result
    }
    const alToNum1 = {
        1:"a",
        2:"b",
        3:"c",
        4:"d",
        5:"e",
        6:"f",
        7:"g",
        8:"h",
        9:"i",
        a:"j",
        b:"k",
        c:"l",
        d:"m",
        e:"n",
        f:"o",
        g:"p",
        h:"q",
        i:"r",
        j:"s",
        k:"t",
        l:"u",
        m:"v",
        n:"w",
        o:"x",
        p:"y",
        q:"z"
    }
    const keyList = Object.keys(alToNum1)
    const valueList = Object.values(alToNum1)
    
    const numToStr = (num) => {
        const str = num.toString(26)
        let list = str.split("")
        if(list.includes("0")){
            for(let i=0;i<list.length-1; i++){
                if(list[i+1]==="0"){
                    const index = keyList.findIndex(e=>e===list[i])
                    list[i] = keyList[index-1]
                    list[i+1] = "q"
                }
            }    
        }
        
        list = list.map((el,index)=>{
                return alToNum1[el]
            
        })
        return list.join("")
    }
    
    let k = n
    let count = 0
    bans = bans.map((el)=>{
        if(strToNum(el)<=k){
            k+=1
        }
        return strToNum(el)
    })
    
    
    return numToStr(k)
}
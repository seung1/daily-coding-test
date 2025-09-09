function solution(a) {
    var answer = 0;
    
    // 부분 수열 - 원래 수열에서 부분 집합이면서 순서일치
    // 스타수열
    // 1. 짝수개의 원소를 가진다.
    // 2. 두개씩 묶었을때, 두개가 서로 다르다.
    // 3. 두개씩 묶은것들은 모두 공통된 하나이상의 원소를 가진다.
    
    // 공통된 하나의 원소!
    
    // 최빈값부터 게산해 나가기?
    const map = {}
    a.forEach((el)=>{
        if(map[el]===undefined){
            map[el] = 0
        }
        map[el] += 1
    })
    
    const explore = (arr, key) => {
        let count = 0
        let temp = false
        let star = false
        
        arr.forEach((el)=>{
            if(el===key && star=== false ){
                star = true
            }
            if(el !== key && temp === false){
                temp = true
            }
                
            if(star ===true && temp ===true){
                count +=1
                star = false
                temp = false
            }
        })
        return count * 2
    }
    
    const mapList = Object.entries(map).sort((a,b)=>b[1]-a[1])
    for(let i = 0; i<mapList.length; i++){
        const star = Number(mapList[i][0])
        
        if(mapList[i][1] * 2 <= answer){
            break
        }
        
        const count = explore(a,star)
        answer = Math.max(answer, count)
    }
    
    return answer;
}
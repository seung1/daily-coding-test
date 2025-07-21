function solution(k, room_number) {
    var answer = [];
    const visit = new Set()
    const cache = new Map()
    
    const find = (num) => {
        // num이 배정 안되어있으면 배정 & num+1로 캐시
        if(!visit.has(num)){
            cache.set(num, num+1)
            return num
        }
        
        // 배정되어있으면 캐시값 확인해서 재귀로 가져오고, 캐시 갱신
        const next = find(cache.get(num))
        cache.set(num, next+1)
        return next
    }
    
    room_number.forEach((el)=>{
        let i = find(el)
        visit.add(i)
        answer.push(i)
    })
    
    return answer;
}
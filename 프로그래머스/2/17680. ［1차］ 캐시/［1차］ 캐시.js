function solution(cacheSize, cities) {
    var answer = 0;
    
    let cache = []
    // 모두 소문자로 교체
    cities = cities.map((el)=>el.toLocaleLowerCase())
    
    cities.forEach((city)=>{
        const hasCache = cache.includes(city)
        answer += hasCache ? 1 : 5
        
        // 캐시가 있다면 캐시에서 제거
        if(hasCache){
            cache = cache.filter((el)=>el!==city)
        }
        // 용량이 찼다면 오래된 캐시 제거
        else if(cache.length === cacheSize){
            cache.shift()   
        }
        // 현재 도시 캐시에 추가
        if(cache.length < cacheSize){
            cache.push(city)
        }
    })
    
    return answer;
}
function solution(genres, plays) {
    // 장르마다 총 플레이수 저장하는 객체
    let genreObj = {}
    // { "pop": 1000 }
    
    // 0으로 초기화
    genres.forEach((g)=>{
        genreObj[g] = 0
    })
    
    // 플레이수 합산하기
    genres.forEach((g, i)=>{
        genreObj[g] += plays[i] 
    })
    
    // 각 앨범의 정보를 담아서 객체리스트로 만들기
    // [ { "g": "pop", "i" : 0, "plays" : 500 } ]
    const list = genres.map((g,i)=>{
        return {
            "g":g,
            "i":i,
            "p":plays[i]
        }
    })
    
    // 가장 많이 재생된 장르순으로 리스트 만들기 
    const sortedListByGenre = Object.entries(genreObj).sort((a, b) => b[1] - a[1]).map((g)=>g[0])
    
    // 앨범을 많이 재생된 장르순으로 정렬, 장르가 같다면 많은 재생으로 정렬
    const sortedList = list.sort((a,b)=>{
        if(a.g !== b.g){
            return sortedListByGenre.indexOf(a.g) - sortedListByGenre.indexOf(b.g)
        }
        return b.p - a.p
    })
    
    let g = ""
    let cnt = 0
    
    // 만약에 같은 장르가 3개이상이면 제외시키기
    const limitedList = sortedList.filter((el)=>{
        if(el.g!==g){
            g = el.g
            cnt = 1
            return el
        }
        else{
            cnt += 1
            if (cnt <=2){
                return el
            }
        }
    })
    
    // 객체리스트를 indexList로 바꾸는 과정
    const result = limitedList.map((el)=>{
        return el.i
    })
    
    return result;
}
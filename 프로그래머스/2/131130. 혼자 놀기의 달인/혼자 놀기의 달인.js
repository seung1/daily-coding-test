function solution(cards) {
    let map = []
    
    // 1부터 시작해서 쭉 루프 구하기
    const explore = (start) =>{
        let i = start;
        let loop = []
        while (cards[i] !== -1){
            loop.push(i+1)
            let value = cards[i]
            cards[i] = -1
            i = value - 1
        }
        map.push(loop)
    }
    
    for(let i = 0; i<cards.length ; i++){
        if(cards[i] !== -1){
            explore(i)
        }
    }
    map = map.map((el)=>el.length).sort((a,b)=>b-a)
    
    if(map.length === 1){
        return 0
    }
    
    return map[0] * map[1];
}
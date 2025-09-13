function solution(arr) {   
    // 재귀로 큰거에서 쪼개져서 들어가기
    // 4칸을 검사할때 각 칸이 1x1이 되었을때는 4칸 검사의 리턴값주기!
    // start, n으로 네 좌표 구하기
    const getPosition = (x, y, n) => {
        const k = n/2
        const leftTop = [x,y]
        const rightTop = [x,y+k]
        const leftBottom = [x+k,y]
        const rightBottom = [x+k,y+k]
        return [leftTop, rightTop, leftBottom, rightBottom]
    }
    
    const checkAllSame = (result) => {
        if(result[0]===0){
            return [0,1]
        }
        else if(result[1] === 0){
            return [1,0]
        }
        return result
    }
    
    // 시작 좌표, 한칸의 길이, 원본
    const f =  (x, y, n, arr) => {
        const fourPosition = getPosition(x,y,n)
        
        if(n===2){
            // 그냥 각각의 좌표가 모두 같은지 판단
            // 모두 같으면 뭐로 같은지 0 or 1
            // 하나라도 다르면 -1, 뒤에는 개수
            
            const result = [0,0]
            fourPosition.forEach((el)=>{
                const [x1,y1] = el
                result[arr[x1][y1]] += 1
            })
            
            // [0의 개수, 1의 개수], 한쪽이 0이면 다른쪽 개수는 1로 수정
            return checkAllSame(result)
        }
        
        const list = [0,0]
        fourPosition.forEach((el)=>{
            const [x1,y1] = el
            const result = f(x1,y1,n/2,arr)
            list[0] += result[0]
            list[1] += result[1]
        })
        
        return checkAllSame(list)
    }
    
    const answer = f(0,0,arr.length,arr)
    
    return answer;
}
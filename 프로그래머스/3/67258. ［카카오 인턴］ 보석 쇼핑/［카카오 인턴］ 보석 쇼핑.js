function solution(gems) {
    var answer = [];
    
    // 중복제거한 리스트 먼저 구하기
    const uniGems = [...new Set(gems)]
    const totalGemCount = uniGems.length
    
    // 풀이1
    // 슬라이딩 윈도우로 맨앞부터 처음 모든 보석이 나올때까지 right++
    // 모든 보석을 포함한다면 -> left++ 해서 모든 보석이 나오는 최소구간 찾기
    
    // 뒤쪽에도 최소구간이 있을수 있으므로,
    // left+1 하고
    // right ++ 하면서 다시 구간 찾기
    
    let left = -1
    let right = -1
    let window = {}
    let list = new Set()
    
    const moveRange = () => {
        // 유니크한 보석을 모두 포함할때까지 right++
        while(uniGems.length !== list.size && right < gems.length) {
            right+=1
            if(right === gems.length){
                break
            }
            const gem = gems[right]
            
            if(window[gem] ===undefined){
                window[gem]=0
            }
            if(window[gem] === 0){
                list.add(gem)
            }
            window[gem] += 1
        }
        
        // 최소범위가 될떄까지 left++
        while(uniGems.length === list.size && left < gems.length) {
            left+=1
            if(left === gems.length){
                break
            }
            const gem = gems[left]
            if(window[gem] === 1){
                list.delete(gem)
            }
            window[gem] -= 1
        }
        
        return [left, right]
    }
    
    while (right < gems.length){
        const [left, right] = moveRange()
        console.log(left, right)
        
        if(answer.length===0){
            answer = [left+1,right+1]
        }
        else if(answer[1]-answer[0] > right-left){
            answer = [left+1,right+1]
        }
    }
    
    return answer
}
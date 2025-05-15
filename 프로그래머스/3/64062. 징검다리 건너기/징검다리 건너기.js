function solution(stones, k) {
    // k만큼 범위를 무시가능하다
    // k만큼의 범위만큼씩 이동하면서 최대값 들중 최소값
    
    let l = 0
    let r = k-1
    
    let minValue = 20000000000
    let deque =[]
    let deque_leftIndex = -1
    let deque_rightIndex = -1
    let count = 0
    
    const isDequeEmpty = () =>{
        return count === 0
    }
    
    const dequeRightValue = () =>{
        return deque[deque_rightIndex]
    }
    
    const dequeLeftValue = () =>{
        return deque[deque_leftIndex]
    }
    
    const dequePop = () =>{
        deque_rightIndex -= 1
        count -= 1
        return deque[deque_rightIndex + 1]
    }
    
    const dequeShift = () =>{
        if(count >0){
            deque_leftIndex += 1
            count -= 1
        }
    }
    
    const dequePush = (value) =>{
        if(deque_leftIndex===-1){
            deque_leftIndex += 1
        }
        count += 1
        deque_rightIndex += 1
        if(deque.length === deque_rightIndex){
            deque.push(value)
        }
        else{
            deque[deque_rightIndex] = value
        }
    }
    
    for (let i =l; i<= r ; i++){
        while(!isDequeEmpty() && stones[dequeRightValue()] < stones[i]){
            dequePop()
        }
        dequePush(i)
    }
    minValue = Math.min(minValue, stones[dequeLeftValue()])
    l+=1
    r+=1
    
    while(r<stones.length){
        // 덱의 가장 우측값보다 큰수가 들어오면, 들어오는 수가 우측값보다 작아질때까지 pop
        while(!isDequeEmpty() && stones[dequeRightValue()] < stones[r]){
            dequePop()
        }
        dequePush(r)
        
        // 윈도우 밖으로 나가는 값이 덱안에 있을 경우 빼주기
        if(l-1 >=dequeLeftValue()) {
            dequeShift()
        }
        
        // 최소값 계산
        minValue = Math.min(minValue,stones[dequeLeftValue()])
        l+=1
        r+=1
    }
    
    return minValue;
}
function solution(users, emoticons) {
    // 우선순위 서비스 가입자 늘리기 > 판매액 늘리기
    // [40, 10000] 40프로 이상 할인하면 구매, 구매액이 10000이상이면 가입
    // 할인은 10 20 30 40 만 가능한데 4의 거듭제곱 경우의 수가 발생
    
    // 이 이모티콘 가격으로 전체 순회하면서 계산하기
    const calc = (emos, users)=>{
        let members = 0
        let amount = 0
        users.forEach((user)=>{
            const [persent, total] = user
            let sum = 0
            emos.forEach((emo)=>{
                const [per, price] = emo
                if(per>=persent){
                    sum+=price
                }
            })
            if(sum>= total){
                members+=1
            }
            else{
                amount+=sum
            }
        })
        
        return [members, amount]
    }
    
    // 모든 할인율 계산하기
    let result = []
    const present = [40,30,20,10]
    const makeList = (arr) =>{
        if(arr.length===emoticons.length){
            result.push(arr)
            return
        }
        
        present.forEach((el)=>{
            const temp = [...arr,el]
            makeList(temp)
        })
    }
    makeList([])
    
    let maxMem = 0
    let maxPrice = 0
    
    result.forEach((persent,idx)=>{
        const emos = emoticons.map((emotion, index)=>{
            return [persent[index], (emotion*(100 - persent[index]) / 100)]
        })
        
        const res = calc(emos,users)
        if(res[0] > maxMem){
            maxMem = res[0]
            maxPrice = res[1]
        }
        else if (res[0] === maxMem && res[1] > maxPrice){
            maxPrice = res[1]
        }
    })
    
    return [maxMem, maxPrice];
}
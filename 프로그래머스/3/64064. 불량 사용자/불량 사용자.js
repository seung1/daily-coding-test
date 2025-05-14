function solution(user_id, banned_id) {
    // 각 밴id당 해당하는게 몇개인지
    // {banId : [해당하는 id]}
    
    // 벤규칙을 순회하면서 해당하는 아이디 개수 전부 곱하기.
    // 아이디 선택할때 이미 선택된것은 제외   ....... 재귀로 구하기
    
    const banId_userId = {}
    
    const getBannedUserList = (banId)=>{
        let list =[]
        let banId_len = banId.length
        
        for(let i =0 ;i<user_id.length; i++){
            let isMatch = true
            const userId_len = user_id[i].length
            if(banId_len ===userId_len){
                for(let j=0; j<userId_len;j++){
                    if(!('*'===banId[j] || banId[j] === user_id[i][j])){
                        isMatch = false
                        break
                    }
                }
            }
            else{
                isMatch = false
            }
            
            if(isMatch){
                list.push(user_id[i])
            }
        }
        return list
    }
    
    banned_id.forEach((el)=>{
        banId_userId[el] = getBannedUserList(el)
    })
    
    let bannedList = []
    
    const getBanUser = (i,arr) =>{
        if(arr.length === banned_id.length){
            const newArr = arr.sort().join("-")
            if(!bannedList.includes(newArr)){
                bannedList.push(newArr)
            }
            return
        }
        
        if(banId_userId[banned_id[i]]===undefined){
            return
        }
        
        banId_userId[banned_id[i]].forEach((el)=>{
            if(!arr.includes(el)){
                getBanUser(i+1,[...arr, el])
            }
        })
    }
    
    getBanUser(0,[])
    
    return bannedList.length;
}
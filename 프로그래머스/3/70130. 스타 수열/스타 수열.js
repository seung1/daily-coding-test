// 부분 수열 - 원래 수열에서 부분 집합이면서 순서일치

// 스타수열
// 1. 짝수개의 원소를 가진다.
// 2. 두개씩 묶었을때, 두개가 서로 다르다.
// 3. 두개씩 묶은것들은 모두 공통된 하나이상의 원소를 가진다.

// 공통된 원소!

function solution(a) {
    var answer = 0;
    
    // 1. 각 원소의 개수를 체크하는 객체 만들기
    const map = {}
    a.forEach((el)=>{
        if(map[el]===undefined){
            map[el] = 0
        }
        map[el] += 1
    })
    
    // 2. 객체를 배열로 만들고, 개수가 큰 순서대로 정렬하기
    const mapList = Object.entries(map).sort((a,b)=>b[1]-a[1])
    
    // 3. 개수가 가장 많은 값부터 탐색로직 돌리기
    for(let i = 0; i<mapList.length; i++){
        const star = Number(mapList[i][0])
        
        // 개수의 2배가 이미 구한 수열의 길이보다 같거나 작을 경우, 
        // 더 이상 큰수가 나올수 없으므로 빠져나오기
        if(mapList[i][1] * 2 <= answer){
            break
        }
        
        const count = explore(a,star)
        answer = Math.max(answer, count)
    }
    
    // 4. 순회하면서, star 값하고 temp 값을 체크해 나가기
    function explore (arr, key) {
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
    
    return answer;
}
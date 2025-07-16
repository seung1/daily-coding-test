function solution(str1, str2) {
    // 영문자를 모두 소문자로 통일
    let a = str1.toLocaleLowerCase()
    let b = str2.toLocaleLowerCase()
    
    // 두글자씩 끊어 관리할 배열
    let aList = []
    let bList = []
    
    // 각 원소가 몇개있는지 체크하는 객체
    const aCount = {}
    const bCount = {}
    
    // 영문자가 아닌 문자가 있는 경우 배열에 추가하지 않기
    const regex = /[^a-z]/
    for(let i =1;i<a.length; i++){
        const newWord = a[i-1]+a[i]
        if(!regex.test(newWord)){
            aList.push(newWord)
            
            // 원소의 개수 카운트
            if(aCount[newWord] === undefined){
                aCount[newWord] = 0
            }
            aCount[newWord] += 1
        }
    }
    for(let i =1;i<b.length; i++){
        const newWord = b[i-1]+b[i]
        if(!regex.test(newWord)){
            bList.push(newWord)
            
            if(bCount[newWord] === undefined){
                bCount[newWord] = 0
            }
            bCount[newWord] += 1
        }
    }
    
    // 교집합의 원소 개수 카운팅
    let count = 0
    const visit = new Set()
    aList.forEach((el)=>{
        if(bList.includes(el) && !visit.has(el)){
            visit.add(el)
            count+= Math.min(aCount[el],bCount[el])
        }
    })
    
    if(aList.length + bList.length - count === 0){
        return 65536
    }
    
    const answer = Math.floor(count* 65536 / (aList.length + bList.length - count))
    
    return answer;
}
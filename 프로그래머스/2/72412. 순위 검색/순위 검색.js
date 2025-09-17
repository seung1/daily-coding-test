function solution(info, query) {
    var answer = [];
    
    // 언어, 직군, 경력, 소울푸드, 점수
    const map = {}
    const lang = ["-", "cpp", "java", "python"]
    const position = ["-", "backend", "frontend"]
    const history = ["-", "junior", "senior"]
    const food = ["-", "chicken", "pizza"]
    
    // 시도3 - 쿼리에 맞는 점수정보를 미리 저장 (사전작업 필요) 그리고 조건에 맞는 배열에서 이진 탐색
    // 쿼리키에 맞는 자료구조 초기 배열 저장
    for(const a of lang){
        for(const b of position){
            for(const c of history){
                for(const d of food){
                    const key = [a,b,c,d].join(" ")
                    map[key] = []
                }
            }
        }
    }
    
    // 쿼리키에 맞게 미리 저장해두기
    info.forEach((el)=>{
        const [lang, posi, his, food, scoreStr] = el.split(" ")
        const score = Number(scoreStr)
        
        for(const a of ["-", lang]){
            for(const b of ["-", posi]){
                for(const c of ["-", his]){
                    for(const d of ["-", food]){
                        const key = [a,b,c,d].join(" ")
                        map[key].push(score)
                    }
                }
            }
        }
    })
    
    // 정렬
    for(const a of lang){
        for(const b of position){
            for(const c of history){
                for(const d of food){
                    const key = [a,b,c,d].join(" ")
                    map[key].sort((a,b)=>a-b)
                }
            }
        }
    }
    
    query.forEach((el)=>{
        const removeAnd = el.replaceAll(" and","")
        const [lang, posi, his, food, scoreStr] = removeAnd.split(" ")
        const score = Number(scoreStr)
        
        const key = [lang, posi, his, food].join(" ")
        let result = 0
        
        let start = 0
        let end = map[key].length
        let cur = 0
        while(start<=end){
            cur = Math.floor((start+end)/2)
            if((cur===0 && map[key][cur]>=score) ||(map[key][cur] >= score && map[key][cur-1]<score)){
                break
            }
            else{
                if(map[key][cur] >= score){
                    end = cur-1
                }else {
                    start = cur+1
                }
            }
        }
        result = map[key].length - cur // cur부터 끝까지의 개수
        answer.push(result)
    })
    
    
    // 시도1 - 각 조건에 맞는 값을 객체로 저장하고 그때마다 순회하여 카운트
//     for(const a of lang){
//         map[a] = {}
//         for(const b of position){
//             map[a][b] = {}
//             for(const c of history){
//                 map[a][b][c] = {}
//                 for(const d of food){
//                     map[a][b][c][d] = []
//                 }
//             }
//         }
//     }
    
//     info.forEach((el)=>{
//         const [lang, posi, his, food, score] = el.split(" ")
//         map[lang][posi][his][food].push(Number(score))
//     })
    
//     query.forEach((el)=>{
//         const [lan, posi, his, fooAndsco] = el.split(" and ")
//         const [foo, sco] = fooAndsco.split(" ")
//         const a = lan === "-" ? lang : [lan]
//         const b = posi === "-" ? position : [posi]
//         const c = his === "-" ? history : [his]
//         const d = foo === "-" ? food : [foo]
        
//         let count = 0
//         for(const i1 of a){
//             for(const i2 of b){
//                 for(const i3 of c){
//                     for(const i4 of d){
//                         map[i1][i2][i3][i4].forEach((el)=>{
//                             if(el>=sco){
//                                 count += 1
//                             }
//                         })
//                     }
//                 }
//             }
//         }
//         answer.push(count)
//     })
    
    // 시도2 - 각 조건에 맞는걸 배열로 저장하고, score를 먼저 걸러내고 그다음 카운트
//     let userInfo = []
//     userInfo = info.map((el)=>{
//         const [lang, posi, his, foo, score] = el.split(" ")
//         return [Number(score), lang, posi, his, foo]
//     })
    
//     userInfo = userInfo.sort((a,b)=>a[0]-b[0])
    
//     query.forEach((el)=>{
//         const [lan, posi, his, fooAndsco] = el.split(" and ")
//         const [foo, sco] = fooAndsco.split(" ")
//         const score = Number(sco)
        
//         let count = 0
//         for(const user of userInfo){
//             // [sco, lang, posi, his, foo] = user
//             if(user[0] >= score){
//                 if(["-",user[1]].includes(lan) && ["-",user[2]].includes(posi)
//                    && ["-",user[3]].includes(his) && ["-",user[4]].includes(foo)){
//                    count += 1
//                    }
//             }
//         }
        
//         answer.push(count)
//     })
    
    return answer;
}
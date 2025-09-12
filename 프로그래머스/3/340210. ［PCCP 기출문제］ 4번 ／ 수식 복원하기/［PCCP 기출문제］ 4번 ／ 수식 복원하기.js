// 몇진법인지 모르는 상태로 주어진 표현식을 보고 X에 맞는 수를 채워넣기
// 만약 가능한 진법이 여러개인 경우, X를 ?로 바꾸어 리턴

function solution(expressions) {
    var answer = [];
    
    // a와 b를 n진법으로 fig 연산한 것이 result인지 체크!
    const calc =(a, b, n, fig, result)=>{
        const numA = parseInt((a), n)
        const numB = parseInt((b), n)
        const numR = parseInt((result), n)
        if(fig==="+"){
            return (numR) === (numA+numB)
        }
        return (numR) === (numA-numB)
    }
    
    // a와 b를 n진법으로 계산한 결과
    const express = (a, b, n, fig)=>{
        const numA = parseInt((a), n)
        const numB = parseInt((b), n)
        if(fig==="+"){
            return (numA+numB).toString(n)
        }
        return (numA-numB).toString(n)
    }
    
    let list = [2,3,4,5,6,7,8,9]
    expressions.forEach((el)=>{
        const [a, fig, b, eq, result] = el.split(" ")
        // 최소 진법 확인용 - 각 숫자를 구성하는 최대 숫자구해서 최소 진법 구하기
        const maxA = Math.max(...a.split("").map(Number)) 
        const maxB = Math.max(...b.split("").map(Number)) 
        const maxR = result==="X" ? 1 : Math.max(...result.split("").map(Number))
        const minNum = Math.max(maxA, maxB, maxR)
        list = list.filter((e)=>e>minNum)

        // 미지 표현식 담기
        if(result ==="X"){
            answer.push(el)
        }
        else{
            // 미지 표현식이 아닌경우는 진법 줄이기
            list = list.filter((e)=>{
                return calc(a, b, e, fig, result)
            })
        }
    })
    
    // 미지 표현식 계산하기
    answer = answer.map((el)=>{
        let results = []
        const [a,fig,b, eq, result] = el.split(" ")
        
        // 진법 순회하면서 결과 담기
        list.forEach((e)=>{
            const result = express(a,b,e,fig)
            results.push(result)
        })
        
        // 중복 제거했을때 하나의 결과가 나온다면, 그 표현식으로 리턴하기
        results = [...new Set(results)]
        if(results.length === 1){
            return [a,fig,b, eq, results[0]].join(" ")
        }
        // 결과가 2개이상인경우, ?로 리턴하기
        return [a,fig,b, eq, "?"].join(" ")
    })
    
    return answer;
}
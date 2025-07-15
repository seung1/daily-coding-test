function solution(arr1, arr2) {
    var answer = [];
    
    // 첫번째 행렬의 가로 x 두번째 행렬의 세로
    // arr1[][i] * arr2[i][]
    
    // arr1[0][i] * arr2[i][0]
    // arr1[0][i] * arr2[i][1]
    
    for(let i = 0; i<arr1.length; i++){
        let list = []
        for(let j =0; j<arr2[0].length; j++){
            let sum = 0
            for(let k=0; k<arr1[0].length; k++){
                sum += arr1[i][k] * arr2[k][j]
            }
            list.push(sum)
        }
        answer.push(list)
    }
    
    return answer;
}
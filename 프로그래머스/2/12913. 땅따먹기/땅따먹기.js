function solution(land) {
    for(let i =1; i<land.length; i++){
        for(let j=0;j<4;j++){
            let temp = []
            for(let k=0;k<4;k++){
                if(k!==j){
                    temp.push(land[i-1][k])
                }
            }
            land[i][j] += Math.max(...temp)
        }
    }

    return Math.max(...land[land.length-1]);
}
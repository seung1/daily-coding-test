function solution(m, n, puddles) {
    // 이차원 배열 만들기
    const arr = Array.from({ length: m+1 }, () => new Array(n+1).fill(0));
    // 시작지점 : 0,0이 아닌 1,1로 하게되면 모서리 예외처리를 하지 않아도 된다.
    arr[1][1] = 1
    
    // 미리 웅덩이 표시
    puddles.forEach((el)=>{
        const [x,y] = el
        arr[x][y] = -1
    })
    
    for(let i = 1; i<= m; i++){
        for(let j = 1; j<= n; j++){
            // 웅덩이면 0으로 고정
            if (arr[i][j] === -1){
                arr[i][j] = 0
            }
            
            // 웅덩이가 아니면 계산
            else if(i!==1 || j!==1){
                arr[i][j] = arr[i-1][j]+arr[i][j-1]
                
               // 계산결과에 대해서 1000000007로 나누기
               while (arr[i][j] > 1000000007){
                   arr[i][j] = arr[i][j] % 1000000007
               }
            }
        }
    }
    
    return arr[m][n] 
}
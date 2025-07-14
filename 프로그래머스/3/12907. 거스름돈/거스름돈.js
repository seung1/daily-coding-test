function solution(n, money) {
    
    // 돈을 선택할때는, 큰 단위부터 선택해나가기
    
    // 큰 단위 하나 선택하고
    // 남은 양중에서 큰단위가 하나 더 들어간다면 하나 더 선택
    // 작은 단위로 넘어가기
    
    const dp = Array(n+1).fill(0)
    dp[0] = 1
    
    for (let coin of money) {
        for (let i = coin; i <= n; i++) {
            dp[i] = (dp[i] + dp[i - coin]) % 1000000007;
        }
    }
    
    return dp[n];
}
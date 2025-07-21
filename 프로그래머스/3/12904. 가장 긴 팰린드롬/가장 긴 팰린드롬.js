function solution(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    let maxLen = 1;

    // 길이 1인 부분 문자열은 항상 팰린드롬
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // 길이 2인 부분 문자열 처리
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLen = 2;
        }
    }

    // 길이 3 이상인 경우
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                maxLen = len;
            }
        }
    }

    return maxLen;
}

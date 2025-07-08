function solution(name) {
    var answer = 0;
    
    // 각 글자가 몇번 걸리는지 자리마다 체크
    const charList = name.split("")
    const countList = charList.map((char)=>{
        const count = Math.abs(char.charCodeAt()-65)
        if(count >13){
            return Math.abs(count - 26)
        }
        return count
    })
    
 
    const len = name.length;

    // 1. 이름 완성하는 데 드는 총 최소 이동 횟수
    answer += countList.reduce((acc, cur) => acc + cur, 0);

    // 2. 좌우 이동 최소 조작 계산
    let move = len - 1; // 초기값: 한 방향 끝까지 가는 경우

    for (let i = 0; i < len; i++) {
        let next = i + 1;
        // 연속된 A 구간의 끝을 찾음
        while (next < len && name.charAt(next) === 'A') {
            next++;
        }
        // i: 현재까지 이동한 커서 위치
        // next: A 구간 이후 첫 변경 지점
        // 왼쪽으로 갔다가 다시 돌아오는 경우와 비교
        move = Math.min(move, i + len - next + Math.min(i, len - next));
    }

    // 3. 결과 계산
    return answer + move;
}
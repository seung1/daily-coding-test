function solution(n)
{
    var ans = 0;

    // k칸 점프 -> 배터리 K만큼 소모
    // x2 순간이동 -> 배터리 소모x
    
    let value = n
    while(value !==0){
        if(value %2 === 0){
            value = value /2
        }
        else {
            value -= 1
            ans += 1
        }
    }
    
    return ans
}
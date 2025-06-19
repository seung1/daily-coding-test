function solution(n) {
    let fn = []
    fn.push(0)
    fn.push(1)
    fn.push(2)
    
    for(let i =3;i<=n;i++){
        let temp = fn[i-1]+fn[i-2]
        while(temp>=1000000007){
            temp = temp % 1000000007
        }
        
        fn.push(temp)
    }
    
    return fn[n];
}
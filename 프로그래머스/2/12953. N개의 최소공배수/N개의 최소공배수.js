function solution(arr) {
    if(arr.length===1){
        return arr[0]
    }
    
    const getLCM = (a,b) =>{
        let x = Math.max(a,b)
        let y = Math.min(a,b)
        let temp = y
        
        while (temp !== 0) {
            [x, temp] = [temp,x % temp]
        }
        
        return  (a/x) * b
    }
    
    let LCM = getLCM(arr[0],arr[1])
    for(let i=0 ; i<arr.length; i++){
        LCM = getLCM(arr[i],LCM)
    }
  
    return LCM;
}
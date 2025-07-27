function solution(s) {
    const keyword = {
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9,
        "zero":0
    }
    
    for(const key in keyword){
        s=s.replaceAll(key,keyword[key])
    }
    
    return Number(s);
}
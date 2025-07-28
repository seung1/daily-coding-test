function solution(m, musicinfos) {
    var answer = '(None)';
    let maxLen = 0
    
    const time = (start,end) => {
        const [sH,sM] = start.split(":").map(Number)
        const [eH,eM] = end.split(":").map(Number)
        
        return (eH-sH) * 60 + eM-sM
    }
    
    const getSongList = (song) => {
        const list = song.split("")
        const result = []
        let i = 0
        while(i < list.length){
            if(i+1<list.length && list[i+1] === "#"){
                result.push(list[i]+"#")
                i+=2
            }
            else {
                result.push(list[i])
                i+=1
            }
        }
        return result
    }
    
    musicinfos.forEach((el)=>{
        const [start, end, title, song] = el.split(",")
        const len = time(start,end) // 전체 재생 시간
        let result = ""
        
        // C#을 2분으로 체크하는 문제를 해결하기 위해 음단위로 쪼개기
        const songList = getSongList(song)
        const songLen = songList.length // 한곡의 길이
        
        if(songLen < len){
            result = song.repeat(Math.floor(len/songLen))
            
            const remainTime = len - Math.floor(len/songLen) * songLen
            result += songList.slice(0,remainTime).join("")
        }
        else{
            result = songList.slice(0,len).join("")
        }
        
        if(result.includes(m+"#")){
            result = result.replaceAll(m+"#","")
        }
        
        // C인데 C#을 체크하지 않게
        if(result.includes(m)&& maxLen<len){
            answer = title
            
            // 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
            maxLen = len
        }
    })
    
    return answer;
}
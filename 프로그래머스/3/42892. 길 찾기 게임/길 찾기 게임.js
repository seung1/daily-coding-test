function solution(nodeinfo) {
    var answer = [[]];
    
    const n = nodeinfo.length
    const indexedList = nodeinfo.map((el,index)=>{
        return [...el, index+1]
    })
    
    const sortedListTopDown = indexedList.sort((a,b)=>{
        if(a[1]===b[1]){
            return a[0]-b[0]
        }
        return b[1]-a[1]
    })
    
    // 계속 루트에서 시작해서 내려가면서 추가하는 방식
    const top = sortedListTopDown[0]
    const left = Array(n+1).fill(-1)
    const right = Array(n+1).fill(-1)
    
    const map = {}
    sortedListTopDown.forEach((el)=>{
        const [x,y,value] = el
        map[value] = [x,y]
    })
    
    // 탐색해서 추가하는 함수
    const addNode = (root, node) =>{
        const [x,y,value] = node
        let [fx, fy, fv] = root
        
        // flag의 x좌표 기준으로 좌측 -> left에 담기
        if(fx > x){
            if(left[fv] === -1){
                left[fv] = value
            }else{
                addNode([...map[left[fv]],left[fv]], node)
            }
        }else{
            if(right[fv] === -1){
                right[fv] = value
            }else{
                addNode([...map[right[fv]],right[fv]], node)
            }
        }
    }
    for(let i =1;i<n;i++){
        addNode(top,sortedListTopDown[i])
    }
    
    // 전위순회
    const preorderList = []
    const preorder = (nodeValue) => {
        if(nodeValue===-1){
            return
        }
        preorderList.push(nodeValue)
        preorder(left[nodeValue])
        preorder(right[nodeValue])
    }
    preorder(top[2])
    
    // 후위순회
    const postorderList = []
    const postorder = (nodeValue) => {
        if(nodeValue===-1){
            return
        }
        postorder(left[nodeValue])
        postorder(right[nodeValue])
        postorderList.push(nodeValue)
    }
    postorder(top[2])
    
    return [preorderList,postorderList]
}
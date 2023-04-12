function solution(sizes) {
    var answer = 0;


    newSize = sizes.map(([H,V])=> {
        if(H < V) {
            return [V,H] 
        }else{
            return [H,V]
        }
    })//map은 새로 메모리 생성!!
    console.log([...newSize])
    
    let max = [0,0];
    
    newSize.map(([H,V])=>{ //forEach는 메모리 생성 ㄴㄴ!!
        if(H > max[0]) max[0] = H;
        if(V > max[1]) max[1] = V;       
    })  
    
    console.log(newSize)
    return max[0]*max[1];
}
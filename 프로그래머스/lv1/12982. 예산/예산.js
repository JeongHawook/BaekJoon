function solution(d, budget) {
    let answer = 0;
     let count = 0;
    
    d= d.sort((a,b)=>a-b);
    
    for(let i =0 ; i<d.length;i++){
          budget -= d[i]
        if(budget >= 0){ //6 < 10
            console.log(budget)
            count++;
        }else{
            break
        }
    }
    return count;
}
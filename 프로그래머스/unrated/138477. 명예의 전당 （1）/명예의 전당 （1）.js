function solution(k, score) {
    let answer = [];
    let array = []
    let min = 0;
    for(i=0;i<score.length;i++){
        if(array.length<k){
            array.push(score[i])
           
            array.sort((a,b)=>{
                return b-a
            })
            
            answer.push(array[i])
             console.log(answer)
        }else{
            array.push(score[i])
            
            array.sort((a,b)=>{
                return b-a
            })
            
            answer.push(array[k-1])
        }
        
       
  
    }
 
    
    return answer;


}
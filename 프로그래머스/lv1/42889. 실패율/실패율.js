function solution(N, stages) {
    var answer = [];
    let people = stages.length
    let idx=1
    let final=[]
    
    for(let i=1; i<=N; i++){
       let count=0;
        for(let j=0; j<=stages.length; j++){
            
            if(stages[j]>N){
                //어케할까
            }
            if(i==stages[j]){
                count++;
            }
         
            
        }         
        let number =count/people
       
        answer.push({idx:idx,value:number})
        idx++;
        people-=count;      
    }
            
    answer.sort((a,b)=> b.value-a.value)
    console.log(answer)
    for(let i=0; i<answer.length;i++)
        final[i] = answer[i].idx
    return final;
}
function solution(array, commands) {
    var answer = [];
    
    
    for(let i=0; i<commands.length; i++){
        let start= commands[i][0] -1
        let end= commands[i][1]
        let index=commands[i][2] -1

        let numbers=array.slice(start,end).sort((a,b)=>a-b)
     
            answer[i]= numbers[index]
         //하 너무 1자였다. 수학적 마인드로 다시 써보자.
    }
    return answer;
}
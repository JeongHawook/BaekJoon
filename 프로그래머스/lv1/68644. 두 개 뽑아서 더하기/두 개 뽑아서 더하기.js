function solution(numbers) {
    var answer = [];
    
for(let i =0; i<numbers.length; i++){
    for(let j =i+1; j<numbers.length; j++){
        answer.push(numbers[i]+numbers[j]);
    }
}
    answer.sort((a,b)=>a-b);
    answer  = answer.filter((val,index)=>val!=answer[index+1])
    console.log(answer)
    
    
    return answer;
}
function solution(s) {
    var answer = '';
    let numbers = (s.split(" "))
    let max = 0;
    for(i=0;i<numbers.length;i++){
        for(k=i+1;k<numbers.length;k++){
            
            if(numbers[i]<numbers[k]){
                max = numbers[i]
                 
            }
        }
      
        
    }
   console.log(max)
    return answer;
}
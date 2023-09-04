function solution(food) {
    var answer = '';
  
     for(i=1;i<food.length;i++){
         let result= parseInt(food[i]/2)
          for(j=0;j<result;j++){
              answer += i
          }
    
     }


   let answer2 = answer.split('').sort().reverse().join('');

         return answer+0+answer2;
}
function solution(s) {
    var answer = '';
    let words = s.split(" ")

    for(i=0;i<words.length; i++){
      console.log(words.length)
        for(j=0; j<words[i].length; j++){
              
          if(j%2==0){
           
          answer +=words[i][j].toUpperCase()

          }else{
          answer += words[i][j].toLowerCase()
     
          }
    
        }
        if(i < words.length-1) {
            answer += ' ';
        }
      
 }
    return answer;

}
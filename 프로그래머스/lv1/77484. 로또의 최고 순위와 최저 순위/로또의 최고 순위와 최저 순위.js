function solution(lottos, win_nums) {
     let answer = [];
      let   random=0;
     let   count =0;
        for(i = 0; i<lottos.length; i++){
                  
            for(j = 0; j<lottos.length; j++){
                       if(lottos[i]==0){
                            random++;
                             break;
                       }    
                       if(lottos[i] == win_nums[j]){
                            count++;   
                           
                       }
            }       
        
        }
        
            answer[0]=7-(count + random);//2개 일치 2개 랜던
            answer[1]=7-(count);
            if(answer[1]>=7){
                answer[1] = 6;
            }
            if(answer[0]>= 7){
                answer[0] = 6;
            }
        
   //     System.out.println(random);
  //      System.out.println(count);
        return answer;
}
function solution(n)
{
    var answer = 0;

    while(true){    //n=1543
        
       answer+= Math.floor(n%10)   //answer = 3+4+5
       if(n < 10){
           break
       }
        
        
       n= (n/10)        //1
    }

    return answer;
}
function solution(n) {
    var answer = 0;
    let isPrime =[false];
    
   
    
    isPrime[0] = true;
    isPrime[1] = true;
  
    for(let i=2; i<=n; i++){
        for(let j=i*i ; j<=n ; j+=i)
        isPrime[j] = true;    
    }
    
    for(let i = 0; i<= n; i++){
        if(!isPrime[i]){
            answer++;
        }
    }
    return answer;
}
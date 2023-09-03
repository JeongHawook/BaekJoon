function solution(n) {
    var answer = 0;
    while(true){
        if(n%answer==1){
        break    
        }
        answer++;
    }
    return answer;
}
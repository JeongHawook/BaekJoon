function solution(n, m) {
    var answer = [];
      
    let result = rotate(m,n)
    console.log(result)
    
    answer[0]= result
    answer[1]= (n*m)/result
    
    return answer;
}

function rotate(large , small){
    
    let temp = large%small
    
    if(temp == 0){
        return small;
    }
    
    return rotate(small, temp)
    
}
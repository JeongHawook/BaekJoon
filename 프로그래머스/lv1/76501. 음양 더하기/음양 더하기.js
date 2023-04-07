function solution(absolutes, signs) {

let result =0;
    //index[i] == true

    for (let index = 0; index < absolutes.length; index++) {
        
    if(signs[index]){
        result += absolutes[index];
    }else{
        result-=absolutes[index];
    }
    }
    
    return result
    
    
    
}